import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"; // Correct upload icon
import { setXml } from "../../store/process/processSlice";
import { bpmnFileUploader, zipFileUploader } from "../../utils/fileUploader";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const FileUploadButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    try {
      location?.pathname?.toLowerCase().includes("/processes")
        ? await bpmnFileUploader(input, dispatch).then(({ xml, id }) => {
            dispatch(setXml(xml));
            if (id) navigate(`/editor/${id}`);
          })
        : location?.pathname?.toLowerCase().includes("/apps")
        ? await zipFileUploader(input, dispatch).then(({ id }) => {
            if (id) navigate(`/apps/${id}`);
          })
        : undefined;
    } catch (error) {
      console.error("Error uploading file:", error);
      if (input) {
        input.value = ""; // Reset file input on error
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <label
        htmlFor="file-upload"
        className="w-18 h-12   flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <ArrowUpTrayIcon className="w-6 h-6" />
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
