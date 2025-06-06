import type BpmnFactory from "bpmn-js/lib/features/modeling/BpmnFactory"
import type Modeling from "bpmn-js/lib/features/modeling/Modeling"
import type Modeler from "bpmn-js/lib/Modeler"
import { Element } from 'bpmn-js/lib/model/Types';
import { without } from 'min-dash'

const DOCUMENTATION_TEXT_FORMAT = 'text/plain'

function findDocumentation(docs:object[]): object | undefined {
  return docs.find(function (d:any) {
    return (d.textFormat || DOCUMENTATION_TEXT_FORMAT) === DOCUMENTATION_TEXT_FORMAT
  })
}
export function getDynamicPropertyDocumentation(element: Element): string {
  const businessObject = element?.businessObject
  const documentation = businessObject && findDocumentation(businessObject.get('documentation'))
  return documentation && documentation.text
}
export function setDocumentValue(element: Element, modeler:Modeler,modeling:Modeling,value: string | undefined) {

  const bpmnFactory: BpmnFactory | undefined = modeler?.get('bpmnFactory')

  const businessObject = element.businessObject
  const documentation = findDocumentation(businessObject && businessObject.get('documentation'))
  // (1) 更新或者移除 原有 documentation
  if (documentation) {
    if (value) {
      return modeling.updateModdleProperties(element, documentation, { text: value })
    } else {
      return modeling.updateModdleProperties(element, businessObject, {
        documentation: without(businessObject.get('documentation'), documentation)
      })
    }
  }
  // (2) 创建新的 documentation
  if (value) {
    const newDocumentation = bpmnFactory?.create('bpmn:Documentation', {
      text: value
    })
    return modeling.updateModdleProperties(element, businessObject, {
      documentation: [...businessObject.get('documentation'), newDocumentation]
    })
  }
}