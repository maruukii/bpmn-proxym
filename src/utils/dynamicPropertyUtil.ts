import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import Modeling from 'bpmn-js/lib/features/modeling/Modeling';
import type { Moddle } from 'bpmn-moddle';
import type  { Element } from 'bpmn-js/lib/model/Types';


const standAloneTypes = [
  "name","isForCompensation", "isExecutable", "scriptFormat", "script","id","default","targetNamespace"
]
const defaultFlowCapableTypes = [
  "bpmn:ExclusiveGateway", // XOR gateway
  "bpmn:InclusiveGateway", // OR gateway
  "bpmn:Activity",          // Includes tasks and subprocesses
  "bpmn:Task",              // Base task type (for completeness)
  "bpmn:UserTask",
  "bpmn:ServiceTask",
  "bpmn:ScriptTask",
  "bpmn:ManualTask",
  "bpmn:BusinessRuleTask",
  "bpmn:ReceiveTask",
  "bpmn:SendTask",
  "bpmn:SubProcess",
  "bpmn:CallActivity"
];

const prefix = import.meta.env.VITE_PROCESS_ENGINE; 
function getDefaultFlow(element: Element): boolean | undefined {
  const businessObject = getBusinessObject(element);
  if (!businessObject) return;

  const source = businessObject.sourceRef;
  const sourceBo = getBusinessObject(source);
  const defaultFlow = sourceBo?.get("default");
  if (!defaultFlow || !defaultFlow?.id) return false;

  return defaultFlow.id === element.id;
}

function getSourceElement(
  element: Element
): { SourceBO: any; source: Element } | undefined {
  if (!element?.source || !element.source?.di) {
    console.warn("Element has no valid source:", element);
    return;
  }

  const source = element.source;
  const sourceBO = getBusinessObject(source);
  if (!sourceBO) {
    console.warn("No businessObject on source element:", source);
    return;
  }

  return { SourceBO: sourceBO, source };
}

export function getDynamicProperty(element: Element,bpmnname:string): boolean|string | undefined {
  const businessObject = getBusinessObject(element);
if (!businessObject) {
    return undefined;
  }

  if (standAloneTypes.includes(bpmnname)) {
    if(bpmnname==="default"){
      const value:boolean|undefined =getDefaultFlow(element)
      return value
    }
return businessObject.get(`${bpmnname}`);
  }

  // if(bpmnname === 'overrideid') {
  //   return businessObject.get(`id`);
  // }
  return businessObject.get(`${prefix}:${bpmnname}`);
}


// 🔹 Set or update formKey value
export function updateDynamicProperty(
  modeling: Modeling,
  element: Element,
  name: string,
  value: string | boolean
) {
  try {
    
  
  if (standAloneTypes.includes(name)) {
    if (name === "default") {
  const sourceElement = getSourceElement(element);

  if (!sourceElement?.source || !element?.businessObject) {
    console.warn("Missing source or target in default flow logic", {
      sourceElement,
      element,
    });
    return;
  }

  const sourceBO = sourceElement.source.businessObject;
  if (!sourceBO) {
    console.warn("Source businessObject missing:", sourceElement.source);
    return;
  }
  if (!element?.businessObject || !element.businessObject.id) {
  console.warn("Element businessObject is not ready:", element);
  return;
}


  if ((!sourceBO.default || sourceBO.default?.id !== element.businessObject.id)&&defaultFlowCapableTypes.includes(sourceBO.$type)) {
    modeling.updateProperties(sourceElement.source, {
      default: element.businessObject,  
    });
  }

  return;
}


    modeling?.updateProperties(element, { [name]: value });
    return;
  }

  if (element?.businessObject) {
    modeling?.updateProperties(element, {
      [`${prefix}:${name}`]: value,
    });
  } else {
    throw new Error("Invalid element when setting dynamic property:");
  }
  } catch (error) {
    console.error(error)
  }
}


// 🔹 Remove formKey value
export function removeDynamicProperty(modeling: Modeling, element: Element, name: string) {
  
  if (name === "default") {
    const bo = getBusinessObject(element);
 const sourceElement=getSourceElement(element)
  // Only unset if this sequence flow is the default flow
  if (sourceElement?.SourceBO?.default?.id === bo.id&&sourceElement?.source) {
    modeling.updateProperties(sourceElement.source, {
      default: undefined,
    });
  }
  return
  }

  if (standAloneTypes.includes(name)) {
    modeling.updateProperties(element, {
      [name]: undefined
    });
    return;
  }

  modeling.updateProperties(element, {
    [`${prefix}:${name}`]: undefined
  });
}



// 🔹 Check if element is allowed to have a formKey
// export function isExecutable(element: Element): boolean {
//   if (isAny(element, FORMKEY_ALLOWED_TYPES)) return true;

//   if (is(element, 'bpmn:Participant')) {
//     return !!element.businessObject.processRef;
//   }

//   return false;
// }

// 🔹 Determine formKey "type" (example for future expansion)
// export function getFormKeyType(element: Element): string {
//   const formKey = getFormKey(element);
//   if (formKey) {
//     return 'formKey';
//   }
//   return '';
// }

// 🔹 Get the container element (processRef or element itself)
export function getFormKeyContainer(element: Element) {
  const businessObject = getBusinessObject(element);
  return businessObject?.get('processRef') || businessObject;
}

// 🔹 Get default event type (used in executionListeners, but kept here for compatibility or future use)
export function getDefaultEvent(element: Element) {
  return is(element, 'bpmn:SequenceFlow') ? 'take' : 'start';
}

// 🔹 Get available event types (may not apply for formKey, but useful in a shared UI)
export function getFormKeyTypes(element: Element) {
  if (is(element, 'bpmn:SequenceFlow')) {
    return [{ label: 'Take', value: 'take' }];
  }

  return [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' }
  ];
}










// import { getBusinessObject, is, isAny } from 'bpmn-js/lib/util/ModelUtil'
// import { Element } from 'bpmn-js/lib/model/Types'
// import { ModdleElement } from 'bpmn-moddle'
// import {
//   getFormKeysList,
//   addFormKeys,
//   removeFormKeys
// } from '../utils/BpmnExtensionElementsUtil'
// import { RootState } from './../store/store';
// import { useSelector } from 'react-redux';
// // import { createScript } from '@/bo-utils/scriptUtil'
// import { FORMKEY_ALLOWED_TYPES } from '../config/bpmnEnums'

// export const EXECUTION_LISTENER_TYPE = {
//   class: 'Java class',
//   expression: 'Expression',
//   delegateExpression: 'Delegate expression',
//   script: 'Script'
// }
// const prefix = "flowable"
// const {moddle,modeling}=useSelector((state: RootState) => state.modeler)
// // execution listener list
// export function getFormKey(element: Element): string | undefined {
//     const bo = getBusinessObject(element)
//     return bo.get(`${prefix}:formKey`)
//   }
  

// // create an empty execution listener and update element's businessObject
// export function addEmptyFormKey(element: Element) {
//   const formKey = moddle!.create(`${prefix}:formKey`, {
//     event: getDefaultEvent(element),
//     class: ''
//   })
//   const businessObject = getFormKeyContainer(element)
//   addFormKeys(element, businessObject, formKey)
// }

// // create an execution listener with props
// export function addFormKey(element: Element, props: string) {
//   const businessObject = getFormKeyContainer(element)
//   const formKey = moddle!.create(`${prefix}:formKey`, {})
//   updateFormKeyProperty(element, formKey, props)
//   addFormKeys(element, businessObject, formKey)
// }

// // update execution listener's property
// export function updateFormKey(
//   element: Element,
//   props: string,
//   formKey: ModdleElement
// ) {
//   removeFormKeys(element, getFormKeyContainer(element), formKey)
//   addFormKey(element, props)
// }

// // remove an execution listener
// export function removeFormKey(element: Element, formKey: ModdleElement) {
//   removeFormKeys(element, getFormKeyContainer(element), formKey)
// }

// ////////////// helpers
// export function isExecutable(element: BpmnElement): boolean {
//   if (isAny(element, FORMKEY_ALLOWED_TYPES)) return true
//   if (is(element, 'bpmn:Participant')) {
//     return !!element.businessObject.processRef
//   }
//   return false
// }

// export function getFormKeyType(formKey: ModdleElement): string {
//   if (isAny(formKey, [`${prefix}:  `])) {
//     // if (listener.get(`${prefix}:class`)) return 'class'
//     // if (listener.get(`${prefix}:expression`)) return 'expression'
//     // if (listener.get(`${prefix}:delegateExpression`)) return 'delegateExpression'
//     if (formKey.get(`${prefix}:formFieldValidation`)) return 'formFieldValidation'
//   }
//   return ''
// }

// export function getFormKeyContainer(element: Element): ModdleElement {
//   const businessObject = getBusinessObject(element)
//   return businessObject?.get('processRef') || businessObject
// }

// export function getDefaultEvent(element: Element) {
//   return is(element, 'bpmn:SequenceFlow') ? 'take' : 'start'
// }

// export function getFormKeyTypes(element: Element) {
//   if (is(element, 'bpmn:SequenceFlow')) {
//     return [{ label: 'Take', value: 'take' }]
//   }
//   return [
//     { label: 'Start', value: 'start' },
//     { label: 'End', value: 'end' }
//   ]
// }

// function updateFormKeyProperty(
//   element: Element,
//   formKey: ModdleElement,
//   props: string
// ) {
// //   const {
// //     event,
// //     class: listenerClass,
// //     expression,
// //     delegateExpression,
// //     script,
// //     type,
// //     fields
// //   } = props

//   const updateProperty = (key:any, value:any) =>
//     modeling?.updateModdleProperties(element , formKey, { [`${prefix}:${key}`]: value })

//  updateProperty('formFieldValidation', false)
// //   listenerClass && updateProperty('class', listenerClass)
// //   expression && updateProperty('expression', expression)
// //   delegateExpression && updateProperty('delegateExpression', delegateExpression)

// //   if (script) {
// //     const bpmnScript = createScript(script)
// //     modeling.updateModdleProperties(element, listener, { script: bpmnScript })
// //   }
// }
