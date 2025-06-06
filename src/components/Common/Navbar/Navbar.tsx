import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LanguageDropdown from "../TopbarDropdown/LanguageDropdown";
import useLogout from "../../../hooks/useLogout";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isActive } from "../../../utils/tools";

const Navbar = ({ t }: { t: any }) => {
  const logout = useLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userName } = useSelector((state: RootState) => state.user);
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
    <nav className="fixed top-0 h-24 w-full bg-gray-800 text-white px-6 py-3 flex items-center justify-between z-50 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link to={"/processes"}>
          <img
            src="/bankerise-flowable-logo.png"
            alt="Proxym Bankerise"
            className="md:max-w-30 lg:max-w-40 xl:max-w-60"
          />
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-6">
        <Link
          to={"/processes"}
          className="flex flex-col items-center space-x-0 px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <span
            className={`md:text-lg lg:text-xl xl:text-2xl pb-2 ${
              isActive(location, "/processes") ? "border-b-2" : ""
            }`}
          >
            {t("ProcessesNav")}
          </span>
        </Link>

        <span className="text-gray-500 text-2xl">|</span>
        <Link
          to={"/decisions"}
          className="flex flex-col items-center space-x-0 px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <span
            className={`md:text-lg lg:text-xl xl:text-2xl pb-2 ${
              isActive(location, "/decisions") ? "border-b-2" : ""
            }`}
          >
            {t("DecisionsNav")}
          </span>
        </Link>
        <span className="text-gray-500 text-2xl">|</span>
        <Link
          to={"/apps"}
          className="flex flex-col items-center space-x-0 px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
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

          {/* Dropdown Menu */}
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
