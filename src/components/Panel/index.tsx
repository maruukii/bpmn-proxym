import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "lodash";
import { setElement } from "../../store/modeler/modelerSlice";
import { RootState } from "../../store/store";
import { Connection, Label, Shape } from "bpmn-js/lib/model/Types";
import BpmnIcon from "../Common/BpmnIcon";
import getBpmnIconType from "../bpmn-icons/getIconType";
import bpmnIcons from "../bpmn-icons";
import stencils from "../../tasks/stencils.json";
import properties from "../../tasks/properties.json";
import DynamicProperty from "./components/dynamicProperty";
import { withTranslation } from "react-i18next";
import { getDynamicProperty } from "../../utils/dynamicPropertyUtil";
import { getBusinessObject } from "bpmn-js/lib/util/ModelUtil";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
export function PropertiesPanel({ t }: { t: any }) {
  const dispatch = useDispatch();
  const panelRef = useRef<HTMLDivElement>(null);

  const { elementRegistry, modeler, activeElement, modeling } = useSelector(
    (state: RootState) => state.modeler
  );
  const [icon, setIcon] = useState<string | null>(null);
  const [elementState, setElementState] = useState({
    currentElementId: "",
    currentElementType: "",
    panelTitle: "Properties Panel",
    bpmnIconName: "",
    bpmnElement: "",
    bpmnElementName: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  // const tagNames = useMemo(() => {
  //   const extractTagsWithProperties = (types: any[]) => {
  //     const result: Record<string, any[]> = {};
  //     const generalType = types.find((type) => type.name === "General");
  //     const generalProps = generalType?.properties || [];

  //     types.forEach((type) => {
  //       if (
  //         (type?.extends && type.properties) ||
  //         (type?.meta?.allowedIn && type.properties)
  //       ) {
  //         type?.extends?.forEach((extendType: string) => {
  //           const tagName = extendType.split(":")[1];
  //           result[tagName] = result[tagName] || [];
  //           type.properties.forEach((prop: any) => {
  //             if (
  //               !result[tagName].some((existing) => existing.name === prop.name)
  //             ) {
  //               result[tagName].push(prop);
  //             }
  //           });
  //         });

  //         type?.meta?.allowedIn?.forEach((allowedInType: string) => {
  //           const tagName = allowedInType
  //             ? allowedInType.split(":")[1]
  //             : type.name;
  //           result[tagName] = result[tagName] || [];
  //           type.properties.forEach((prop: any) => {
  //             if (
  //               !result[tagName].some((existing) => existing.name === prop.name)
  //             ) {
  //               result[tagName].push(prop);
  //             }
  //           });
  //         });
  //       }
  //     });

  //     Object.keys(result).forEach((tagName) => {
  //       result[tagName] = [...generalProps, ...result[tagName]];
  //     });

  //     return result;
  //   };

  //   return extractTagsWithProperties(flowable.types);
  // }, []);

  const tagNames = useMemo(() => {
    const extractTagsWithProperties = (stencils: any[]) => {
      const result: Record<string, any> = {};

      stencils.forEach((stencil) => {
        const tagName = stencil.id;

        // Init result with shallow copy
        result[tagName] = { ...stencil };

        // Get full property objects
        const populatedPackages = (stencil.propertyPackages || [])
          .map((pkgName: string) =>
            properties.propertyPackages.find((p: any) => p.name === pkgName)
          )
          .filter(Boolean); // remove any that weren't found

        // Sort logic
        const sortPriority = [
          "overrideidpackage",
          "namepackage",
          "documentationpackage",
        ];
        const sortedPackages = [
          ...sortPriority
            .map((priority) =>
              populatedPackages.find((p: any) => p.name === priority)
            )
            .filter(Boolean),
          ...populatedPackages
            .filter((p: any) => !sortPriority.includes(p.name))
            .sort((a: any, b: any) => a.name.localeCompare(b.name)),
        ];

        // Assign sorted property packages
        result[tagName].propertyPackages = sortedPackages;
      });

      return result;
    };

    return extractTagsWithProperties(stencils.stencils);
  }, [stencils, properties]);

  const setCurrentElement = throttle(
    (element: Shape | Element | Connection | Label | null) => {
      let activatedElement: BpmnElement | undefined = element;

      if (!activatedElement) {
        activatedElement =
          elementRegistry?.find((el: any) => el.type === "bpmn:Process") ||
          elementRegistry?.find((el: any) => el.type === "bpmn:Collaboration");

        if (!activatedElement) return;
      }

      const activatedElementTypeName = getBpmnIconType(activatedElement);
      const elementType = activatedElement.type.split(":")[1];
      const iconName =
        bpmnIcons[activatedElementTypeName as keyof typeof bpmnIcons];

      // Set Redux state
      dispatch(setElement(activatedElement));

      // Local state for rendering
      setElementState({
        currentElementId: activatedElement.id,
        currentElementType: elementType,
        panelTitle: "Properties Panel",
        bpmnIconName: iconName,
        bpmnElement: activatedElementTypeName,
        bpmnElementName: (getDynamicProperty(activatedElement, "name") ||
          "") as string,
      });
    },
    100,
    { leading: true, trailing: true }
  );

  useEffect(() => {
    if (!modeler) return;
    //
    modeler.on("selection.changed", ({ newSelection }) => {
      setCurrentElement(newSelection[0] || null);
    });

    // modeler.on("element.changed", ({ element }: any) => {
    //   if (element?.id === elementState.currentElementId) {
    //     setCurrentElement(element);
    //   }
    // });
  }, [modeler, elementRegistry, elementState.currentElementId]);
  const tag = useMemo(() => {
    if (!activeElement) return null;

    const bo = getBusinessObject(activeElement);
    if (!bo || !modeler) return null;

    let computedTag = tagNames[activeElement.type.split(":")[1]];

    if (activeElement.type.split(":")[1] === "Collaboration") {
      computedTag = tagNames["Process"];
    }

    if (bo?.eventDefinitions) {
      const matchedTag = Object.values(tagNames).find((item: any) => {
        return (
          item?.eventDefinitionType?.split(":")[1] ===
            bo.eventDefinitions[0]?.$type?.split(":")[1] &&
          bo?.$type === item.bpmnType
        );
      });
      if (matchedTag) {
        computedTag = matchedTag;
      }
    }

    if (bo?.type) {
      const matchedTag = Object.values(tagNames).find((item: any) => {
        return bo?.type === item?.flowableType;
      });
      if (matchedTag) {
        computedTag = matchedTag;
      }
    }
    return computedTag;
  }, [activeElement, modeler, tagNames]);

  useEffect(() => {
    if (tag) {
      setIcon(tag?.icon);
    }
  }, [tag]);

  const renderProperties = () => {
    return (
      <DynamicProperty
        tags={tag.propertyPackages}
        activeElement={activeElement}
        modeling={modeling}
        modeler={modeler}
      />
    );
  };
  return (
    <>
      {/* Slide-in Panel */}
      {isOpen && (
        <div className="fixed h-full right-0 z-[100]">
          <div
            ref={panelRef}
            className={`properties-panel p-4 relative top-0 right-0 overflow-auto h-[79vh]  bg-white shadow-lg border-l border-gray-300 
        transition-transform duration-300 ease-in-out w-[30vw]
        translate-x-0`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">
                {t(elementState.panelTitle)}
              </h2>
              <button onClick={() => setIsOpen(false)}>
                <ChevronDoubleRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Panel Content */}
            <div className="panel-header flex items-center mb-4">
              {icon ? (
                <img src={`/icons/${icon}`} alt="" className="w-8 h-8 mr-2" />
              ) : (
                <BpmnIcon name={elementState?.bpmnIconName} />
              )}
              <div className="flex items-start flex-col">
                <h2 className="text-lg font-semibold">
                  {tag?.title ? t(tag.title) : elementState?.bpmnElement}
                </h2>
                <h2 className="text-lg font-light truncate">
                  {elementState?.bpmnElementName}
                </h2>
              </div>
            </div>

            <div className="panel-body space-y-4 overflow-hidden">
              {activeElement && tag ? (
                renderProperties()
              ) : (
                <div className="text-gray-400">{t("No element selected")}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Open Button */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white text-xs font-bold py-2 px-2 cursor-pointer rounded-l-2xl z-[90]"
          style={{ writingMode: "sideways-lr" }}
        >
          <div className="text-lg tracking-wide px-3">Properties</div>
        </div>
      )}
    </>
  );
}
export default withTranslation()(PropertiesPanel);
