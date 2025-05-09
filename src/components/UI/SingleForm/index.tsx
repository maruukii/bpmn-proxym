import { withTranslation } from "react-i18next";
import { formatTimestamp } from "../../../utils/tools";

export const SingleForm: React.FC<SingleFormMetadata> = ({ form }) => {
  return (
    <div
      className="relative w-120 mx-auto bg-white rounded-lg shadow-lg overflow-hidden group"
      title={form.name}
    >
      {/* Canvas View - Fixed Size */}
      <div className="relative h-130 bg-gray-200">
        {/* You can replace this div with your actual diagram canvas */}
        <div className="absolute inset-2 ">
          <span className="text-xs bg-gray-300 px-1 rounded ">
            {form?.version}
          </span>
          {form?.thumbnail && <img src={form.thumbnail} alt="Thumbnail" />}{" "}
        </div>
      </div>

      {/* Metadata Container - Positioned at the Bottom */}
      <div className="metadata-container absolute bottom-0 left-0 right-0 px-4 py-2 bg-white z-20 opacity-90 transition-all duration-300 ease-in-out group-hover:h-[150px] h-[110px] overflow-hidden">
        {/* form Name */}
        <div className="text-xl font-semibold text-gray-800 truncate">
          {form.name}
        </div>

        {/* form Metadata (Created By, Last Modified) */}
        <div className="text-sm text-gray-500 mt-1">{form.version}</div>
        <div className="text-sm text-gray-500 mt-1">{form.createdBy}</div>
        <div className="text-sm text-gray-500 mt-1">
          {formatTimestamp(
            form.lastUpdated,
            localStorage.getItem("I18N_LANGUAGE") || "en_US"
          )}
        </div>

        {/* Comment - Shows when hovered */}
        <div className="text-sm text-gray-500 mt-1 ">{form.comment}</div>
      </div>
    </div>
  );
};

export default withTranslation()(SingleForm);
