import { fileUploader } from "../../utils/fileUploader";
interface FileUploadButtonProps {
  setXml: (xml: string) => void;
}
const FileUploadButton: React.FC<FileUploadButtonProps> = ({ setXml }) => {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    console.log(typeof setXml);
    try {
      const fileContent = await fileUploader(input);
      setXml(fileContent);
      console.log("File content:", fileContent);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-10">
      {/* Visible Button with File Upload Icon */}
      <label
        htmlFor="file-upload"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-4 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <span style={{ fontSize: "2rem" }}>+</span>{" "}
      </label>

      {/* Hidden File Input */}
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        className="hidden" // Hide the input visually while keeping it accessible
      />
    </div>
  );
};

export default FileUploadButton;
