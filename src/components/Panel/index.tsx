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

export default function PropertiesPanel() {
  const dispatch = useDispatch();
  const panelRef = useRef<HTMLDivElement>(null);

  const { elementRegistry, modeler, activeElement, modeling } = useSelector(
    (state: RootState) => state.modeler
  );

  const [elementState, setElementState] = useState({
    currentElementId: "",
    currentElementType: "",
    panelTitle: "Property configuration",
    bpmnIconName: "bpmn-icon-process",
    bpmnElementName: "Process",
  });

  const [tagNames, setTagNames] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const extractTagsWithProperties = (types: any[]) => {
      const result: Record<string, any[]> = {};
      types.forEach((type) => {
        if (type.extends && type.properties) {
          type.extends.forEach((extendType: string) => {
            const tagName = extendType.split(":")[1];
            result[tagName] = result[tagName] || [];
            result[tagName].push(...type.properties);
          });
        }
      });
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
        panelTitle: elementType,
        bpmnIconName: iconName,
        bpmnElementName: activatedElementTypeName,
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
    if (!tag) return [];

    return tag.map((item) => {
      const propName = item.name.split(":")[1];
      return (
        <DynamicProperty
          key={propName}
          name={propName}
          activeElement={activeElement}
          modeling={modeling}
        />
      );
    });
  };

  return (
    <div ref={panelRef} className="properties-panel p-4 overflow-auto">
      <div className="panel-header flex items-center mb-4">
        <BpmnIcon name={elementState.bpmnIconName} />
        <h2 className="text-lg font-semibold">
          {elementState.bpmnElementName}
        </h2>
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
