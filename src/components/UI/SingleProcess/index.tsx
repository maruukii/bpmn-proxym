import { withTranslation } from "react-i18next";
import { formatTimestamp } from "../../../utils/tools";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { fetchThumbnail } from "../../../hooks/useFetchThumbnail";
import { Mirage } from "ldrs/react";
import Tag from "../components/tag";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { SingleProcessMetadata } from "../../../../types/apis/bpmn-process";

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

    !location?.pathname?.toLowerCase()?.startsWith("/apps")
      ? loadThumbnail()
      : undefined;

    return () => {
      isMounted = false;
      if (thumbnail) {
        URL.revokeObjectURL(thumbnail);
      }
    };
  }, [process?.id]);

  const handleProcessSelection = () => {
    navigate(`${process?.id}`);
  };
  return (
    <div
      className="relative w-60 mx-auto bg-white rounded-lg shadow-xl overflow-hidden group"
      title={process?.name}
    >
      {/* Canvas View - Fixed Size */}
      <div className="relative h-70">
        {/* Version Tag - Positioned at the Top Right */}
        <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded z-10">
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
          {location?.pathname?.includes("/apps") ? (
            <div className="relative inline-block w-full h-full bg-cyan-600 overflow-hidden group rounded shadow">
              <Cog6ToothIcon className="absolute top-[-3rem] right-5 w-50 h-50 text-cyan-100 transition-all duration-1000 group-hover:top-0.5 opacity-5" />
              <Cog6ToothIcon className="absolute top-[10%] right-5 w-30 h-30 text-cyan-700 opacity-40 transition-transform duration-1000 group-hover:translate-x-5" />
              {/* Second gear (sliding from top) */}
            </div>
          ) : thumbnail ? (
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
