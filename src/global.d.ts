declare module "*.xml" {
    const content: string;
    export default content;
  }
  
  declare module "*.bpmn" {
    const content: string;
    export default content;
  }
  declare module "lodash";
  declare module "bpmn-moddle";



  import { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import { ElementLike } from 'diagram-js/lib/core'

declare global {
  interface Window {
    bpmnInstances: any
    __messageBox: MessageApiInjection
  }

  type BpmnElement = ElementLike & { type: string }
}

declare interface Window {
  bpmnInstances: any
}
