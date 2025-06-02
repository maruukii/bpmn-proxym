import type Modeler from "bpmn-js/lib/Modeler";
import type BpmnModdle from "bpmn-moddle";

export const openJsonPreview = async ({
  modeler,
  moddle,
  openPreviewModal,
}: {
  modeler: Modeler;
  moddle: BpmnModdle;
  openPreviewModal?: (typeStringified: string, previewFormat: any) => void;
}): Promise<string | undefined> => {
  if (!modeler) return "";

  try {
    const { xml } = await modeler.saveXML({ format: true });
    const json = await moddle.fromXML(xml as string);

    const formattedJson = JSON.stringify(json, null, 2);

    openPreviewModal && openPreviewModal(formattedJson, "json");

    return formattedJson;
  } catch (error) {
    console.error("Error generating JSON preview:", error);
    return undefined;
  }
};
   export const openXMLPreview = async ({
  modeler,
  openPreviewModal,
}: {
  modeler: Modeler;
  openPreviewModal?: (contentStringified: string, previewFormat: any) => void;
}): Promise<string | undefined> => {
  if (!modeler) return undefined;

  try {
    const { xml } = await modeler.saveXML({ format: true, preamble: true });

    if (openPreviewModal) {
      openPreviewModal(xml as string, "xml");
    }

    return xml;
  } catch (error) {
    console.error("Error generating XML preview:", error);
    return undefined;
  }
};
