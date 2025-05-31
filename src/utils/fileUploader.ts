import { axiosFormData } from "../config/axiosInstance";
import { setFileData, setFileError } from "../store/file/fileSlice";
import { setProcessData } from "../store/process/processSlice";
import { AppDispatch } from "../store/store";

const handleImport = async (file: File, dispatch: AppDispatch): Promise<string> => {
  const req = new FormData();
  req.append("file", file);

  try {
    const { data } = await axiosFormData.post("/configuration/modeler/rest/import-process-model", req);
    dispatch(setProcessData(data));
    return data?.id; // ✅ Ensures the ID is properly returned
  } catch (error) {
    console.error("Error importing file:", error);
    throw error;
  }
};

export const fileUploader = (targetXML: HTMLInputElement, dispatch: AppDispatch): Promise<{ xml: string; id: string }> => {
  return new Promise((resolve, reject) => {
    if (!targetXML.files || !targetXML.files[0]) {
      reject(new Error("No file selected"));
      return;
    }

    const file = targetXML.files[0];

    // ✅ Validate file type
    if (!file.name.toLowerCase().endsWith(".bpmn")) {
      dispatch(setFileError("Invalid file type. Please upload a BPMN file."));
      reject(new Error("Invalid file type. Please upload a BPMN file."));
      return;
    }

    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const fileContent = event.target?.result as string;
        
        // ✅ Await handleImport to get the ID
        const id = await handleImport(file, dispatch);

        dispatch(setFileData({ filename: file.name, fileContent }));
        
        resolve({ xml: fileContent, id }); // ✅ Returns both values correctly
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      reject(error);
    };

    reader.readAsText(file);
  });
};