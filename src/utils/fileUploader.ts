import { setFileData, setFileError } from "../store/file/fileSlice";
import { AppDispatch } from "../store/store";

export const fileUploader = (targetXML: HTMLInputElement, dispatch: AppDispatch): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (targetXML.files && targetXML.files[0]) {
      const file = targetXML.files[0];

      // // Check if the file has a .bpmn extension
      // if (!file.name.toLowerCase().endsWith(".bpmn")) {
      //   dispatch(setFileError("Invalid file type. Please upload a BPMN file."));
      //   reject(new Error("Invalid file type. Please upload a BPMN file."));
      //   return;
      // }

      // Create a FileReader to read the file content
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target?.result as string;

        // // Additional validation: Check if file content contains BPMN XML structure
        // if (!fileContent.includes("<bpmn:definitions")) {
        //   dispatch(setFileError("Invalid BPMN file. Missing required XML structure."));
        //   reject(new Error("Invalid BPMN file. Missing required XML structure."));
        //   return;
        // }

        // Dispatch Redux action to store filename and content
        dispatch(setFileData({ filename: file.name, fileContent }));
        resolve(fileContent);
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        reject(error);
      };

      // Read the file as text
      reader.readAsText(file);
    } else {
      reject(new Error("No file selected"));
    }
  });
};
