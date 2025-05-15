import React, { useEffect, useState } from "react";
import {
  getDynamicProperty,
  updateDynamicProperty,
  removeDynamicProperty,
} from "../../../utils/dynamicPropertyUtil";
import {
  setDocumentValue,
  getDynamicPropertyDocumentation,
} from "../../../utils/documentationUtil";
import type Modeling from "bpmn-js/lib/features/modeling/Modeling";
import type Modeler from "bpmn-js/lib/Modeler";
import { withTranslation } from "react-i18next";
import extendedProperties from "../../../tasks/extendedProperties.json";
import DynamicPropertyModal from "./DynamicPropertyModal";
import { ModdleElement } from "bpmn-moddle";
import { getValues } from "../../../utils/exceptionElementUtil";
import FormKeyModal from "./formKeyModal";

const DynamicProperty: React.FC<BPMNPropertyPanelProps> = ({
  activeElement,
  modeling,
  modeler,
  tags,
  t,
}) => {
  const [dynamicProperties, setDynamicProperties] = useState<
    Record<string, string | boolean>
  >({});
  const [tableData, setTableData] = useState<ModdleElement[]>([]);

  const [inlineEditingId, setInlineEditingId] = useState<string | null>(null);
  const [modalEditingId, setModalEditingId] = useState<string | null>(null);
  const [modalValue, setModalValue] = useState<string>("");
  const [extendedFields, setExtendedFields] = useState<any[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [formKeyEditing, setFormKeyEditing] = useState(false);
  useEffect(() => {
    if (!activeElement) return;
    const newProps: Record<string, string | boolean> = {};
    tags.forEach((tagItem: any) => {
      tagItem.properties.forEach((prop: any) => {
        const { id } = prop;
        let property: string | boolean | undefined;
        if (id === "documentation") {
          property = getDynamicPropertyDocumentation(activeElement);
          setDocumentValue(activeElement, modeler, modeling, property);
        } else {
          property = getDynamicProperty(activeElement, id);
        }

        newProps[id] = property ?? "";
      });
    });

    setDynamicProperties(newProps);
  }, [activeElement, tags]);

  const handleInlineChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    const newValue = e.target.value;
    setDynamicProperties((prev) => ({ ...prev, [id]: newValue }));
  };

  const saveInlineChange = (id: string) => {
    const newValue = dynamicProperties[id];
    if (newValue === "") {
      removeDynamicProperty(modeling, activeElement, id);
    } else {
      updateDynamicProperty(modeling, activeElement, id, newValue);
    }
    setInlineEditingId(null);
  };

  const openEditor = (id: string, type: string) => {
    if (type === "Boolean" || type === "String" || type === "Select") {
      setInlineEditingId(id);
      return;
    }
    if (type === "Text") {
      setModalValue((dynamicProperties[id] as string) ?? "");
      setCurrentId(id);
    } else if (type === "FormKey") {
      setCurrentId(id);
      setModalValue((dynamicProperties[id] as string) ?? "");
      setFormKeyEditing(true);
      return;
    } else if (id in extendedProperties) {
      const props = (extendedProperties as ExtendedProperties)[id] ?? [];
      setCurrentId(id);
      setExtendedFields(props);
    } else {
      setExtendedFields([]);
    }

    setModalEditingId(id);
  };

  const saveModalChange = () => {
    if ((modalEditingId || formKeyEditing) && currentId) {
      setDynamicProperties((prev) => ({
        ...prev,
        [currentId as string]: modalValue,
      }));
      if (currentId === "documentation") {
        setDocumentValue(activeElement, modeler, modeling, modalValue);
      } else {
        updateDynamicProperty(modeling, activeElement, currentId, modalValue);
      }
    }
    setModalEditingId(null);
    setFormKeyEditing(false);
    setCurrentId(null);
    setModalValue("");
    setExtendedFields([]);
  };

  const cancelEdit = () => {
    setModalEditingId(null);
    setModalValue("");
    setExtendedFields([]);
    setFormKeyEditing(false);
    setCurrentId(null);
  };
  const handleSelectCheckboxChange = (
    name: string,
    value: string | boolean
  ) => {
    setDynamicProperties((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "default") {
      if (value === "false") {
        removeDynamicProperty(modeling, activeElement, name);
        return;
      }
      updateDynamicProperty(modeling, activeElement, name, "");
    }
    if (value === "false") {
      removeDynamicProperty(modeling, activeElement, name);
      return;
    }

    updateDynamicProperty(modeling, activeElement, name, value);
  };

  const allProperties = tags.flatMap((tag: any) => tag.properties);
  // console.log(allProperties[10].options);
  return (
    <div className="grid grid-cols-4 gap-2 text-lg">
      {allProperties.map((prop: any) => {
        const { id, title, type, description } = prop;
        const value = dynamicProperties[id];
        const isEditingInline = inlineEditingId === id;
        const numberOfValues = getValues(activeElement, id).length;

        return (
          <React.Fragment key={id}>
            <label
              htmlFor={`propertyInput-${id}`}
              className="text-right font-medium col-span-1"
              title={t(description)}
            >
              {t(title)}
            </label>

            <div className="col-span-1 cursor-pointer text-gray-700">
              {type === "Boolean" ? (
                <input
                  id={`propertyInput-${id}`}
                  type="checkbox"
                  checked={value === "true" || value === true}
                  onChange={(e) => {
                    const checkedVal = e.target.checked ? "true" : "false";
                    handleSelectCheckboxChange(id, checkedVal);
                  }}
                  className="w-4 h-4"
                />
              ) : isEditingInline ? (
                type === "Select" ? (
                  <select
                    autoFocus
                    id={`propertyInput-${id}`}
                    defaultValue={value as string}
                    onChange={(e) =>
                      handleSelectCheckboxChange(id, e.target.value)
                    }
                    className="border border-gray-300 rounded px-1 py-0.5 w-full text-xs"
                  >
                    {prop?.options.map((option: any) => (
                      <option key={option.value} value={option.id}>
                        {t(option.name)}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    autoFocus
                    type="text"
                    value={value as string}
                    onChange={(e) => handleInlineChange(e, id)}
                    onBlur={() => saveInlineChange(id)}
                    onKeyDown={(e) => e.key === "Enter" && saveInlineChange(id)}
                    className="border border-gray-300 rounded px-1 py-0.5 w-full text-xs truncate"
                  />
                )
              ) : numberOfValues > 0 ? (
                <span onClick={() => openEditor(id, type)}>
                  {`${numberOfValues} value${
                    numberOfValues > 1 ? "s" : ""
                  } set`}
                </span>
              ) : value === "" ? (
                <span
                  onClick={() => openEditor(id, type)}
                  className="text-gray-400 italic cursor-pointer"
                >
                  No Value
                </span>
              ) : (
                <span className="truncate" onClick={() => openEditor(id, type)}>
                  {String(value)}
                </span>
              )}
            </div>
          </React.Fragment>
        );
      })}

      {modalEditingId ? (
        <DynamicPropertyModal
          prop={allProperties.find((p: any) => p.id === modalEditingId) || {}}
          modalValue={modalValue}
          setModalValue={setModalValue}
          saveModalChange={saveModalChange}
          cancelEdit={cancelEdit}
          setTableData={setTableData}
          tableData={tableData}
          extendedFields={extendedFields}
          id={currentId}
        />
      ) : formKeyEditing && currentId ? (
        <FormKeyModal
          prop={allProperties.find((p: any) => p.id === currentId) || {}}
          onCancel={cancelEdit}
          onSave={saveModalChange}
          setModalValue={setModalValue}
          modalValue={modalValue}
          // onSelect={handleSelectCheckboxChange}
        />
      ) : null}
    </div>
  );
};

export default withTranslation()(DynamicProperty);
