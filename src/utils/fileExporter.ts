import { axiosInstance } from "../config/axiosInstance";
import { setFileError } from "../store/file/fileSlice";
import { AppDispatch } from "../store/store";

export const exportBPMN = (modeler: any, filename: string, dispatch: AppDispatch): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    if (!modeler) {
      const errorMsg = "Modeler is not initialized.";
      dispatch(setFileError(errorMsg));
      return reject(new Error(errorMsg));
    }

    try {
      // Save the BPMN diagram as XML
      const result = await modeler.saveXML({ format: true });

      if (!result.xml) {
        const errorMsg = "Failed to generate XML from the BPMN diagram.";
        dispatch(setFileError(errorMsg));
        return reject(new Error(errorMsg));
      }

      const xml: string = result.xml;

      // Create a Blob from the XML string
      const blob = new Blob([xml], { type: "application/xml" });

      // Create a link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${filename?.split(".")[0]}_exported_copy.bpmn`;

      // Append the link to the body (for Firefox compatibility)
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Revoke the Blob URL to free up memory
      URL.revokeObjectURL(link.href);

      resolve(); // Resolve the promise on success
    } catch (err) {
      console.error("Failed to export BPMN diagram:", err);
      reject(err); // Reject the promise on failure
    }
  });
};

export const downloadBPMN = (id:string,filename: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {


    try {
    await axiosInstance.get(`/configuration/modeler/rest/models/${id}/bpmn20`).then((data)=>{

      const xml: string = data?.data;      
       const blob = new Blob([xml], { type: "application/xml" });

      // Create a link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${filename?.split(".")[0]}.bpmn20.bpmn`;

      // Append the link to the body (for Firefox compatibility)
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Revoke the Blob URL to free up memory
      URL.revokeObjectURL(link.href);

      resolve(); 
    })

      // Create a Blob from the XML string
     // Resolve the promise on success
    } catch (err) {
      console.error("Failed to download BPMN diagram:", err);
      reject(err); // Reject the promise on failure
    }
  });
};
