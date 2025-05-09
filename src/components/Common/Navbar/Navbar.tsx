import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // ✅ Import user icon
import LanguageDropdown from "../TopbarDropdown/LanguageDropdown";
import useLogout from "../../../hooks/useLogout";
import { axiosInstance } from "../../../config/axiosInstance";

const Navbar: React.FC = () => {
  const logout = useLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean | null>(false);
  const [connectedUser, setConnectedUser] = useState<string | null>(null);
  useEffect(() => {
    const isConnected = async () => {
      try {
        const response = await axiosInstance.get(
          import.meta.env.VITE_CONNECTED_USER
        );
        setConnectedUser(response?.data?.userApp?.user?.name);
      } catch (error) {
        console.error(error);
        setConnectedUser(null);
      }
    };

    isConnected();
  }, []);

  const handleLogout = async () => {
    logout();
    window.location.href = "/landingpage";
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-end items-center space-x-6 relative">
        {/* ✅ User Icon & Name */}
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="font-bold mr-2">{connectedUser}</span>
            <FaUserCircle className="text-3xl" />
          </div>

          {/* ✅ Dropdown Menu (Positioned Below User Icon) */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                onClick={() => alert("Go to Profile")}
              >
                Profile
              </button>
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* ✅ Language Dropdown */}
        <LanguageDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
