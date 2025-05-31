import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import SingleForm from "../../UI/SingleForm";
import {
  useFormsQuery,
  useThumbnailMutation,
} from "../../../hooks/queries/useFormsQuery";
import ReactDOM from "react-dom";
import {
  FormKeyModalProps,
  FormMetadata,
} from "../../../../types/apis/bpmn-form";

const FormKeyModal: React.FC<FormKeyModalProps> = ({
  prop,
  onCancel,
  onSave,
  setModalValue,
  modalValue,
  t,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedItem, setSelectedItem] = useState<FormMetadata | null>(null);

  const { mutate } = useThumbnailMutation();
  const { data } = useFormsQuery({
    filter: "",
    includeHistoryModels: "true",
    modelType: 2,
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    if (selectedItem) {
      selectedItem?.latestVersion
        ? setModalValue(`${selectedItem.key}::latest`)
        : setModalValue(`${selectedItem.key}::${selectedItem.version}`);
      setExpandedItems((prev) => {
        const next = new Set(prev);
        next.add(selectedItem.name);
        return next;
      });
    } else if (modalValue) {
      const [key, version] = modalValue.split("::");

      const findItem = (
        key: string,
        version: number | string,
        items: FormMetadata[],
        parents: string[] = []
      ): { item?: FormMetadata; parents: string[] } => {
        for (const item of items) {
          const newParents = [...parents, item.name];

          if (
            item.key === key &&
            (String(item.version) === version || version === "latest")
          ) {
            return { item, parents: newParents };
          }

          if (item.historyModels?.length) {
            const result = findItem(
              key,
              version,
              item.historyModels,
              newParents
            );
            if (result.item) return result;
          }
        }
        return { item: undefined, parents: [] };
      };

      if (data) {
        const { item: foundItem, parents } = findItem(key, version, data);
        setSelectedItem(foundItem || null);

        if (foundItem) {
          mutate(foundItem.id, {
            onSuccess: (data) => {
              setSelectedItem((prevItem) =>
                prevItem
                  ? { ...prevItem, thumbnail: data || prevItem.thumbnail }
                  : null
              );
            },
            onError: (error) => {
              console.error("Error fetching thumbnail:", error);
            },
          });
          setExpandedItems((prev) => {
            const next = new Set(prev);
            parents.forEach((name) => next.add(name));
            return next;
          });
        }
      }
    }
  }, [selectedItem, modalValue, data]);

  useEffect(() => {
    return () => {
      if (selectedItem?.thumbnail) {
        URL.revokeObjectURL(selectedItem.thumbnail);
      }
    };
  }, [selectedItem?.thumbnail]);

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const renderItems = (list: FormMetadata[], depth = 0) => {
    return list
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item) => {
        const hasChildren = item.historyModels?.length > 0;
        const isExpanded = expandedItems.has(item.name);
        return (
          <div
            key={item.id}
            className="ml-[10px]"
            style={{ marginLeft: depth * 12 }}
          >
            <div
              className={`flex justify-between items-center p-2 cursor-pointer ${
                selectedItem?.id === item.id
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="flex items-center gap-2 overflow-hidden w-full">
                {hasChildren && (
                  <button
                    className="text-lg text-gray-500 w-4 shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(item.name);
                    }}
                  >
                    {isExpanded ? "▼" : "▶"}
                  </button>
                )}
                {/* Name with ellipsis */}
                <div className="truncate text-xl max-w-[95%]">{item.name}</div>
              </div>
              {/* Version badge */}
              <div className="flex-shrink-0 ml-2">
                <span className="text-sm bg-blue-400 text-white px-2 py-0.5 rounded">
                  {item.latestVersion ? "latest" : item.version}
                </span>
              </div>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden`}
              style={{
                maxHeight: isExpanded ? "1000px" : "0px",
                opacity: isExpanded ? 1 : 0,
              }}
            >
              {hasChildren &&
                isExpanded &&
                renderItems(item.historyModels, depth + 1)}
            </div>
          </div>
        );
      });
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-130">
      <div className="bg-white w-[1500px] max-h-[95vh] overflow-auto rounded-lg shadow-lg flex flex-col p-4">
        <h2 className="text-3xl font-semibold mb-4">
          {`${t(prop.title)} - ${selectedItem?.name || ""} (${
            selectedItem?.version || t("no form selected")
          })`}
        </h2>
        <div className="flex gap-4 flex-1 overflow-hidden">
          {/* Left Column */}
          <div className="w-[45%] border-r pr-4 flex flex-col">
            <input
              type="text"
              className="border px-2 py-1 mb-2 text-xl rounded"
              placeholder={t("Search")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="overflow-auto flex-1 border rounded bg-gray-50 min-h-[300px] max-h-[500px] p-2">
              {data ? renderItems(data) : null}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[55%] pl-4 max-h-[900px] overflow-auto">
            {selectedItem ? (
              <SingleForm form={selectedItem} />
            ) : (
              <div className="text-gray-500 text-xl">
                {t("GENERAL.ACTION.SELECT-FORM")}
              </div>
            )}
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xl cursor-pointer"
          >
            {t("Cancel")}
          </button>
          {/* <button
            disabled={!selectedItem}
            className="bg-blue-500 text-white px-4 py-1 rounded text-sm disabled:opacity-50 cursor-pointer"
          >
            {t("Open")}
          </button> */}
          <button
            disabled={!selectedItem}
            onClick={onSave}
            className="bg-green-600 text-white px-2 py-1 rounded text-xl disabled:opacity-50 cursor-pointer"
          >
            {t("Select")}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default withTranslation()(FormKeyModal);
