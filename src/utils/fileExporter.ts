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
      const result = await modeler.saveXML({ format: true });

      if (!result.xml) {
        const errorMsg = "Failed to generate XML from the BPMN diagram.";
        dispatch(setFileError(errorMsg));
        return reject(new Error(errorMsg));
      }

      const xml: string = result.xml;

      const blob = new Blob([xml], { type: "application/xml" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${filename?.split(".")[0]}.bpmn20.xml`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(link.href);

      resolve(); 
    } catch (err) {
      console.error("Failed to export BPMN diagram:", err);
      reject(err);
    }
  });
};

export const downloadBPMN = (id:string,filename: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {


    try {
    await axiosInstance.get(`/configuration/modeler/rest/models/${id}/bpmn20`).then((data)=>{

      const xml: string = data?.data;      
       const blob = new Blob([xml], { type: "application/xml" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${filename?.split(".")[0]}.bpmn20.bpmn`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(link.href);

      resolve(); 
    })

     
    } catch (err) {
      console.error("Failed to download BPMN diagram:", err);
      reject(err); 
    }
  });
};

export const exportBar = (id: string, filename: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.get(`/configuration/modeler/rest/app-definitions/${id}/export-bar`, {
        responseType: "arraybuffer",
      });

      const blob = new Blob([response.data], { type: "application/octet-stream" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${filename?.split(".")[0]}.bar`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(link.href);

      resolve();
    } catch (err) {
      console.error("Failed to download BAR file:", err);
      reject(err);
    }
  });
};
export const downloadZip = (id: string, filename: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.get(`/configuration/modeler/rest/app-definitions/${id}/export`, {
        responseType: "arraybuffer", 
      });

      const blob = new Blob([response.data], { type: "application/zip" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${filename?.split(".")[0]}.zip`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(link.href);

      resolve();
    } catch (err) {
      console.error("Failed to download ZIP file:", err);
      reject(err);
    }
  });
};