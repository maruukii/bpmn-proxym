import { withTranslation } from "react-i18next";
import { formatTimestamp } from "../../../utils/tools";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { fetchThumbnail } from "../../../hooks/useFetchThumbnail";
import { Mirage } from "ldrs/react";
import Tag from "../components/tag";

export const SingleProcess: React.FC<SingleProcessMetadata> = ({ process }) => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadThumbnail = async () => {
      if (process?.id) {
        setThumbnail(null);
        const imageUrl = await fetchThumbnail(process.id);
        if (isMounted) {
          setThumbnail(imageUrl);
        }
      }
    };

    loadThumbnail();

    return () => {
      isMounted = false;
      if (thumbnail) {
        URL.revokeObjectURL(thumbnail);
      }
    };
  }, [process?.id]);

  const handleProcessSelection = () => {
    navigate(`/process/${process?.id}`);
  };
  return (
    <div
      className="relative w-60 mx-auto bg-white rounded-lg shadow-xl overflow-hidden group"
      title={process?.name}
    >
      {/* Canvas View - Fixed Size */}
      <div className="relative h-70">
        {/* Version Tag - Positioned at the Top Right */}
        <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded">
          <Tag
            className="bg-blue-100 text-blue-700"
            label={"v" + process.version}
          />
        </span>

        {/* Diagram Canvas */}
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handleProcessSelection}
        >
          {thumbnail ? (
            <img src={thumbnail} alt="Thumbnail" />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center">
              <Mirage size="60" speed="2.5" color="black" />
            </span>
          )}
        </div>
      </div>

      {/* Metadata Container - Positioned at the Bottom */}
      <div className="metadata-container absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-200 z-20 opacity-90 transition-all duration-300 ease-in-out group-hover:h-[150px] h-[100px] overflow-hidden">
        {/* Process Name */}
        <div className="text-xl font-semibold text-gray-800 truncate">
          {process.name}
        </div>

        {/* Process Metadata (Created By, Last Modified) */}
        <div className="text-sm text-gray-500 mt-1">{process?.createdBy}</div>
        <div className="text-sm text-gray-500 mt-1">
          {formatTimestamp(
            process?.lastUpdated,
            localStorage.getItem("I18N_LANGUAGE") || "en_US"
          )}
        </div>

        {/* Description - Shows when hovered */}
        <div className="text-sm text-gray-500 mt-1 line-clamp-2 group-hover:block hidden">
          {process?.description}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(SingleProcess);
