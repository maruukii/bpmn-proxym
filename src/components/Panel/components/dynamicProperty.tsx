import React, { useEffect, useState } from "react";
import {
  getName,
  getDynamicProperty,
  updateDynamicProperty,
  removeDynamicProperty,
} from "../../../utils/dynamicPropertyUtil";
import type Modeling from "bpmn-js/lib/features/modeling/Modeling";

interface BPMNPropertyPanelProps {
  bpmnName: string;
  displayName: string;
  activeElement: BpmnElement;
  modeling: Modeling;
}

const DynamicProperty: React.FC<BPMNPropertyPanelProps> = ({
  bpmnName,
  displayName,
  activeElement,
  modeling,
}) => {
  const [dynamicProperty, setDynamicProperty] = useState("");

  useEffect(() => {
    const property = getDynamicProperty(activeElement, bpmnName);
    setDynamicProperty(property || "");
  }, [activeElement, bpmnName]);

  const handlePropertyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setDynamicProperty(newValue);

    if (newValue === "") {
      removeDynamicProperty(modeling, activeElement, bpmnName);
    } else {
      updateDynamicProperty(modeling, activeElement, bpmnName, newValue);
    }
  };
  return (
    <div>
      <label htmlFor={`propertyInput-${bpmnName}`}>{displayName}</label>
      <br />
      <input
        id={`propertyInput-${bpmnName}`}
        type="text"
        placeholder={displayName}
        value={dynamicProperty}
        onChange={handlePropertyChange}
      />
    </div>
  );
};

export default DynamicProperty;
