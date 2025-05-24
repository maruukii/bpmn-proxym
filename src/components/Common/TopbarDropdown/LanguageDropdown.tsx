import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import i18n from "../../../i18n";
import languagesData from "../../../CommonData/Languages";

type LanguageKey = keyof typeof languagesData;

const languages: Record<LanguageKey, { label: string; flag: string }> =
  languagesData;

const LanguageDropdown: React.FC = () => {
  const [selectLang, setSelectLang] = useState<LanguageKey>("en-US");
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState<number | "auto">("auto");

  useEffect(() => {
    const savedLang =
      (localStorage.getItem("I18N_LANGUAGE") as LanguageKey) || "en-US";
    if (languages[savedLang]) setSelectLang(savedLang);
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      setDropdownWidth(buttonRef.current.offsetWidth);
    }
  }, [isOpen]);

  const changeLanguageAction = (lang: LanguageKey) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("I18N_LANGUAGE", lang);
    setSelectLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        ref={buttonRef}
        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={languages[selectLang].flag}
          alt={languages[selectLang].label}
          className="w-8 h-8 mr-2"
        />
        <FiChevronDown className="ml-2" size={16} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute mt-2 bg-gray-800 text-white border border-gray-300 rounded-md shadow-lg left-0 right-auto z-10"
          style={{ width: dropdownWidth }}
        >
          {Object.entries(languages).map(([key, value]) => (
            <button
              key={key}
              onClick={() => changeLanguageAction(key as LanguageKey)}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-700 focus:outline-none whitespace-nowrap"
            >
              <img
                src={value.flag}
                alt={value.label}
                className="w-6 h-6 mr-2"
              />
              {value.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
