import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil'
import { Element } from 'bpmn-js/lib/model/Types';

import { ModdleElement } from 'bpmn-moddle'
import {
  getExtensionElementsList,
  addExtensionElements,
  removeExtensionElements
} from './BpmnExtensionElementsUtil'
import type BpmnModdle from 'bpmn-moddle';
import type Modeling from 'bpmn-js/lib/features/modeling/Modeling';
// import { createScript } from '@/bo-utils/scriptUtil'
// import { LISTENER_ALLOWED_TYPES } from '@/config/bpmnEnums'

// export const EXECUTION_LISTENER_TYPE = {
//   class: 'Java class',
//   expression: 'Expression',
//   delegateExpression: 'Delegate expression',
//   script: 'Script'
// }
const prefix = import.meta.env.VITE_PROCESS_ENGINE; 
// execution listener list
export function getExecutionListeners(element: Element): ModdleElement[] {
  const businessObject = getListenersContainer(element)
  return getExtensionElementsList(businessObject, `${prefix}:executionListener`)
} 

// create an empty execution listener and update element's businessObject
export function addEmptyExtensionListener(element: Element,modeling:Modeling,moddle:BpmnModdle) {
  const listener = moddle!.create(`${prefix}:ExecutionListener`, {
    event: getDefaultEvent(element),
    class: ''
  })
  const businessObject = getListenersContainer(element)
  addExtensionElements(element, businessObject, listener,modeling,moddle)
}

// create an execution listener with props
export function addExecutionListener(element: Element, props: ExecutionListenerForm,modeling:Modeling,moddle:BpmnModdle) {

  const businessObject = getListenersContainer(element)
  const listener = moddle!.create(`${prefix}:executionListener`, {})
  updateListenerProperty(element, listener, props,modeling)
  addExtensionElements(element, businessObject, listener,modeling,moddle)
}

// update execution listener's property
export function updateExecutionListener(
  element: Element,
  props: ExecutionListenerForm,
  listener: ModdleElement,
  moddle:BpmnModdle,
  modeling:Modeling
) {
  removeExtensionElements(element, getListenersContainer(element), listener,modeling)
  addExecutionListener(element, props,modeling,moddle)
}

// remove an execution listener
export function removeExecutionListener(element: Element, listener: ModdleElement,modeling:Modeling) {
  removeExtensionElements(element, getListenersContainer(element), listener,modeling)
}

// ////////////// helpers
// export function isExecutable(element: BpmnElement): boolean {
//   if (isAny(element, LISTENER_ALLOWED_TYPES)) return true
//   if (is(element, 'bpmn:Participant')) {
//     return !!element.businessObject.processRef
//   }
//   return false
// }

// export function getExecutionListenerType(listener: ModdleElement): string {
//   const prefix = editor().getProcessEngine
//   if (isAny(listener, [`${prefix}:ExecutionListener`])) {
//     if (listener.get(`${prefix}:class`)) return 'class'
//     if (listener.get(`${prefix}:expression`)) return 'expression'
//     if (listener.get(`${prefix}:delegateExpression`)) return 'delegateExpression'
//     if (listener.get('script')) return 'script'
//   }
//   return ''
// }

export function getListenersContainer(element: Element): ModdleElement {
  const businessObject = getBusinessObject(element)
  return businessObject?.get('processRef') || businessObject
}

export function getDefaultEvent(element: Element) {
  return is(element, 'bpmn:SequenceFlow') ? 'take' : 'start'
}

export function getExecutionListenerTypes(element: Element) {
  if (is(element, 'bpmn:SequenceFlow')) {
    return [{ label: 'Take', value: 'take' }]
  }
  return [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' }
  ]
}

function updateListenerProperty(
  element: Element,
  listener: ModdleElement,
  props: ExecutionListenerForm,
  modeling:Modeling
) {
  const {
    event,
    class: listenerClass,
    expression,
    delegateExpression,

  } = props

  const updateProperty = ({key, value}:{key:string,value:any}) =>
    modeling.updateModdleProperties(element, listener, { [`${prefix}:${key}`]: value })

  event && updateProperty({key:'event', value:event})
  listenerClass && updateProperty({key:'class', value:listenerClass})
  expression && updateProperty({key:'expression',value: expression})
  delegateExpression && updateProperty({key:'delegateExpression', value:delegateExpression})

  // if (script) {
  //   const bpmnScript = createScript(script)
  //   modeling.updateModdleProperties(element, listener, { script: bpmnScript })
  // }
}
