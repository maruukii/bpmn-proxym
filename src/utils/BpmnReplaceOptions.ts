import type  { Element } from 'bpmn-js/lib/model/Types';
import { isDifferentType } from 'bpmn-js/lib/features/popup-menu/util/TypeUtil'
import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil'
import * as replaceOptions from 'bpmn-js/lib/features/replace/ReplaceOptions'
import { isEventSubProcess, isExpanded } from 'bpmn-js/lib/util/DiUtil'
import { isAppendAction } from './BpmnDesignerUtils'

export default function (element?: Element) {
  const differentType = (element: Element) => isDifferentType(element)
  const getCurrentReplaceOptions = (element: Element) => {
    const businessObject = element.businessObject
    if (is(businessObject, 'bpmn:DataObjectReference')) {
      return replaceOptions.DATA_OBJECT_REFERENCE
    }

    if (
      is(businessObject, 'bpmn:DataStoreReference') &&
      !is(element.parent, 'bpmn:Collaboration')
    ) {
      return replaceOptions.DATA_STORE_REFERENCE
    }

    // start events outside sub processes
    if (is(businessObject, 'bpmn:StartEvent') && !is(businessObject.$parent, 'bpmn:SubProcess')) {
      return replaceOptions.START_EVENT.filter(differentType(element) as any)
    }

    // expanded/collapsed pools
    if (is(businessObject, 'bpmn:Participant')) {
      return replaceOptions.PARTICIPANT.filter(
        (entry) => {isExpanded(element) !== entry?.target?.isExpanded}
      )
    }
    if(is(businessObject,'bpmn:Lane')){
      return replaceOptions.PARTICIPANT.filter((entry)=>console.log(entry))
    }

    // start events inside event sub processes
    if (is(businessObject, 'bpmn:StartEvent') && isEventSubProcess(businessObject.$parent)) {
      return replaceOptions.EVENT_SUB_PROCESS_START_EVENT.filter((entry) => {
        const target = entry.target

        const isInterrupting = target?.isInterrupting !== false

        const isInterruptingEqual = getBusinessObject(element).isInterrupting === isInterrupting

        // filters elements which types and event definition are equal but have have different interrupting types
        return (
          differentType(element)(entry as any) || (!differentType(element)(entry as any) && !isInterruptingEqual)
        )
      })
    }

    // start events inside sub processes
    if (
      is(businessObject, 'bpmn:StartEvent') &&
      !isEventSubProcess(businessObject.$parent) &&
      is(businessObject.$parent, 'bpmn:SubProcess')
    ) {
      return replaceOptions.START_EVENT_SUB_PROCESS.filter(differentType(element) as any)
    }

    // end events
    if (is(businessObject, 'bpmn:EndEvent')) {
      return replaceOptions.END_EVENT.filter((entry) => {
        const target = entry.target
        if (
          target?.eventDefinitionType == 'bpmn:CancelEventDefinition' &&
          !is(businessObject.$parent, 'bpmn:Transaction')
        ) {
          return false
        }
        return differentType(element)(entry as any)
      })
    }

    // boundary events
    if (is(businessObject, 'bpmn:BoundaryEvent')) {
      return replaceOptions.BOUNDARY_EVENT.filter((entry) => {
        const target = entry.target
        if (
          target?.eventDefinitionType == 'bpmn:CancelEventDefinition' &&
          !is(businessObject.attachedToRef, 'bpmn:Transaction')
        ) {
          return false
        }
        const cancelActivity = target?.cancelActivity !== false
        const isCancelActivityEqual = businessObject.cancelActivity == cancelActivity
        return (
          differentType(element)(entry as any) ||
          (!differentType(element)(entry as any) && !isCancelActivityEqual)
        )
      })
    }

    // intermediate events
    if (
      is(businessObject, 'bpmn:IntermediateCatchEvent') ||
      is(businessObject, 'bpmn:IntermediateThrowEvent')
    ) {
      return replaceOptions.INTERMEDIATE_EVENT.filter(differentType(element) as any)
    }

    // gateways
    if (is(businessObject, 'bpmn:Gateway')) {
      return replaceOptions.GATEWAY.filter(differentType(element) as any)
    }

    // transactions
    if (is(businessObject, 'bpmn:Transaction')) {
      return replaceOptions.TRANSACTION.filter(differentType(element) as any)
    }

    // expanded event sub processes
    if (isEventSubProcess(businessObject) && isExpanded(element)) {
      return replaceOptions.EVENT_SUB_PROCESS.filter(differentType(element) as any)
    }

    // expanded sub processes
    if (is(businessObject, 'bpmn:SubProcess') && isExpanded(element)) {
      return replaceOptions.SUBPROCESS_EXPANDED.filter(differentType(element) as any)
    }

    // collapsed ad hoc sub processes
    if (is(businessObject, 'bpmn:AdHocSubProcess') && !isExpanded(element)) {
      return replaceOptions.TASK.filter((entry) => {
        const target = entry.target
        const isTargetSubProcess = target?.type === 'bpmn:SubProcess'
        const isTargetExpanded = target?.isExpanded === true
        return isDifferentType(element)(target as any) && (!isTargetSubProcess || isTargetExpanded)
      })
    }

    // flow nodes
    if (is(businessObject, 'bpmn:FlowNode')) {
      const ops = replaceOptions.TASK.filter(differentType(element) as any)
      if (is(businessObject, 'bpmn:SubProcess') && !isExpanded(element)) {
        return ops.filter((entry) => entry.label !== 'Sub Process (collapsed)')
      }
      return ops
    }

    return []
  }
  const getAllReplaceOptions = () => {
    const { START_EVENT, TASK, GATEWAY, BOUNDARY_EVENT } = replaceOptions
    return [...START_EVENT, ...TASK, ...GATEWAY, ...BOUNDARY_EVENT]
  }
  const removeFunctionLabel = (entry:any) => typeof entry.label === 'string'

  return !isAppendAction(element)
    ? getCurrentReplaceOptions(element!).filter(removeFunctionLabel)
    : getAllReplaceOptions().filter(removeFunctionLabel)
}
