import { withTranslation } from "react-i18next";
import { formatTimestamp } from "../../../utils/tools";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { fetchThumbnail } from "../../../hooks/useFetchThumbnail";
import { Mirage } from "ldrs/react";
import Tag from "../components/tag";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { SingleProcessMetadata } from "../../../../types/apis/bpmn-process";
import { ThemeOptions, Types } from "../../../CommonData/Enums";
import "../../../Styles/glyphicons.css";
import { useAppsDefsQuery } from "../../../hooks/queries/useProcessesAppDefsQuery";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
export const SingleProcess: React.FC<SingleProcessMetadata> = ({
  process,
  doNavigate,
  isSelected,
  type,
}) => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const { icon, theme } = useSelector((state: RootState) => state.appDefs);
  const apps = useAppsDefsQuery({
    lastId: process?.modelType !== 0 ? process?.id : "",
    oldId: "",
  });
  const iconTheme = {
    icon: apps?.data?.definition?.icon || "",
    theme: apps?.data?.definition?.theme || "",
  };

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

    type === Types.PROCESS ? loadThumbnail() : undefined;
    return () => {
      isMounted = false;
      if (thumbnail) {
        URL.revokeObjectURL(thumbnail);
      }
    };
  }, [process?.id]);
  return (
    <div
      className={`relative w-60 mx-auto bg-white rounded-lg overflow-hidden group transition-shadow duration-300 ${
        isSelected
          ? "shadow-[0_12px_30px_6px_rgba(173,216,230,0.9)]"
          : "shadow-xl"
      }`}
      title={process?.name}
    >
      {isSelected && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 shadow-lg z-30">
          <CheckCircleIcon className="w-5 h-5" />
        </div>
      )}

      <div className="relative h-70">
        <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded z-10">
          <Tag
            className="bg-blue-100 text-blue-700"
            label={"v" + process.version}
          />
        </span>

        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => {
            doNavigate ? navigate(`${process?.id}`) : undefined;
          }}
        >
          {type === Types.APPS ? (
            <div
              className="relative inline-block w-full h-full overflow-hidden group rounded shadow"
              style={{
                backgroundColor: ThemeOptions.find((option) =>
                  location?.pathname?.toLowerCase()?.includes("apps-editor") &&
                  theme
                    ? option.id === theme
                    : option.id === iconTheme?.theme
                )?.color,
              }}
            >
              <i
                className={`${
                  location?.pathname?.toLowerCase()?.includes("apps-editor") &&
                  icon
                    ? icon
                    : iconTheme?.icon
                } absolute top-[-8rem] right-15 text-cyan-100 transition-all duration-1000 group-hover:top-[-5rem] opacity-10 text-[300px]`}
              ></i>
              <i
                className={`${
                  location?.pathname?.toLowerCase()?.includes("apps-editor") &&
                  icon
                    ? icon
                    : iconTheme?.icon
                } absolute top-[-3rem] right-5 text-[200px] text-cyan-700 opacity-40 transition-transform duration-1000 group-hover:translate-x-5`}
              />
            </div>
          ) : thumbnail && type === Types.PROCESS ? (
            <img src={thumbnail} alt="Thumbnail" />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center">
              <Mirage size="60" speed="2.5" color="black" />
            </span>
          )}
        </div>
      </div>

      <div className="metadata-container absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-200 z-20 opacity-90 transition-all duration-300 ease-in-out group-hover:h-[150px] h-[100px] overflow-hidden">
        <div className="text-xl font-semibold text-gray-800 truncate">
          {process.name}
        </div>

        <div className="text-sm text-gray-500 mt-1">{process?.createdBy}</div>
        <div className="text-sm text-gray-500 mt-1">
          {formatTimestamp(
            process?.lastUpdated,
            localStorage.getItem("I18N_LANGUAGE") || "en_US"
          )}
        </div>

        <div className="text-sm text-gray-500 mt-1 line-clamp-2 group-hover:block hidden">
          {process?.description}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(SingleProcess);
