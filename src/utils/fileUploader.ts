export const fileUploader = (targetXML: HTMLInputElement): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Check if a file was selected
      if (targetXML.files && targetXML.files[0]) {
        const file = targetXML.files[0];
  
        // Create a FileReader to read the file content
        const reader = new FileReader();
  
        // Define the onload event handler
        reader.onload = (event) => {
          // Get the file content as a string
          const fileContent = event.target?.result as string;
          resolve(fileContent); // Resolve the promise with the file content
        };
  
        // Define the onerror event handler
        reader.onerror = (error) => {
          console.error("Error reading file:", error);
          reject(error); // Reject the promise if there's an error
        };
  
        // Read the file as text
        reader.readAsText(file);
      } else {
        console.error("No file selected");
        reject(new Error("No file selected")); // Reject the promise if no file is selected
      }
    });
  };