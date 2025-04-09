import EmptyXML from './EmptyXML'
// import { EditorSettings } from 'types/editor/settings'

import Modeler from 'bpmn-js/lib/Modeler';

export const createNewDiagram = async function (newXml?: string,modeler?:Modeler) {
  try {

    const timestamp = Date.now()
    // const { processId, processName, processEngine } = settings || {}
    const newId: string =  `Process_${timestamp}`
    const newName: string = `PrcessName${timestamp}`
    const xmlString = newXml || EmptyXML(newId, newName, "flowable")
    const BpmnModeler = modeler
   await BpmnModeler!.importXML(xmlString).then(() => {
      const canvas: any = BpmnModeler?.get<"canvas">("canvas");
      canvas.zoom("fit-viewport");})
      
    // if (warnings && warnings.length) {
    //   warnings.forEach((warn:any) => console.warn(warn))
    // }
  } catch (e) {
    console.error(`[Process Designer Warn]: ${typeof e === 'string' ? e : (e as Error)?.message}`)
  }
}
