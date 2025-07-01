import { withTranslation } from "react-i18next";
import CRUD from "./CRUD";
import { useState } from "react";
import { Actions } from "../../../CommonData/Enums";

export const SingleElement: React.FC<SingleElementMetadata> = ({
  element,
  setChanged,
  changed,
  t,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-60 mx-auto bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
        title={t(element.title)}
        onClick={() => setOpen(true)}
      >
        <div className="relative h-70 bg-gray-200">
          <div className="absolute inset-2 flex items-center justify-center">
            {typeof element.icon === "object" && element.icon?.ImageLink ? (
              <img
                src={element.icon.ImageLink}
                alt="Thumbnail"
                className={`w-${element.height} h-${element.height}`}
              />
            ) : typeof element.icon === "string" ? (
              <img
                src={"/icons/" + element.icon}
                alt="Thumbnail"
                className="w-10 h-10"
              />
            ) : null}
          </div>
        </div>

        <div className="metadata-container absolute bottom-0 left-0 right-0 px-4 py-2 bg-white z-20 opacity-90 transition-all duration-300 ease-in-out group-hover:h-[160px] h-[115px] overflow-hidden">
          <div className="text-xl font-semibold text-gray-800 truncate">
            {t(element.title)}
          </div>
          <div className="text-sm text-gray-500 mt-1">{t(element.groups)}</div>
          <div className="text-sm text-gray-500 mt-1">
            {t(element.description || "")}
          </div>
        </div>
      </div>

      {open && (
        <CRUD
          activeTab="elements"
          element={element}
          onClose={() => {
            setOpen(false);
            setChanged(!changed);
          }}
          action={Actions.MODIFY}
        />
      )}
    </>
  );
};

export default withTranslation()(SingleElement);
