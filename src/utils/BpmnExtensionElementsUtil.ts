import { Element } from 'bpmn-js/lib/model/Types';
import { ModdleElement } from 'bpmn-moddle'
import { isArray } from 'min-dash'
import type Modeling from 'bpmn-js/lib/features/modeling/Modeling'
import type { Moddle } from 'bpmn-moddle';

/**
 * Get extension elements of business object. Optionally filter by type.
 */
export function getExtensionElementsList(
  businessObject: ModdleElement,
  type?: string
): ModdleElement[] {
  const extensionElements = businessObject?.get('extensionElements')
  if (!extensionElements) return []
  const values: ModdleElement[] =
  typeof extensionElements.get === 'function'
    ? extensionElements.get('values')
    : extensionElements.values;  if (!values || !values.length) return []
  if (type) return( values.filter((value) => value?.$type?.includes(type) ))
  return values
}

/**
 * Add one or more extension elements. Create bpmn:ExtensionElements if it doesn't exist.
 */
export function addExtensionElements(
  element: Element,
  businessObject: ModdleElement,
  extensionElementToAdd: ModdleElement,
  modeling:Modeling,moddle:Moddle
) {
  let extensionElements = businessObject.get('extensionElements')

  // (1) create bpmn:ExtensionElements if it doesn't exist
  if (!extensionElements) {
    extensionElements = createModdleElement(
      'bpmn:ExtensionElements',
      { values: [] },
      businessObject,moddle
    )
    modeling.updateModdleProperties(element, businessObject, { extensionElements })
  }
  extensionElementToAdd.$parent = extensionElements

  // (2) add extension element to list
  modeling.updateModdleProperties(element, extensionElements, {
    values: [...extensionElements.get('values'), extensionElementToAdd]
  })
}

/**
 * Remove one or more extension elements. Remove bpmn:ExtensionElements afterwards if it's empty.
 */
export function removeExtensionElements(
  element: Element,
  businessObject: ModdleElement,
  extensionElementsToRemove: ModdleElement | ModdleElement[],
  modeling:Modeling
) {
  if (!isArray(extensionElementsToRemove)) {
    extensionElementsToRemove = [extensionElementsToRemove]
  }

  const extensionElements = businessObject.get('extensionElements'),
    values = extensionElements
      .get('values')
      .filter((value:ModdleElement) => !extensionElementsToRemove.includes(value))


  modeling.updateModdleProperties(element, extensionElements, { values })
}

/////////////
export function createModdleElement(
  elementType: string,
  properties: Record<string, any>,
  parent?: Element | ModdleElement,
  moddle?:Moddle
): ModdleElement|undefined {
  
  const element = moddle?.create(elementType, properties)
  parent && (element!.$parent = parent)
  return element
}
