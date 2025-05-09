import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import SingleForm from "../../UI/SingleForm";
import {
  thumbnailsQuery,
  useFormsQuery,
} from "../../../hooks/queries/useFormsQuery";

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
  const [forms, setForms] = useState<FormMetadata[] | null>([]);

  const { data, isLoading, error } = useFormsQuery({
    filter: "processes",
    includeHistoryModels: "modifiedDesc",
    modelType: 0,
    page: 1,
    limit: 10,
  });
  console.log(data);

  const items: FormMetadata[] = [
    {
      id: "4afa912c-ab3b-11ef-9068-36082d5d396d",
      name: "Onboarding Agent Request Validation",
      key: "onboarding_agent_request_validation",
      description: "onboarding_agent_request_validation",
      createdBy: "bkdev bkdev",
      lastUpdatedBy: "bkdev bkdev",
      lastUpdated: 1735923140968,
      latestVersion: true,
      version: 2,
      comment:
        "'Increment Model Version' strategy applied for key: onboarding_agent_request_validation, version: 1 and latest existing version 1",
      modelType: 2,
      tenantId: "",
      historyModels: [
        {
          id: "193f9de0-c9f3-11ef-9c94-26dadc833c71",
          name: "Onboarding Agent Request Validation",
          key: "onboarding_agent_request_validation",
          description: "onboarding_agent_request_validation",
          createdBy: "bkdev bkdev",
          lastUpdatedBy: "bkdev bkdev",
          lastUpdated: 1733398359001,
          latestVersion: false,
          version: 1,
          comment: "",
          modelType: 2,
          tenantId: "",
        },
      ],
    },
    {
      id: "0ccf84f6-ad9a-11ef-a491-26feeb862f9e",
      name: "Claim Customer Request",
      key: "claim-customer-request",
      description: "",
      createdBy: "bkdev bkdev",
      lastUpdatedBy: "bkdev bkdev",
      lastUpdated: 1734085245194,
      latestVersion: true,
      version: 1,
      comment: "",
      modelType: 2,
      tenantId: "",
      historyModels: [],
    },
    {
      id: "4b4d6c1d-ab3b-11ef-9068-36082d5d396d",
      name: "Onboarding prospect details",
      key: "onboarding_prospect_details",
      description: "",
      createdBy: "bkdev bkdev",
      lastUpdatedBy: "bkdev bkdev",
      lastUpdated: 1737473095889,
      latestVersion: true,
      version: 2,
      comment: "",
      modelType: 2,
      tenantId: "",
      historyModels: [
        {
          id: "1943e3a1-c9f3-11ef-9c94-26dadc833c71",
          name: "Onboarding prospect details",
          key: "onboarding_prospect_details",
          description: "",
          createdBy: "bkdev bkdev",
          lastUpdatedBy: "bkdev bkdev",
          lastUpdated: 1733760079342,
          latestVersion: false,
          version: 1,
          comment: "",
          modelType: 2,
          tenantId: "",
        },
      ],
    },
    {
      id: "0cc21774-ad9a-11ef-a491-26feeb862f9e",
      name: "Claim Agent Request Handling",
      key: "claim-agent-request-handling",
      description: "",
      createdBy: "bkdev bkdev",
      lastUpdatedBy: "bkdev bkdev",
      lastUpdated: 1733406791751,
      latestVersion: true,
      version: 1,
      comment: "",
      modelType: 2,
      tenantId: "",
      historyModels: [],
    },
    {
      id: "0ccb8d55-ad9a-11ef-a491-26feeb862f9e",
      name: "Claim Request Agent Response",
      key: "claim-request-agent-response",
      description: "",
      createdBy: "bkdev bkdev",
      lastUpdatedBy: "bkdev bkdev",
      lastUpdated: 1733405664129,
      latestVersion: true,
      version: 1,
      comment: "",
      modelType: 2,
      tenantId: "",
      historyModels: [],
    },
    {
      id: "e44ebf3b-c9c9-11ef-9c94-26dadc833c71",
      name: "testing",
      key: "testing",
      description: "testing",
      createdBy: "bkdev bkdev",
      lastUpdatedBy: "bkdev bkdev",
      lastUpdated: 1735905442775,
      latestVersion: true,
      version: 1,
      modelType: 2,
      tenantId: "",
      historyModels: [],
    },
    {
      id: "4acbb8fb-ab3b-11ef-9068-36082d5d396d",
      name: "Onboarding Prospect Additional  Details",
      key: "onboarding_prospect_additional_details",
      description: "",
      createdBy: "bkdev bkdev",
      lastUpdatedBy: "bkdev bkdev",
      lastUpdated: 1735923140940,
      latestVersion: true,
      version: 2,
      comment:
        "'Increment Model Version' strategy applied for key: onboarding_prospect_additional_details, version: 1 and latest existing version 1",
      modelType: 2,
      tenantId: "",
      historyModels: [
        {
          id: "193abbdf-c9f3-11ef-9c94-26dadc833c71",
          name: "Onboarding Prospect Additional  Details",
          key: "onboarding_prospect_additional_details",
          description: "",
          createdBy: "bkdev bkdev",
          lastUpdatedBy: "bkdev bkdev",
          lastUpdated: 1734631147005,
          latestVersion: false,
          version: 1,
          comment: "",
          modelType: 2,
          tenantId: "",
        },
      ],
    },
  ];
  useEffect(() => {
    if (selectedItem) {
      setModalValue(selectedItem.id + "::" + selectedItem.version);
      setExpandedItems((prev) => {
        const next = new Set(prev);
        next.add(selectedItem.name);
        return next;
      });
    } else if (modalValue) {
      const [formId, version] = modalValue.split("::");

      const findItem = (
        formId: string,
        version: number | string,
        items: FormMetadata[],
        parentNames: string[] = []
      ): { item: FormMetadata | undefined; parents: string[] } => {
        for (const item of items) {
          const newParents = [...parentNames, item.name];

          if (item.id === formId && item.version === version) {
            return { item, parents: newParents };
          }

          if (item?.historyModels) {
            const result = findItem(
              formId,
              version,
              item.historyModels,
              newParents
            );
            if (result.item) return result;
          }
        }
        return { item: undefined, parents: [] };
      };

      const { item: foundItem, parents } = findItem(formId, version, items);

      setSelectedItem(foundItem || null);

      if (foundItem) {
        setExpandedItems((prev) => {
          const next = new Set(prev);
          parents.forEach((name) => next.add(name));
          return next;
        });
      }
    }
  }, [selectedItem, modalValue]);
  const handleSelectedFormThumbnail = async (item: FormMetadata) => {
    // const { data, isLoading, error } = thumbnailsQuery(item.id);
    // item.thumbnail = data;
    setSelectedItem(item);
  };

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
      .map((item) => (
        <div
          key={item.name}
          className="ml-[10px]"
          style={{ marginLeft: depth * 12 }}
        >
          <div
            className={`flex justify-between items-center p-2 hover:bg-blue-100 cursor-pointer ${
              selectedItem?.name === item.name ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSelectedFormThumbnail(item)}
          >
            <div className="flex items-center gap-1">
              {item?.historyModels && (
                <button
                  className="text-xs text-gray-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(item.name);
                  }}
                >
                  {expandedItems.has(item.name) ? "▼" : "▶"}
                </button>
              )}
              <span>{item.name}</span>
            </div>
            <span className="text-xs bg-gray-300 px-1 rounded">
              {item.version}
            </span>
          </div>
          {item?.historyModels &&
            expandedItems.has(item.name) &&
            renderItems(item?.historyModels, depth + 1)}
        </div>
      ));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100">
      <div className="bg-white w-[1000px] max-h-[90vh] rounded-lg shadow-lg flex flex-col p-4">
        <h2 className="text-lg font-semibold mb-4">
          {`${t(prop.title)} - ${selectedItem?.name || ""} (${
            selectedItem?.version || ""
          })`}
        </h2>
        <div className="flex gap-4 flex-1 overflow-hidden">
          {/* Left Column */}
          <div className="w-[45%] border-r pr-4 flex flex-col">
            <input
              type="text"
              className="border px-2 py-1 mb-2 text-sm rounded"
              placeholder={t("Search")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="overflow-auto flex-1 border rounded bg-gray-50 min-h-[200px] max-h-[300px]">
              {renderItems(items)}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[55%] pl-4">
            {selectedItem ? (
              <SingleForm form={selectedItem} />
            ) : (
              <div className="text-gray-500 text-sm">
                {t("GENERAL.ACTION.SELECT-FORM")}
              </div>
            )}
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-800 px-4 py-1 rounded text-sm"
          >
            {t("Cancel")}
          </button>
          <button
            onClick={onSave}
            disabled={!selectedItem}
            className="bg-blue-500 text-white px-4 py-1 rounded text-sm disabled:opacity-50 cursor-pointer"
          >
            {t("Open")}
          </button>
          <button
            // onClick={() => selectedItem && onSelect(selectedItem)}
            disabled={!selectedItem}
            className="bg-green-600 text-white px-4 py-1 rounded text-sm disabled:opacity-50"
          >
            {t("Select")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(FormKeyModal);
