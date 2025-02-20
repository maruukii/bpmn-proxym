import React from "react";
import LanguageDropdown from "../TopbarDropdown/LanguageDropdown";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-end">
        <LanguageDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
