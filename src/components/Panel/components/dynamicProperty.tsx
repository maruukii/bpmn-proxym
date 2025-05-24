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

import { withTranslation } from "react-i18next";
import extendedProperties from "../../../tasks/extendedProperties.json";
import DynamicPropertyModal from "./DynamicPropertyModal";
import { ModdleElement } from "bpmn-moddle";
import { getValues } from "../../../utils/exceptionElementUtil";
import FormKeyModal from "./formKeyModal";
import ApplicationModal from "./applicationModal";
import AssignmentModal from "./assignmentModal";
import { useApplicationsQuery } from "../../../hooks/queries/useApplicationsQuery";

const DynamicProperty: React.FC<BPMNPropertyPanelProps> = ({
  activeElement,
  modeling,
  modeler,
  tags,
  t,
}) => {
  const [dynamicProperties, setDynamicProperties] = useState<
    Record<string, string | boolean | Assignees>
  >({});
  const [tableData, setTableData] = useState<ModdleElement[]>([]);

  const [inlineEditingId, setInlineEditingId] = useState<string | null>(null);
  const [modalEditingId, setModalEditingId] = useState<string | null>(null);
  const [modalValue, setModalValue] = useState<string>("");
  const [extendedFields, setExtendedFields] = useState<any[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [formKeyEditing, setFormKeyEditing] = useState(false);
  const [applicationEditing, setApplicationEditing] = useState(false);
  const [assignmentEditing, setAssignmentEditing] = useState(false);
  const [assigneeValues, setAssigneeValues] = useState<Assignees>();
  const [audience, setAudience] = useState<string | undefined>();
  const { data } = useApplicationsQuery();

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
        if (id === "category") {
          const application = data?.find((item: any) => item.name === property);
          if (application) setAudience(application?.audience);
        } else if (id === "assignee") {
          const assignee = getDynamicProperty(activeElement, "assignee");
          const candidateUsers = getDynamicProperty(
            activeElement,
            "candidateUsers"
          );
          const candidateGroups = getDynamicProperty(
            activeElement,
            "candidateGroups"
          );

          const assigneeValues = {
            assignmentType: "bankerise-groups",
            assignee: (assignee as string) || undefined,
            candidateUsers: (candidateUsers as string) || undefined,
            candidateGroups: (candidateGroups as string) || undefined,
          };

          setAssigneeValues(assigneeValues);
          newProps[id] = [
            assigneeValues?.assignee
              ? `Assignee ${assigneeValues.assignee}`
              : "",
            assigneeValues?.candidateUsers &&
            assigneeValues.candidateUsers.split(",").length > 0
              ? `${
                  assigneeValues.candidateUsers.split(",").length
                } Candidate user${
                  assigneeValues.candidateUsers.split(",").length > 1 ? "s" : ""
                }`
              : "",
            assigneeValues?.candidateGroups &&
            assigneeValues.candidateGroups.split(",").length > 0
              ? `${
                  assigneeValues.candidateGroups.split(",").length
                } Candidate group${
                  assigneeValues.candidateGroups.split(",").length > 1
                    ? "s"
                    : ""
                }`
              : "",
          ]
            .filter(Boolean)
            .join(" ");
          return;
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
      updateDynamicProperty(
        modeling,
        activeElement,
        id,
        newValue as string | boolean
      );
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
    } else if (type === "Application") {
      setCurrentId(id);
      setModalValue((dynamicProperties[id] as string) ?? "");
      setApplicationEditing(true);
      return;
    } else if (type === "Assignment") {
      setCurrentId(id);
      setModalValue((dynamicProperties[id] as string) ?? "");
      setAssignmentEditing(true);
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
    if ((modalEditingId || formKeyEditing || applicationEditing) && currentId) {
      setDynamicProperties((prev) => ({
        ...prev,
        [currentId as string]: modalValue,
      }));
      if (applicationEditing) {
        const application = data?.find((item: any) => item.name === modalValue);
        if (application) setAudience(application?.audience);
      }
      if (currentId === "documentation") {
        setDocumentValue(activeElement, modeler, modeling, modalValue);
      } else {
        if (!modalValue) {
          removeDynamicProperty(modeling, activeElement, currentId);
        } else {
          updateDynamicProperty(modeling, activeElement, currentId, modalValue);
        }
      }
    }
    setModalEditingId(null);
    setFormKeyEditing(false);
    setApplicationEditing(false);
    setAssignmentEditing(false);
    setCurrentId(null);
    setModalValue("");
    setExtendedFields([]);
  };
  const handleAssignments = (assigneeValues: Assignees) => {
    if (assignmentEditing && currentId && assigneeValues) {
      setDynamicProperties((prev) => ({
        ...prev,
        [currentId as string]: [
          assigneeValues?.assignee ? `Assignee ${assigneeValues.assignee}` : "",
          assigneeValues?.candidateUsers &&
          assigneeValues.candidateUsers.split(",").length > 0
            ? `${
                assigneeValues.candidateUsers.split(",").length
              } Candidate user${
                assigneeValues.candidateUsers.split(",").length > 1 ? "s" : ""
              }`
            : "",
          assigneeValues?.candidateGroups &&
          assigneeValues.candidateGroups.split(",").length > 0
            ? `${
                assigneeValues.candidateGroups.split(",").length
              } Candidate group${
                assigneeValues.candidateGroups.split(",").length > 1 ? "s" : ""
              }`
            : "",
        ]
          .filter(Boolean)
          .join(" "),
      }));
      if (
        !assigneeValues?.assignee ||
        !assigneeValues?.candidateGroups ||
        !assigneeValues?.candidateUsers
      ) {
        !assigneeValues?.assignee &&
          removeDynamicProperty(modeling, activeElement, "assignee");
        !assigneeValues?.candidateUsers &&
          removeDynamicProperty(modeling, activeElement, "candidateUsers");
        !assigneeValues?.candidateGroups &&
          removeDynamicProperty(modeling, activeElement, "candidateGroups");
      }
      if (
        assigneeValues.assignmentType === "fixed" ||
        assigneeValues.assignmentType === "bankerise-groups" ||
        assigneeValues.assignmentType === "identity"
      ) {
        assigneeValues?.candidateGroups &&
          updateDynamicProperty(
            modeling,
            activeElement,
            "candidateGroups",
            assigneeValues.candidateGroups
          );
        assigneeValues?.candidateUsers &&
          updateDynamicProperty(
            modeling,
            activeElement,
            "candidateUsers",
            assigneeValues.candidateUsers
          );
        assigneeValues?.assignee &&
          updateDynamicProperty(
            modeling,
            activeElement,
            "assignee",
            assigneeValues.assignee
          );
      }
    }
    setAssignmentEditing(false);
    setCurrentId(null);
    setAssigneeValues(assigneeValues);
  };

  const cancelEdit = () => {
    setModalEditingId(null);
    setModalValue("");
    setExtendedFields([]);
    setFormKeyEditing(false);
    setAssignmentEditing(false);
    setApplicationEditing(false);
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
  return (
    <div className="grid grid-cols-2 gap-3 text-md">
      {allProperties.map((prop: any) => {
        const { id, title, type, description } = prop;
        const value = dynamicProperties[id];
        const isEditingInline = inlineEditingId === id;
        const numberOfValues = getValues(activeElement, id).length;

        return (
          <React.Fragment key={id}>
            <label
              htmlFor={`propertyInput-${id}`}
              className="text-left font-bold text-sm col-span-1"
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
                    className="border border-gray-300 rounded px-1 py-0.5 w-full text-md truncate"
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
              ) : audience && type === "Application" ? (
                <span className=" text-md" onClick={() => openEditor(id, type)}>
                  {String(value)}
                  <span className="bg-gray-600 text-white text-sm px-1 py-0 rounded ml-1">
                    {audience || ""}
                  </span>
                </span>
              ) : (
                <span className=" text-md" onClick={() => openEditor(id, type)}>
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
      ) : currentId && applicationEditing ? (
        <ApplicationModal
          prop={allProperties.find((p: any) => p.id === currentId) || {}}
          onCancel={cancelEdit}
          onSave={saveModalChange}
          setModalValue={setModalValue}
          modalValue={modalValue}
        />
      ) : currentId && assignmentEditing ? (
        <AssignmentModal
          prop={allProperties.find((p: any) => p.id === currentId) || {}}
          onCancel={cancelEdit}
          onSave={handleAssignments}
          modalValue={assigneeValues}
          audience={audience}
        />
      ) : null}
    </div>
  );
};

export default withTranslation()(DynamicProperty);
