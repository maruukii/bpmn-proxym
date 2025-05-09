import { withTranslation } from "react-i18next";
import { formatTimestamp } from "../../../utils/tools";

export const SingleProcess: React.FC<SingleProcessMetadata> = ({ process }) => {
  return (
    <div
      className="relative w-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden group"
      title={process.name}
    >
      {/* Canvas View - Fixed Size */}
      <div className="relative h-80 bg-gray-200">
        {/* You can replace this div with your actual diagram canvas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl text-gray-500">{process?.thumbnail}</span>
        </div>
      </div>

      {/* Metadata Container - Positioned at the Bottom */}
      <div className="metadata-container absolute bottom-0 left-0 right-0 px-4 py-2 bg-white z-20 opacity-90 transition-all duration-300 ease-in-out group-hover:h-[150px] h-[100px] overflow-hidden">
        {/* Process Name */}
        <div className="text-xl font-semibold text-gray-800 truncate">
          {process.name}
        </div>

        {/* Process Metadata (Created By, Last Modified) */}
        <div className="text-sm text-gray-500 mt-1">{process.createdBy}</div>
        <div className="text-sm text-gray-500 mt-1">
          {formatTimestamp(
            process.lastUpdated,
            localStorage.getItem("I18N_LANGUAGE") || "en_US"
          )}
        </div>

        {/* Description - Shows when hovered */}
        <div className="text-sm text-gray-500 mt-1 line-clamp-2 group-hover:block hidden">
          {process.description}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(SingleProcess);
