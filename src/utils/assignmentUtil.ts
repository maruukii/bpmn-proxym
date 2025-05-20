import Modeling from "bpmn-js/lib/features/modeling/Modeling";
import { getBusinessObject } from "bpmn-js/lib/util/ModelUtil";
  import type { Element, Moddle } from 'bpmn-js/lib/model/Types';
import { ModdleElement } from "bpmn-moddle";
import { addExtensionElements } from "./bpmnExtensionElementsUtil";

 export function getPropertyContainer(element: Element): ModdleElement {
    const businessObject = getBusinessObject(element);
    return businessObject?.get('processRef') || businessObject;
  }
export function addProperty(
    element: Element,
    props: boolean,
    moddle: Moddle,
    modeling: Modeling,
    id: string,
  ) {
    const businessObject = getPropertyContainer(element);
  
    const idmInitiator = moddle.create('modeler:ActivitiIdmInitiator', {
  value: 'true'
});

const canComplete = moddle.create('modeler:InitiatorCanComplete', {
  value: 'true'
});


    addExtensionElements(element, businessObject, property, modeling,moddle);
  }