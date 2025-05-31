import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import {
  addProperty,
  getValues,
  getMappedProperty,
  removeProperty,
} from "../../../utils/ExceptionElementUtil";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { ModdleElement } from "bpmn-moddle";
import ReactDOM from "react-dom";

const DynamicPropertyModal: React.FC<DynamicPropertyModalProps> = ({
  prop,
  modalValue,
  setModalValue,
  saveModalChange,
  cancelEdit,
  setTableData,
  tableData,
  extendedFields,
  id,
  t,
}) => {
  const { activeElement, moddle, modeling } = useSelector(
    (state: RootState) => state.modeler
  );
  const [newRow, setNewRow] = useState<Record<string, string | boolean>>({});

  useEffect(() => {
    if (activeElement && extendedFields.length > 0 && id) {
      const existing = getValues(activeElement, id);
      setTableData(existing || []);
    }
  }, [activeElement]);

  const handleInputChange = (
    key: string,
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewRow((prev) => ({ ...prev, [key]: e.target.value.trim() }));
  };

  const [extendedFieldNames, setExtendedFieldNames] = useState<string[]>([]);

  // Set the field names on mount
  useEffect(() => {
    if (extendedFields) {
      const fieldNames = extendedFields.map((field) => field.key);
      setExtendedFieldNames(fieldNames);
    }
  }, [extendedFields]);

  const addRow = () => {
    if (
      Object.keys(newRow).length > 0 &&
      modeling &&
      moddle &&
      id &&
      extendedFieldNames.length > 0
    ) {
      // Add the exception
      addProperty(
        activeElement,
        newRow,
        moddle,
        modeling,
        id
        // extendedFieldNames
      );

      // Refetch the exceptions and update the table data
      const updatedExceptions = getValues(activeElement, id) || [];
      setTableData(updatedExceptions);
      setNewRow({});
    }
  };

  const deleteRow = (index: number, exception: ModdleElement) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    if (modeling) removeProperty(activeElement, exception, modeling); // Pass index only
  };
  // const moveRow = (
  //   index: number,
  //   direction: "up" | "down",
  //   exception: ModdleElement
  // ) => {
  //   setTableData((prev) => {
  //     const newData = [...prev];
  //     const targetIndex = direction === "up" ? index - 1 : index + 1;

  //     if (targetIndex >= 0 && targetIndex < newData.length && id) {
  //       [newData[index], newData[targetIndex]] = [
  //         newData[targetIndex],
  //         newData[index],
  //       ];

  //       if (modeling) {
  //         moveException(activeElement, exception, direction, modeling);
  //       }

  //       // Refetch the exceptions and update the table data
  //       const updatedExceptions = getValues(activeElement, id) || [];
  //       setTableData(updatedExceptions);
  //     }

  //     return newData;
  //   });
  // };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-100">
      <div className="bg-white p-6 rounded shadow-lg w-[800px] max-h-[90vh] overflow-auto flex gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">{t(prop.title)}</h2>
          {extendedFields.length > 0 ? (
            <>
              <table className="w-full table-auto border-collapse mb-4">
                <thead>
                  <tr>
                    {extendedFields.map(
                      (field) =>
                        field?.isDisplayed && (
                          <th
                            key={field.key}
                            className="border px-2 py-1 text-left"
                          >
                            {field.label}
                          </th>
                        )
                    )}
                    <th className="border px-2 py-1 ">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((exceptionEl, rowIndex) => {
                    const parsed = getMappedProperty(
                      exceptionEl,
                      extendedFields
                    );
                    return (
                      <tr
                        key={rowIndex}
                        onClick={() =>
                          setNewRow(parsed as Record<string, string | boolean>)
                        }
                      >
                        {extendedFields.map(
                          (field) =>
                            field?.isDisplayed && (
                              <td key={field.key} className="border px-2 py-1">
                                {(() => {
                                  const value = parsed?.[field.key];
                                  if (field.key === "implementation") {
                                    return parsed?.["class"]
                                      ? parsed["class"]
                                      : parsed?.["delegateExpression"]
                                      ? parsed["delegateExpression"]
                                      : parsed?.["expression"]
                                      ? parsed?.["expression"]
                                      : "";
                                  }
                                  if (field.type === "Boolean") {
                                    return String(value ? true : false);
                                  }
                                  return value || "";
                                })()}
                              </td>
                            )
                        )}
                        <td className="border px-2 py-1 space-x-1">
                          {/* <button
                            onClick={() => moveRow(rowIndex, "up", exceptionEl)}
                            disabled={rowIndex === 0}
                            className={`text-xs px-2 py-1 border rounded ${
                              rowIndex === 0
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-yellow-100"
                            }`}
                          >
                            ↑
                          </button>
                          <button
                            onClick={() =>
                              moveRow(rowIndex, "down", exceptionEl)
                            }
                            disabled={rowIndex === tableData.length - 1}
                            className={`text-xs px-2 py-1 border rounded ${
                              rowIndex === tableData.length - 1
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-yellow-100"
                            }`}
                          >
                            ↓
                          </button> */}
                          <button
                            onClick={() => deleteRow(rowIndex, exceptionEl)}
                            className="text-xs px-2 py-1 bg-red-200 border rounded"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <textarea
              className="w-full border p-2 rounded text-sm"
              rows={6}
              value={modalValue}
              onChange={(e) => setModalValue(e.target.value.trim())}
            />
          )}
          <div className="flex justify-end mt-4 gap-2">
            <button
              onClick={cancelEdit}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm"
            >
              {t("Cancel")}
            </button>
            {extendedFields.length == 0 && (
              <button
                onClick={saveModalChange}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                {t("Save")}
              </button>
            )}
          </div>
        </div>

        {extendedFields.length > 0 && (
          <div className="w-1/3 border-l pl-4">
            <h3 className="font-medium mb-2 text-sm">{t("NEW_ENTRY")}</h3>
            {extendedFields
              .filter((field) => field?.isInput)
              .map((field) => (
                <div key={field.key} className="mb-2">
                  <label className="block text-xs mb-1">{field.label}</label>
                  {field.type == "Boolean" ? (
                    <input
                      type={"checkbox"}
                      className="w-full border px-2 py-1 text-xs rounded"
                      checked={
                        newRow[field.key] === "true" ||
                        newRow[field.key] === true
                      }
                      onChange={(e) => {
                        const checkedVal = e.target.checked ? true : false;
                        setNewRow((prev) => ({
                          ...prev,
                          [field.key]: checkedVal,
                        }));
                      }}
                    />
                  ) : field.type === "Select" &&
                    Array.isArray(field.options) &&
                    field.options.length > 0 ? (
                    <select
                      autoFocus
                      id={`propertyInput-${id}`}
                      defaultValue={field.options[0].id}
                      onChange={(e) => handleInputChange(field.key, e)}
                      className="border border-gray-300 rounded px-1 py-0.5 w-full text-xs"
                    >
                      {field.options.map((option: any) => (
                        <option key={option.value} value={option.id}>
                          {t(option.name)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      className="w-full border px-2 py-1 text-xs rounded"
                      value={(newRow[field.key] as string) || ""}
                      onChange={(e) => handleInputChange(field.key, e)}
                    />
                  )}
                </div>
              ))}
            <button
              onClick={addRow}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm w-full"
            >
              {t("Add")}
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default withTranslation()(DynamicPropertyModal);
