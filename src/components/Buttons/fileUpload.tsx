import { fileUploader } from "../../utils/fileUploader";
import { useDispatch } from "react-redux";
interface FileUploadButtonProps {
  setXml: (xml: string) => void;
}
const FileUploadButton: React.FC<FileUploadButtonProps> = ({ setXml }) => {
  const dispatch = useDispatch();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    try {
      setXml(await fileUploader(input, dispatch));
    } catch (error) {
      console.error("Error uploading file:", error);

      // Reset the file input value on error
      if (input) {
        input.value = "";
      }
    }
  };
  return (
    <div className="fixed bottom-8 right-8 z-30">
      {/* Visible Button with File Upload Icon */}
      <label
        htmlFor="file-upload"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-4 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <span className="text-3xl">📥</span>{" "}
      </label>

      {/* Hidden File Input */}
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUploadButton;
