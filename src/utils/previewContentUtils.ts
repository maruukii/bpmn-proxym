import type Modeler from "bpmn-js/lib/Modeler";
import type BpmnModdle from "bpmn-moddle";

export const openJsonPreview = async ({modeler,moddle,openPreviewModal}:{modeler:Modeler,moddle:BpmnModdle,openPreviewModal:(typeStringiied:string,previewFormat:any)=>void}) => {
    if (!modeler) return;
    try {
      const { xml } = await modeler.saveXML({ format: true });
      const json = await moddle.fromXML(xml as string);
      openPreviewModal(JSON.stringify(json, null, 2), "json");
    } catch (error) {
      console.error("Error generating JSON preview:", error);
    }
  };
   export const openXMLPreview = async ({modeler,openPreviewModal}:{modeler:Modeler,openPreviewModal:(contentStringified:string,previewFormat:any)=>void}) => {
      if (!modeler) return;
      try {
        const { xml } = await modeler.saveXML({ format: true, preamble: true });
        openPreviewModal(xml as string, "xml");
      } catch (error) {
        console.error("Error generating XML preview:", error);
      }
    };
