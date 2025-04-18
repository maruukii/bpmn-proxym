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

interface BPMNPropertyPanelProps {
  bpmnName: string;
  displayName: string;
  inputType: string;
  activeElement: BpmnElement;
  modeling: Modeling;
  modeler: Modeler;
}

const DynamicProperty: React.FC<BPMNPropertyPanelProps> = ({
  bpmnName,
  displayName,
  inputType,
  activeElement,
  modeling,
  modeler,
}) => {
  const [dynamicProperty, setDynamicProperty] = useState<string | boolean>("");

  useEffect(() => {
    if (!activeElement) return;
    var property: string | boolean | undefined;
    if (bpmnName === "documentation") {
      property = getDynamicPropertyDocumentation(activeElement);
      console.log(property);
      setDocumentValue(activeElement, modeler, modeling, property);
    } else {
      property = getDynamicProperty(activeElement, bpmnName, displayName);
    }
    setDynamicProperty(property || "");
  }, [activeElement, bpmnName]);

  const handlePropertyChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.type === "checkbox" && event.target instanceof HTMLInputElement) {
      setDynamicProperty(event.target.checked ? "true" : "false");
    } else if (event.target.tagName === "TEXTAREA") {
      setDocumentValue(activeElement, modeler, modeling, event.target.value);
      setDynamicProperty(event.target.value);
    } else {
      const newValue = event.target.value;
      setDynamicProperty(newValue);

      if (newValue === "") {
        removeDynamicProperty(modeling, activeElement, bpmnName);
      } else {
        updateDynamicProperty(modeling, activeElement, bpmnName, newValue);
      }
    }
  };
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-2 py-2 items-center">
      <label
        htmlFor={`propertyInput-${bpmnName}`}
        className="text-sm font-semibold"
      >
        {displayName}
      </label>

      {inputType === "Boolean" ? (
        <input
          className="form-check-input w-5 h-5"
          id={`propertyInput-${bpmnName}`}
          type="checkbox"
          checked={dynamicProperty === true}
          onChange={handlePropertyChange}
        />
      ) : bpmnName === "documentation" ? (
        <textarea
          className="text-sm font-light border border-gray-300 rounded px-2 py-1"
          id={`propertyInput-${bpmnName}`}
          placeholder={displayName}
          value={dynamicProperty as string}
          onChange={handlePropertyChange}
          rows={2}
        />
      ) : (
        <input
          className="text-sm font-light border border-gray-300 rounded px-2 py-1"
          id={`propertyInput-${bpmnName}`}
          type="text"
          placeholder={displayName}
          value={dynamicProperty as string}
          onChange={handlePropertyChange}
        />
      )}
    </div>
  );
};

export default DynamicProperty;
