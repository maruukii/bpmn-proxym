declare module 'bpmn-js-properties-panel';
declare module 'diagram-js-minimap'
declare interface ExtendedField {
  label: string;
  key: string;
  type: string;
  isDisplayed: boolean;
  isBody: boolean;
  options?:[{id:string,name:"string"}]
}
declare interface BPMNPropertyPanelProps {
  activeElement: BpmnElement;
  modeling: Modeling;
  modeler: Modeler;
  tags: any;
  t: any;
}

declare interface ExtendedProperty {
  label: string;
  key: string;
  type: string;
}

declare interface ExtendedProperties {
  [key: string]: ExtendedProperty[];
}