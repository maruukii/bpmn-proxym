import { useEffect, useRef, useState, JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "lodash";
import { setElement } from "../../store/modeler/modelerSlice";
import { RootState } from "../../store/store";
import { Connection, Label, Shape } from "bpmn-js/lib/model/Types";
import BpmnIcon from "../Common/BpmnIcon";
import getBpmnIconType from "../bpmn-icons/getIconType";
import bpmnIcons from "../bpmn-icons";
import flowable from "../../tasks/tasks.json";
import DynamicProperty from "./components/DynamicProperty";
import { withTranslation } from "react-i18next";
import { getDynamicProperty } from "../../utils/dynamicPropertyUtil";
export function PropertiesPanel({ t }: { t: any }) {
  const dispatch = useDispatch();
  const panelRef = useRef<HTMLDivElement>(null);

  const { elementRegistry, modeler, activeElement, modeling } = useSelector(
    (state: RootState) => state.modeler
  );

  const [elementState, setElementState] = useState({
    currentElementId: "",
    currentElementType: "",
    panelTitle: "Properties Panel",
    bpmnIconName: "",
    bpmnElement: "",
    bpmnElementName: "",
  });

  const [tagNames, setTagNames] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const extractTagsWithProperties = (types: any[]) => {
      const result: Record<string, any[]> = {};
      const generalType = types.find((type) => type.name === "General");
      const generalProps = generalType?.properties || [];
      types.forEach((type) => {
        if (
          (type?.extends && type.properties) ||
          (type?.meta?.allowedIn && type.properties)
        ) {
          type?.extends?.forEach((extendType: string) => {
            const tagName = extendType.split(":")[1];
            result[tagName] = result[tagName] || [];
            type.properties.forEach((prop: any) => {
              if (
                !result[tagName].some((existing) => existing.name === prop.name)
              ) {
                result[tagName].push(prop);
              }
            });
          });
          type?.meta?.allowedIn?.forEach((allowedInType: string) => {
            const tagName = allowedInType
              ? allowedInType.split(":")[1]
              : type.name;
            result[tagName] = result[tagName] || [];
            type.properties.forEach((prop: any) => {
              if (
                !result[tagName].some((existing) => existing.name === prop.name)
              ) {
                result[tagName].push(prop);
              }
            });
          });
        }
      });
      Object.keys(result).forEach((tagName) => {
        result[tagName] = [...generalProps, ...result[tagName]];
      });
      // console.log(result);

      return result;
    };

    setTagNames(extractTagsWithProperties(flowable.types));
  }, []);

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
        bpmnElementName:
          getDynamicProperty(activatedElement, "name", "General name") || "",
      });
    },
    100,
    { leading: true, trailing: true }
  );

  useEffect(() => {
    if (!modeler) return;

    modeler.on("selection.changed", ({ newSelection }) => {
      setCurrentElement(newSelection[0] || null);
    });

    modeler.on("element.changed", ({ element }: any) => {
      if (element?.id === elementState.currentElementId) {
        setCurrentElement(element);
      }
    });
  }, [modeler, elementRegistry, elementState.currentElementId]);

  const renderProperties = () => {
    if (!activeElement || !modeling) return [];

    const tag = tagNames[activeElement.type.split(":")[1]];
    if (!tag || !modeler) return [];
    return tag.map((item) => {
      const propName = item.name.split(":")[1];
      return (
        <DynamicProperty
          key={propName}
          bpmnName={propName}
          inputType={item.type}
          displayName={item.displayName}
          activeElement={activeElement}
          modeling={modeling}
          modeler={modeler}
        />
      );
    });
  };

  return (
    <div ref={panelRef} className="properties-panel p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">{t(elementState.panelTitle)}</h2>

      <div className="panel-header flex items-center mb-4">
        {elementState?.bpmnIconName !== "" ? (
          <BpmnIcon name={elementState.bpmnIconName} />
        ) : undefined}
        <div className="flex items-start flex-col">
          {" "}
          <h2 className="text-sm font-semibold">{elementState?.bpmnElement}</h2>
          <h2 className="text-sm font-light">
            {elementState?.bpmnElementName}
          </h2>
        </div>
      </div>

      <div className="panel-body space-y-4">
        {activeElement ? (
          renderProperties()
        ) : (
          <div className="text-gray-400">No element selected</div>
        )}
      </div>
    </div>
  );
}
export default withTranslation()(PropertiesPanel);
