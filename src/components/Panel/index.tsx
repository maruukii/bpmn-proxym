import { JSX, useEffect, useRef, useState } from "react";
import FormKey from "./components/formKey";
// import EventEmitter from "@/utils/EventEmitter"; // Your EventEmitter
// import Logger from "@/utils/Logger"; // Your Logger

// import { isAsynchronous } from "@/bo-utils/asynchronousContinuationsUtil";
// import { isExecutable } from "@/bo-utils/executionListenersUtil";
// import { isJobExecutable } from "@/bo-utils/jobExecutionUtil";
// import {
//   isStartInitializable,
//   isUserAssignmentSupported,
// } from "@/bo-utils/initiatorUtil";
// import { isCanbeConditional } from "@/bo-utils/conditionUtil";
import { RootState } from "../../store/store";
import { debounce } from "lodash";
import { setElement } from "../../store/modeler/modelerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Connection, Label, Shape } from "bpmn-js/lib/model/Types";
import getBpmnIconType from "../bpmn-icons/getIconType";
// import getBpmnIconType from "@/bpmn-icons/getIconType";
import bpmnIcons from "../bpmn-icons";
import BpmnIcon from "../Common/BpmnIcon";

// import ElementGenerations from "./components/ElementGenerations";
// import ElementConditional from "./components/ElementConditional";
// import ElementDocumentations from "./components/ElementDocumentations";
// import ElementExecutionListeners from "./components/ElementExecutionListeners";
// import ElementExtensionProperties from "./components/ElementExtensionProperties";
// import ElementAsyncContinuations from "./components/ElementAsyncContinuations";
// import ElementJobExecution from "./components/ElementJobExecution";
// import ElementStartInitiator from "./components/ElementStartInitiator";
// import UserAssignment from "./components/UserAssignment";

// import BpmnIcon from "@/components/common/BpmnIcon"; // Assuming this is a simple Icon component

export default function PropertiesPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { elementRegistry, modeler, activeElement } = useSelector(
    (state: RootState) => state.modeler
  );
  const [currentElementId, setCurrentElementId] = useState<
    string | undefined
  >();
  const [currentElementType, setCurrentElementType] = useState<
    string | undefined
  >();

  const [panelTitle, setPanelTitle] = useState<string>(
    "Property configuration"
  );
  const [bpmnIconName, setBpmnIconName] = useState<string | undefined>();
  const [bpmnElementName, setBpmnElementName] = useState<string>("Process");

  const [renderComponents, setRenderComponents] = useState<JSX.Element[]>([
    <FormKey />,
  ]);
  const setCurrentElement = debounce(
    (element: Shape | Element | Connection | Label | null) => {
      let activatedElement: BpmnElement | undefined = element;
      let activatedElementTypeName = "";

      if (!activatedElement) {
        activatedElement =
          elementRegistry?.find((el: any) => el.type === "bpmn:Process") ||
          elementRegistry?.find((el: any) => el.type === "bpmn:Collaboration");

        if (!activatedElement) {
          console.log("no activated elements");
        }
      }
      activatedElementTypeName = getBpmnIconType(activatedElement);
      dispatch(setElement(activatedElement));
      // modeler.setElement(markRaw(activatedElement));
      setCurrentElementId(activatedElement.id);
      setCurrentElementType(activatedElement.type.split(":")[1]);

      setPanelTitle(currentElementType as string);
      setBpmnIconName(
        bpmnIcons[activatedElementTypeName as keyof typeof bpmnIcons]
      );
      setBpmnElementName(activatedElementTypeName);
      setCurrentComponents(activatedElement);

      console.log(
        "Selected element changed",
        `ID: ${activatedElement.id} , type: ${activatedElement.type}`
      );
    },
    100
  );
  modeler?.on("import.done", () => {
    console.log("gg");
  });
  // 监听选择事件，修改当前激活的元素以及表单
  modeler?.on("selection.changed", ({ newSelection }) => {
    setCurrentElement(newSelection[0] || null);
  });
  modeler?.on(
    "element.changed",
    ({ element }: { element: { id: string; type?: string } }) => {
      if (element && element.id === currentElementId) {
        setCurrentElement(element);
      }
    }
  );

  // Called when a new BPMN element is selected
  const setCurrentComponents = (element: any) => {
    const components: JSX.Element[] = [];

    //   components.push(<ElementGenerations key="generations" />);
    //   components.push(<ElementDocumentations key="documentations" />);

    //   if (isCanbeConditional(element)) {
    //     components.push(<ElementConditional key="conditional" />);
    //   }

    //   if (isJobExecutable(element)) {
    //     components.push(<ElementJobExecution key="job-execution" />);
    //   }

    //   components.push(<ElementExtensionProperties key="extension-properties" />);

    //   if (isExecutable(element)) {
    //     components.push(<ElementExecutionListeners key="execution-listeners" />);
    //   }

    //   if (isAsynchronous(element)) {
    //     components.push(<ElementAsyncContinuations key="async-continuations" />);
    //   }

    //   if (isStartInitializable(element)) {
    //     components.push(<ElementStartInitiator key="start-initiator" />);
    //   }

    //   if (isUserAssignmentSupported(element)) {
    //     components.push(<UserAssignment key="user-assignment" />);
    //   }

    //   setRenderComponents(components);
  };

  // useEffect(() => {
  //   if (panelRef.current) {
  //     EventEmitter.emit("properties-panel-mounted", panelRef.current);
  //   }

  //   const onElementChanged = (element: any) => {
  //     if (!element) {
  //       Logger.warn("No element selected");
  //       return;
  //     }

  //     setCurrentElementId(element.id);
  //     setCurrentElementType(element.type);

  //     const iconName = getBpmnIconType(element);
  //     setBpmnIconName(iconName);

  //     const elementName =
  //       element.businessObject?.name || element.type.split(":").pop();
  //     setBpmnElementName(elementName || "Process");

  //     setCurrentComponents(element);
  //   };

  //   EventEmitter.on("element-selected", onElementChanged);

  //   return () => {
  //     EventEmitter.off("element-selected", onElementChanged);
  //   };
  // }, []);

  return (
    <div ref={panelRef} className="properties-panel p-4 overflow-auto">
      <div className="panel-header flex items-center mb-4">
        <BpmnIcon name={bpmnIconName} /> {/* Add margin-right */}
        <h2 className="text-lg font-semibold">{bpmnElementName}</h2>
      </div>

      <div className="panel-body space-y-4">
        {renderComponents.length > 0 ? (
          renderComponents
        ) : (
          <div className="text-gray-400">No element selected</div>
        )}
      </div>
    </div>
  );
}
