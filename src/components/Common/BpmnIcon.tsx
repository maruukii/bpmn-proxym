import React from "react";

interface BpmnIconProps {
  name?: string;
  color?: string;
}

const BpmnIcon: React.FC<BpmnIconProps> = ({
  name,
  // color = "#1d1d1f", needs to be svg
}) => {
  return (
    <>
      {/* <svg className="bpmn-icon" aria-hidden="true" width="32" height="32">
        <use xlinkHref={`/src/assets/icons/${name}.svg`} fill={color} />
      </svg> */}
      {name ? (
        <img
          className="bpmn-icon mr-2"
          aria-hidden="true"
          src={`/src/assets/icons/${name}.svg`}
          alt={name}
          width={32}
          height={32}
        />
      ) : undefined}
    </>
  );
};

export default BpmnIcon;
