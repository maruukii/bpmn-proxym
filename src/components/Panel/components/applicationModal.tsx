import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { useApplicationsQuery } from "../../../hooks/queries/useApplicationsQuery";

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  prop,
  onCancel,
  onSave,
  setModalValue,
  modalValue,
  t,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<ApplicationMetadata | null>(
    null
  );

  const { data } = useApplicationsQuery();

  useEffect(() => {
    if (selectedItem) {
      setModalValue(`${selectedItem.name}`);
    } else if (modalValue) {
      const application = modalValue;

      const findItem = (
        key: string,
        items: ApplicationMetadata[]
      ): { item?: ApplicationMetadata } => {
        for (const item of items) {
          if (item.name === key) {
            return { item };
          }
        }
        return { item: undefined };
      };

      if (data) {
        const { item: foundItem } = findItem(application, data);
        setSelectedItem(foundItem || null);
      }
    }
  }, [selectedItem, modalValue, data]);

  const renderItems = (list: ApplicationMetadata[]) => {
    return list
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item) => {
        return (
          <div key={item.id} className="mb-2">
            <div
              className={`flex justify-between items-center p-3 cursor-pointer ${
                selectedItem?.id === item.id
                  ? "bg-blue-300 "
                  : "hover:bg-gray-200 bg-gray-100"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="flex flex-col items-baseline gap-2 overflow-hidden w-full">
                <div className="truncate font-bold text-lg max-w-[95%]">
                  {item.name}
                </div>
                <div className="truncate text-sm max-w-[95%]">
                  {item.audience}
                </div>
              </div>
              {/* Version badge */}
            </div>
          </div>
        );
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 overflow-auto">
      <div className="bg-white w-[30vw] max-h-[95vh] overflow-auto rounded-lg shadow-lg flex flex-col p-4">
        <h2 className="text-md font-semibold mb-4">
          {`${t(prop.title)} : ${selectedItem?.name || ""} `}
          {selectedItem ? (
            <span className="bg-gray-600 text-white text-sm px-1 py-0 rounded ml-1">
              {selectedItem?.audience || ""}
            </span>
          ) : undefined}
        </h2>

        <div className="flex justify-center">
          <div className="w-screen   flex flex-col">
            <input
              type="text"
              className="border px-2 py-1 mb-2 text-xl rounded"
              placeholder={t("Search")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="overflow-auto flex-1  rounded bg-gray-50 min-h-[200px] max-h-[400px] p-2">
              {data ? renderItems(data) : null}
            </div>
          </div>
        </div>
        {/* Footer buttons */}
        <div className="flex justify-between gap-2 mt-4">
          <div className="flex justify-start mt-4 ">
            <button
              onClick={() => {
                setSelectedItem(null);
                setModalValue("");
              }}
              className="bg-red-400 text-gray-800 px-2 py-1 rounded text-xl cursor-pointer "
            >
              {t("Clear")}
            </button>
          </div>
          <div className=" flex justify-end gap-2 mt-4">
            <button
              onClick={onCancel}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xl cursor-pointer"
            >
              {t("Cancel")}
            </button>
            <button
              onClick={onSave}
              className="bg-green-600 text-white px-2 py-1 rounded text-xl disabled:opacity-50 cursor-pointer"
            >
              {t("Select")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ApplicationModal);
