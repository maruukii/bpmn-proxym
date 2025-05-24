import { FC } from "react";

const ActionButton: FC<{
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ icon, label, onClick, disabled }) => {
  return (
    <button
      className={`flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 ${
        !disabled
          ? "hover:bg-gray-100 cursor-pointer"
          : "cursor-not-allowed bg-red-100"
      }  rounded border `}
      title={label}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
};
export default ActionButton;
