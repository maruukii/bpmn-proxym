import { useEffect, useRef, useState } from "react";
import { Element } from "diagram-js/lib/model/Types";
import BpmnReplaceOptions from "../../utils/bpmnReplaceOptions";
import { isAppendAction } from "../../utils/bpmnDesignerUtils";
import contextMenuElements from "../../tasks/contextMenu.json";
import useBpmnActions from "./contextMenuActions";
import { withTranslation } from "react-i18next";
import {
  PencilIcon, // Modify
  PlusCircleIcon, // Create
} from "@heroicons/react/24/outline";

interface ContextMenuEntry {
  actionName: string;
  className: string;
  label: string;
  target: any;
}

interface BpmnContextMenuProps {
  t: any;
  modeler: any;
}

const BpmnContextMenu: React.FC<BpmnContextMenuProps> = ({ t, modeler }) => {
  const [showPopover, setShowPopover] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const currentReplaceOptions = useRef<any[]>([]);
  const currentElement = useRef<Element | null>(null);
  const isAppend = useRef(false);
  const contextMenuTitle = useRef("Context Menu");

  const { appendAction, replaceAction } = useBpmnActions();

  const handleTriggerAction = (
    entry: ContextMenuEntry,
    event: React.MouseEvent
  ) => {
    try {
      if (isAppend.current) {
        appendAction(entry.target, event.nativeEvent);
      } else {
        replaceAction(entry.target, currentElement.current);
      }
      setShowPopover(false);
    } catch (error) {
      console.error(error);
    }
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modeler) {
      console.error("Modeler is not available");
      return;
    }

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();

      const elementRegistry = modeler.get("elementRegistry");
      const targetElement = event.target as HTMLElement;
      const element = elementRegistry.get(
        targetElement.closest(".djs-element")
      );

      position.current = { x: event.clientX, y: event.clientY };
      currentElement.current = element;

      if (element) {
        isAppend.current = false;
        currentReplaceOptions.current = BpmnReplaceOptions(element) || [];
        contextMenuTitle.current = "Modify Element";
      } else {
        isAppend.current = true;
        currentReplaceOptions.current = contextMenuElements?.elements;
        contextMenuTitle.current = "Create Element";
      }

      setShowPopover(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowPopover(false);
      }
    };

    const canvasContainer = modeler.get("canvas").getContainer();
    canvasContainer.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClickOutside);

    return () => {
      canvasContainer.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modeler]);
  return (
    <div>
      {showPopover && (
        <div
          className="absolute bg-white shadow-lg rounded-md p-2"
          style={{
            position: "fixed",
            top: position.current.y,
            left: position.current.x,
            zIndex: 9999,
          }}
          ref={menuRef}
        >
          <div className="font-bold flex flex-row text-gray-700 text-xl gap-2">
            {contextMenuTitle.current === "Create Element" ? (
              <PlusCircleIcon className="w-7 h-7" />
            ) : (
              <PencilIcon className="w-7 h-7" />
            )}
            {contextMenuTitle.current}
          </div>
          <div className="mt-2">
            {currentReplaceOptions.current.map((item) => (
              <div
                key={item.actionName}
                className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                onClick={(e) => handleTriggerAction(item, e)}
                title={t(item?.description)}
              >
                <i
                  className={`context-menu_item_icon ${item?.className} text-xl`}
                ></i>

                <span>{t(item.label)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default withTranslation()(BpmnContextMenu);
