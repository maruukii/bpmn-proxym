import { useEffect, useCallback, useRef, useState } from "react";
import { Element } from "diagram-js/lib/model/Types";
import BpmnReplaceOptions from "../../utils/BpmnReplaceOptions";
import { isAppendAction } from "../../utils/BpmnDesignerUtils";
import EventEmitter from "../../utils/EventEmitter";
import contextMenuActions from "./contextMenuActions";
import { withTranslation } from "react-i18next";

interface ContextMenuEntry {
  actionName: string;
  className: string;
  label: string;
  target: any;
}

interface Bpmncontextmenu {
  t: any;
}

const BpmnContextMenu: React.FC<Bpmncontextmenu> = ({ t }) => {
  const [showPopover, setShowPopover] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const currentReplaceOptions = useRef<any[]>([]);
  const currentElement = useRef<Element | null>(null);
  const isAppend = useRef(false);
  const contextMenuTitle = useRef("Context Menu");

  const { appendAction, replaceAction } = contextMenuActions();

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

  const initEventCallback = useCallback(
    (event: MouseEvent, element?: Element) => {
      position.current = { x: event.clientX, y: event.clientY };
      currentElement.current = element || null;
      isAppend.current = isAppendAction(element);
      currentReplaceOptions.current = BpmnReplaceOptions(element) || [];
      contextMenuTitle.current = isAppendAction(element)
        ? "Create Element"
        : "Change Element";
      setShowPopover(true);
    },
    []
  );

  const handleClosePopover = () => {
    setShowPopover(false);
  };

  useEffect(() => {
    EventEmitter.on("show-contextmenu", initEventCallback);
    document.body.addEventListener("click", handleClosePopover);

    return () => {
      EventEmitter.removeListener("show-contextmenu", initEventCallback);
      document.body.removeEventListener("click", handleClosePopover);
    };
  }, [initEventCallback]);
  console.log();
  return (
    <div>
      {showPopover && (
        <div
          className="popover"
          style={{
            position: "fixed",
            top: position.current.y,
            left: position.current.x,
            zIndex: 9999,
          }}
        >
          <div className="bpmn-context-menu">
            <div className="context-menu_header">
              {contextMenuTitle.current}
            </div>
            <div className="context-menu_body">
              {currentReplaceOptions.current.map((item) => (
                <div key={item.actionName} className="context-menu_item">
                  <i className={`context-menu_item_icon ${item.className}`}></i>
                  <span onClick={(e) => handleTriggerAction(item, e)}>
                    {t(item.label)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withTranslation()(BpmnContextMenu);
