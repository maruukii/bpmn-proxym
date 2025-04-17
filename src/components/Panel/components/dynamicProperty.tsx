import React, { useEffect, useState } from "react";
import {
  getDynamicProperty,
  updateDynamicProperty,
  removeDynamicProperty,
} from "../../../utils/dynamicPropertyUtil";
import Modeling from "bpmn-js/lib/features/modeling/Modeling";

interface BPMNPropertyPanelProps {
  name: string;
  activeElement: BpmnElement;
  modeling: Modeling;
}

const DynamicProperty: React.FC<BPMNPropertyPanelProps> = ({
  name,
  activeElement,
  modeling,
}) => {
  const [dynamicProperty, setDynamicProperty] = useState("");

  useEffect(() => {
    const property = getDynamicProperty(activeElement, name);
    setDynamicProperty(property || "");
  }, [activeElement, name]);

  const handlePropertyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setDynamicProperty(newValue);

    if (newValue === "") {
      removeDynamicProperty(modeling, activeElement, name);
    } else {
      updateDynamicProperty(modeling, activeElement, name, newValue);
    }
  };

  return (
    <div>
      <label htmlFor={`propertyInput-${name}`}>{name}</label>
      <br />
      <input
        id={`propertyInput-${name}`}
        type="text"
        placeholder={name}
        value={dynamicProperty}
        onChange={handlePropertyChange}
      />
    </div>
  );
};

export default DynamicProperty;
