import {
    getExtensionElementsList,
    addExtensionElements,
    removeExtensionElements,
  } from './BpmnExtensionElementsUtil';
  
  import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
  import type { Element, Moddle } from 'bpmn-js/lib/model/Types';
  import { ModdleElement } from 'bpmn-moddle';
  import type Modeling from 'bpmn-js/lib/features/modeling/Modeling';
  
 const prefix = import.meta.env.VITE_PROCESS_ENGINE; 

  
  // Get all exceptions
  export function getValues(element: Element,id:string): ModdleElement[] {
    const businessObject = getPropertyContainer(element);
    const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);

let values = getExtensionElementsList(businessObject, `${id}`);
if (!values || !values.length) values = getExtensionElementsList(businessObject, `${capitalizedId}`);
if (!values || !values.length) values = getExtensionElementsList(businessObject, `${prefix}:${id}`);
if (!values || !values.length) values = getExtensionElementsList(businessObject, `${prefix}:${capitalizedId}`);

return values;


  }
 
  
  export function getMappedProperty(
    moddleElement?: ModdleElement,
    fields: ExtendedField[] = []
  ): Record<string, any> | null {
    if (!moddleElement) return null;
  
    // Create a result object and dynamically map fields to their values
    const result: Record<string, any> = {};
  
    fields.forEach((field) => {
      if(fields)

      // Dynamically access values from the moddleElement
      result[field.key] = (moddleElement as any)[field.key];
    });
  // console.log(result)
  // console.log(moddleElement)
    return result;
  }
  
  
  
  // Add an empty mapException
  // export function addEmptyException(
  //   element: Element,
  //   moddle: Moddle,
  //   modeling: Modeling
  // ) {
  //   const mapException = moddle.create(`${prefix}:mapException`, {
  //     errorCode: '',
  //     includeChildExceptions: false,
  //     body: '',
  //   });
  
  //   const businessObject = getExceptionsContainer(element);
  //   addExtensionElements(element, businessObject, mapException, modeling,moddle);
  // }
  
  // Add a filled mapException
  export function addProperty(
    element: Element,
    props: Record<string, string | boolean>,
    moddle: Moddle,
    modeling: Modeling,
    id: string,
    // fields: string[]
  ) {
    const businessObject = getPropertyContainer(element);
  
    // Dynamically create object using fields
    // const dynamicProperties: Record<string, any> = {};
    // fields.forEach((field) => {
      
    //   dynamicProperties[field] = props[field];
    // });
    // handle if default value for select event type for execution listeners
    if(id==="executionListener"&&!props["event"])
      props["event"]="start"
    const property = moddle?.create(`${prefix}:${id}`, props);
    // Set CDATA/class text
    // if(id===`mapException`){
    // (property as any).$body =`<![CDATA[ ${props.class} ]]>` ;}


  // console.log(mapException)
    // Add the element
    addExtensionElements(element, businessObject, property, modeling,moddle);
  }
  
  // Update existing mapException by replacing it
  // export function updateException(
  //   element: Element,
  //   props: ExceptionForm,
  //   listener: ModdleElement,
  //   modeling: Modeling,
  //   moddle: Moddle,id: string,
  //   fields:string[]
  // ) {
  //   removeExtensionElements(
  //     element,
  //     getExceptionsContainer(element),
  //     listener,
  //     modeling
  //   );
  
  //   addException(element, props, moddle, modeling,id);
  // }
  
  // Remove exception
  export function removeProperty(
    element: Element,
    listener: ModdleElement,
    modeling: Modeling
  ) {
    removeExtensionElements(
      element,
      getPropertyContainer(element),
      listener,
      modeling
    );
  }
  
  // Get root for extensions
  export function getPropertyContainer(element: Element): ModdleElement {
    const businessObject = getBusinessObject(element);
    return businessObject?.get('processRef') || businessObject;
  }
  // Move a mapException up or down in the list
export function moveException(
  element: Element,
  listener: ModdleElement,
  direction: 'up' | 'down',
  modeling: Modeling
) {
  const container = getPropertyContainer(element);
  const list = getExtensionElementsList(container, `${prefix}:mapException`);

  const currentIndex = list.indexOf(listener);
  const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

  if (targetIndex < 0 || targetIndex >= list.length) return;

  const newList = [...list];
  // Swap elements
  [newList[currentIndex], newList[targetIndex]] = [
    newList[targetIndex],
    newList[currentIndex],
  ];

  // Replace the entire list in extensionElements
  modeling.updateModdleProperties(element, container, {
    extensionElements: {
      ...container.extensionElements,
      values: [
        ...(container.extensionElements.values.filter(
          (el: any) => el.$type !== `${prefix}:mapException`
        ) || []),
        ...newList,
      ],
    },
  });
}
