import {
    getExtensionElementsList,
    addExtensionElements,
    removeExtensionElements,
  } from './BpmnExtensionElementsUtil';
  
  import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
  import type { Element, Moddle } from 'bpmn-js/lib/model/Types';
  import { ModdleElement } from 'bpmn-moddle';
  import type Modeling from 'bpmn-js/lib/features/modeling/Modeling';
  
  const prefix: string = 'flowable';

  
  // Get all exceptions
  export function getExceptions(element: Element,id:string): ModdleElement[] {
    const businessObject = getExceptionsContainer(element);
    

    return getExtensionElementsList(businessObject, `${prefix}:${id}`);
  }
 
  
  export function getMappedException(
    moddleElement?: ModdleElement,
    fields: string[] = []
  ): Record<string, any> | null {
    if (!moddleElement) return null;
  
    // Create a result object and dynamically map fields to their values
    const result: Record<string, any> = {};
  
    fields.forEach((field) => {
      // Dynamically access values from the moddleElement
      result[field] = (moddleElement as any)[field];
    });
  
    return result;
  }
  
  
  
  // Add an empty mapException
  export function addEmptyException(
    element: Element,
    moddle: Moddle,
    modeling: Modeling
  ) {
    const mapException = moddle.create(`${prefix}:mapException`, {
      errorCode: '',
      includeChildExceptions: false,
      body: '',
    });
  
    const businessObject = getExceptionsContainer(element);
    addExtensionElements(element, businessObject, mapException, modeling,moddle);
  }
  
  // Add a filled mapException
  export function addException(
    element: Element,
    props: Record<string, string | boolean>,
    moddle: Moddle,
    modeling: Modeling,
    id: string,
    fields: string[]
  ) {
    const businessObject = getExceptionsContainer(element);
    console.log(props);
  
    // Dynamically create object using fields
    const dynamicProperties: Record<string, any> = {};
    fields.filter((field)=>field !== "class").forEach((field) => {
      dynamicProperties[field] = props[field];
    });
    debugger
    const mapException = moddle?.create(`${prefix}:${id}`, dynamicProperties);
  debugger
    // Set CDATA/class text
    (mapException as any).$body =`<![CDATA[ ${props.class} ]]>` ;
  // console.log(mapException)
    // Add the element
    addExtensionElements(element, businessObject, mapException, modeling,moddle);
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
  export function removeException(
    element: Element,
    listener: ModdleElement,
    modeling: Modeling
  ) {
    removeExtensionElements(
      element,
      getExceptionsContainer(element),
      listener,
      modeling
    );
  }
  
  // Get root for extensions
  export function getExceptionsContainer(element: Element): ModdleElement {
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
  const container = getExceptionsContainer(element);
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
