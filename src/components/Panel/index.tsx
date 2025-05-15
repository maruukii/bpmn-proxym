import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "lodash";
import { setElement } from "../../store/modeler/modelerSlice";
import { RootState } from "../../store/store";
import { Connection, Label, Shape } from "bpmn-js/lib/model/Types";
import BpmnIcon from "../Common/BpmnIcon";
import getBpmnIconType from "../bpmn-icons/getIconType";
import bpmnIcons from "../bpmn-icons";
import flowable from "../../tasks/tasks.json";
import stencils from "../../tasks/stencils.json";
import properties from "../../tasks/properties.json";
import DynamicProperty from "./components/DynamicProperty";
import { withTranslation } from "react-i18next";
import { getDynamicProperty } from "../../utils/dynamicPropertyUtil";
import { getBusinessObject } from "bpmn-js/lib/util/ModelUtil";
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

  // ✅ Now we update the state only when the tag changes
  useEffect(() => {
    if (tag) {
      setIcon(tag?.icon);
    }
    console.log(tag);
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
    <div ref={panelRef} className="properties-panel p-4 overflow-auto">
      <h2 className="text-3xl font-bold mb-4">{t(elementState.panelTitle)}</h2>
      <div className="panel-header flex items-center mb-4">
        {icon ? (
          <img src={`/icons/${icon}`} alt="" className="w-8 h-8 mr-2" />
        ) : (
          <BpmnIcon name={elementState?.bpmnIconName} />
        )}
        <div className="flex items-start flex-col">
          {" "}
          <h2 className="text-lg font-semibold">
            {tag?.title ? t(tag.title) : elementState?.bpmnElement}
          </h2>
          <h2 className="text-lg font-light truncate">
            {elementState?.bpmnElementName}
          </h2>
        </div>
      </div>

      <div className="panel-body space-y-4">
        {activeElement && tag ? (
          renderProperties()
        ) : (
          <div className="text-gray-400">{t("No element selected")}</div>
        )}
      </div>
    </div>
  );
}
export default withTranslation()(PropertiesPanel);
