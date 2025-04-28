import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import {
  addException,
  moveException,
  getExceptions,
  getMappedException,
  removeException,
} from "../../../utils/ExceptionElementUtil";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { ModdleElement } from "bpmn-moddle";
interface ExtendedField {
  label: string;
  key: string;
  type: string;
}

interface DynamicPropertyModalProps {
  prop: any;
  modalValue: string;
  setModalValue: React.Dispatch<React.SetStateAction<string>>;
  saveModalChange: () => void;
  cancelEdit: () => void;
  extendedFields: ExtendedField[];
  setTableData: React.Dispatch<React.SetStateAction<ModdleElement[]>>;
  tableData: ModdleElement[];
  t: any;
  id: string | null;
}

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
      const existing = getExceptions(activeElement, id);
      setTableData(existing || []);
    }
  }, [activeElement]);

  const handleInputChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewRow((prev) => ({ ...prev, [key]: e.target.value }));
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
    debugger;
    if (
      Object.keys(newRow).length > 0 &&
      modeling &&
      moddle &&
      id &&
      extendedFieldNames.length > 0
    ) {
      // Add the exception
      addException(
        activeElement,
        newRow,
        moddle,
        modeling,
        id,
        extendedFieldNames
      );

      // Refetch the exceptions and update the table data
      const updatedExceptions = getExceptions(activeElement, id) || [];
      console.log(updatedExceptions);
      setTableData(updatedExceptions);
      setNewRow({});
    }
  };

  const deleteRow = (index: number, exception: ModdleElement) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    if (modeling) removeException(activeElement, exception, modeling); // Pass index only
  };
  const moveRow = (
    index: number,
    direction: "up" | "down",
    exception: ModdleElement
  ) => {
    setTableData((prev) => {
      const newData = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex >= 0 && targetIndex < newData.length && id) {
        [newData[index], newData[targetIndex]] = [
          newData[targetIndex],
          newData[index],
        ];

        if (modeling) {
          moveException(activeElement, exception, direction, modeling);
        }

        // Refetch the exceptions and update the table data
        const updatedExceptions = getExceptions(activeElement, id) || [];
        setTableData(updatedExceptions);
      }

      return newData;
    });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100">
      <div className="bg-white p-6 rounded shadow-lg w-[800px] max-h-[90vh] overflow-auto flex gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">{t(prop.title)}</h2>
          {extendedFields.length > 0 ? (
            <>
              <table className="w-full table-auto border-collapse mb-4">
                <thead>
                  <tr>
                    {extendedFields.map((field) => (
                      <th
                        key={field.key}
                        className="border px-2 py-1 text-left"
                      >
                        {field.label}
                      </th>
                    ))}
                    <th className="border px-2 py-1">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((exceptionEl, rowIndex) => {
                    const parsed = getMappedException(
                      exceptionEl,
                      extendedFieldNames
                    );
                    return (
                      <tr key={rowIndex}>
                        {extendedFields.map((field) => (
                          <td key={field.key} className="border px-2 py-1">
                            {(() => {
                              // Dynamically fetch the value from `parsed` using the field key
                              const value = parsed?.[field.key];

                              if (field.type === "Boolean") {
                                return String(value ? true : false);
                              }

                              return value || ""; // Default to an empty string if value is undefined
                            })()}
                          </td>
                        ))}
                        <td className="border px-2 py-1 space-x-1">
                          <button
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
                          </button>
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
              onChange={(e) => setModalValue(e.target.value)}
            />
          )}
          <div className="flex justify-end mt-4 gap-2">
            <button
              onClick={cancelEdit}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm"
            >
              {t("Cancel")}
            </button>
            <button
              onClick={saveModalChange}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              {t("Save")}
            </button>
          </div>
        </div>

        {extendedFields.length > 0 && (
          <div className="w-1/3 border-l pl-4">
            <h3 className="font-medium mb-2 text-sm">{t("Add New Entry")}</h3>
            {extendedFields.map((field) => (
              <div key={field.key} className="mb-2">
                <label className="block text-xs mb-1">{field.label}</label>
                {field.type == "Boolean" ? (
                  <input
                    type={field.type === "Boolean" ? "checkbox" : "text"}
                    className="w-full border px-2 py-1 text-xs rounded"
                    checked={
                      newRow[field.key] === "true" || newRow[field.key] === true
                    }
                    onChange={(e) => {
                      const checkedVal = e.target.checked ? "true" : "false";
                      setNewRow((prev) => ({
                        ...prev,
                        [field.key]: checkedVal,
                      }));
                    }}
                  />
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
    </div>
  );
};

export default withTranslation()(DynamicPropertyModal);
