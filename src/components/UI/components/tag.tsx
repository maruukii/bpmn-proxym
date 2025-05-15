import { FC } from "react";

const Tag: FC<{
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ label, icon, className = "", onClick }) => (
  <div
    className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium ${className}`}
    onClick={onClick}
  >
    {icon && <span className="mr-1">{icon}</span>}
    {label}
  </div>
);
export default Tag;
