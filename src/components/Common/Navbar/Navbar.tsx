import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LanguageDropdown from "../TopbarDropdown/LanguageDropdown";
import useLogout from "../../../hooks/useLogout";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Link, useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isActive } from "../../../utils/tools";
import { ThemeOptions } from "../../../CommonData/Enums";

const Navbar = ({ t }: { t: any }) => {
  const logout = useLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userName } = useSelector((state: RootState) => state.user);
  const { icon, theme } = useSelector((state: RootState) => state.appDefs);
  const { name } = useSelector((state: RootState) => state.process);
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout().then(
        (data) => (window.location.href = data?.data?.redirectUrl)
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav
      className={`fixed top-0 h-24 w-full text-white px-6 py-3 ${
        !location?.pathname?.toLowerCase()?.includes("apps-editor")
          ? "bg-gray-800"
          : ""
      } flex items-center justify-between z-50 shadow-md`}
      style={{
        backgroundImage: `linear-gradient(to right, #1f2937, ${[
          location?.pathname?.toLowerCase()?.includes("apps-editor")
            ? ThemeOptions.find((option) => option.id === theme)?.color
            : "#1f2937",
        ]})`,
      }}
    >
      {/* Logo Section with Icon */}
      <div className="flex items-center space-x-2">
        <Link to="/processes">
          {/* Show this logo on small screens */}
          <img
            src="/bankerise-logo.png"
            alt="Bankerise-Studio"
            className="block lg:hidden max-w-10"
          />

          {/* Show this logo on large screens and above */}
          <img
            src="/bankerise-flowable-logo.png"
            alt="Bankerise-Studio"
            className="hidden lg:block max-w-40 xl:max-w-60"
          />
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-6">
        <Link
          to="/processes"
          className="flex flex-col items-center px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <span
            className={`md:text-lg lg:text-xl xl:text-2xl pb-2 ${
              isActive(location, "/processes") ? "border-b-2" : ""
            }`}
          >
            {t("ProcessesNav")}
          </span>
        </Link>

        <span className="text-gray-300 text-2xl">|</span>

        <Link
          to="/decisions"
          className="flex flex-col items-center px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <span
            className={`md:text-lg lg:text-xl xl:text-2xl pb-2 ${
              isActive(location, "/decisions") ? "border-b-2" : ""
            }`}
          >
            {t("DecisionsNav")}
          </span>
        </Link>

        <span className="text-gray-300 text-2xl">|</span>

        <Link
          to="/apps"
          className="flex flex-col items-center px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <span
            className={`md:text-lg lg:text-xl xl:text-2xl pb-2 ${
              isActive(location, "/apps") ? "border-b-2" : ""
            }`}
          >
            {t("AppsNav")}
          </span>
        </Link>
      </div>

      {/* User Profile & Logout */}
      <div className="flex items-center space-x-6 relative">
        {/* App Icon and Name */}
        {location?.pathname?.toLowerCase()?.includes("apps-editor") && (
          <div className="flex items-center max-w-[200px] space-x-2 pr-4 border-r border-white/30">
            {icon && (
              <i className={`${icon} text-[30px] w-10 h-10 object-contain`} />
            )}
            <h2 className="text-ellipsis overflow-hidden whitespace-nowrap text-2xl max-w-[140px]">
              {name}
            </h2>
          </div>
        )}

        {/* User + Dropdown */}
        <div
          className="relative"
          tabIndex={0}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="font-bold mr-2">{userName}</span>
            <FaUserCircle className="text-3xl" />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-200 cursor-pointer"
                onMouseDown={() => (window.location.href = "/processes")}
              >
                {t("Dashboard")}
              </button>
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-200 cursor-pointer"
                onMouseDown={handleLogout}
              >
                {t("Logout")}
              </button>
            </div>
          )}
        </div>

        {/* Language Dropdown */}
        <LanguageDropdown />
      </div>
    </nav>
  );
};

export default withTranslation()(Navbar);
