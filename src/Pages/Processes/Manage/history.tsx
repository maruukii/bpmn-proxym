import { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { dateTimestamp } from "../../../utils/tools";
import { ProcessMetadata } from "../../../../types/apis/bpmn-process";

const History: React.FC<ProcessHistoryProps> = ({
  history,
  setHistoryOpen,
  navigate,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lastVersionId, oldVersionId } = useParams();
  const [id, setId] = useState<string | null>(null);
  useEffect(() => {
    const handleId = () => {
      if (lastVersionId)
        oldVersionId ? setId(oldVersionId) : setId(lastVersionId);
    };
    handleId();
  }, [lastVersionId, oldVersionId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current.contains(event.target as Node)
      ) {
        setHistoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-100 bg-white shadow-lg rounded-lg border p-3 z-50">
        <div className="absolute -top-2 left-85 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t"></div>

        {history.length > 0 ? (
          <ul className="text-sm text-gray-700 divide-y divide-gray-200 overflow-auto max-h-70">
            {history.map((item: ProcessMetadata, index: number) => (
              <li
                key={index}
                className={`flex items-center justify-between py-2 px-3 cursor-pointer  ${
                  id === item?.id ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  item?.id !== id
                    ? item?.id === lastVersionId
                      ? navigate(`/process/${lastVersionId}`)
                      : navigate(
                          `/process/${lastVersionId}/history/${item?.id}`
                        )
                    : null;
                  setHistoryOpen(false);
                }}
              >
                {/* Version */}
                <span
                  className={`text-3xl ${
                    id === item?.id ? "font-bold" : "font-medium"
                  }
                 text-gray-800 w-1/5`}
                >
                  {item.version}
                </span>

                {/* Created By */}
                <span
                  className={`text-gray-500 w-2/5 ${
                    id === item?.id ? "font-bold" : ""
                  } text-center`}
                >
                  {item.createdBy}
                </span>

                {/* Last Updated */}
                <span className="text-gray-400 w-2/5 text-right">
                  {item?.lastUpdated
                    ? dateTimestamp(
                        item?.lastUpdated,
                        localStorage.getItem("I18N_LANGUAGE") || "en_US"
                      )
                    : undefined}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm text-center">
            No history available.
          </p>
        )}
      </div>
    </div>
  );
};
export default withTranslation()(History);
