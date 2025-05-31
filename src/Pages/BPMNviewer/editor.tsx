import { useEffect, useRef, useState } from "react";
import { exportBPMN } from "../../utils/fileExporter";
import { useDispatch, useSelector } from "react-redux";
import { setFileExportSuccess } from "../../store/file/fileSlice";
import { withTranslation } from "react-i18next";
import Property from "../../components/Panel";
import { RootState } from "../../store/store";
import BpmnModdle from "bpmn-moddle";
import PreviewContent from "./previewContent";
import {
  openJsonPreview,
  openXMLPreview,
} from "../../utils/previewContentUtils";
import ContextPad from "../../components/ContextPad";
import ActionButton from "../../components/UI/components/actionButton";
import {
  ArrowUturnLeftIcon, // Undo
  ArrowUturnRightIcon, // Redo
  CloudArrowDownIcon, // Export
  CodeBracketIcon,
  DocumentArrowDownIcon, // Preview as XML
  DocumentTextIcon,
  XCircleIcon, // Preview as JSON
} from "@heroicons/react/24/outline";
import ContextMenu from "../../components/ContextMenu";
import SaveAndDuplicate from "../../components/modals/saveAndDuplicate";
import { clearProcessData } from "../../store/process/processSlice";
import { useNavigate } from "react-router-dom";
import { Actions } from "../../CommonData/Enums";

interface BpmnEditorProps {
  filename: string | null;
  designer: React.RefObject<HTMLDivElement | null>;
  t: any;
}

const BpmnViewer: React.FC<BpmnEditorProps> = ({ filename, designer, t }) => {
  const { modeler } = useSelector((state: RootState) => state.modeler);
  const process = useSelector((state: RootState) => state.process);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moddle = new BpmnModdle();

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState({
    json: false,
    xml: false,
  });
  const commandStack: any = modeler?.get("commandStack");
  const [previewData, setPreviewData] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<"xml" | "json" | null>(null);
  const [saveModal, setSaveModal] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(true);
  useEffect(() => {
    if (!modeler) return;

    const eventBus: any = modeler?.get("eventBus");

    const updateUndoRedoState = () => {
      setCanRedo(commandStack?.canRedo());
      setCanUndo(commandStack?.canUndo());
    };
    eventBus.on("commandStack.changed", updateUndoRedoState);

    return () => {
      eventBus.off("commandStack.changed", updateUndoRedoState);
    };
  }, [modeler]);
  const openPreviewModal = (data: string, type: "xml" | "json") => {
    setPreviewData(data);
    setPreviewType(type);
    setIsPreviewModalOpen({
      json: type === "json",
      xml: type === "xml",
    });
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen({ json: false, xml: false });
    setPreviewData(null);
    setPreviewType(null);
  };

  const undo = () => {
    const commandStack = modeler?.get("commandStack") as { undo: () => void };
    commandStack?.undo();
  };

  const redo = () => {
    const commandStack = modeler?.get("commandStack") as { redo: () => void };
    commandStack?.redo();
  };

  const handleExport = () => {
    try {
      if (!modeler || !filename)
        throw new Error("Modeler or filename not found.");

      exportBPMN(modeler, filename, dispatch);
      dispatch(setFileExportSuccess());
    } catch (error) {
      console.error("Error exporting BPMN:", error);
    }
  };

  // To capture is Saved Changes
  const isSavedRef = useRef(isSaved);

  useEffect(() => {
    isSavedRef.current = isSaved;
  }, [isSaved]);

  useEffect(() => {
    if (!modeler) return;

    const originalTitle = document.title;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const commandStack: any = modeler.get("commandStack");
      if (commandStack.canUndo() && !isSavedRef.current) {
        event.preventDefault();
        event.returnValue = "";
      } else {
        document.title = originalTitle;
      }
    };

    const updateTitle = () => {
      const commandStack: any = modeler.get("commandStack");
      if (commandStack?.canUndo() && !isSavedRef.current) {
        document.title = `*${originalTitle}`;
      } else {
        document.title = originalTitle;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    const interval = setInterval(updateTitle, 100);

    const handleCommandChange = () => {
      setIsSaved(false);
    };
    modeler.on("commandStack.changed", handleCommandChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(interval);
      document.title = originalTitle;
      modeler.off("commandStack.changed", handleCommandChange);
    };
  }, [modeler]);

  const handleClose = () => {
    dispatch(clearProcessData());
    navigate("/processes");
  };

  return (
    <div className="flex flex-col gap-4 ">
      {/* Toolbar */}
      <div className="flex justify-center gap-4 p-2 bg-gray-300 text-white rounded-lg shadow-md">
        <ActionButton
          icon={<DocumentArrowDownIcon className="w-5 h-5" />}
          onClick={() => setSaveModal(true)}
          label={t("Save")}
          disabled={isSaved}
        />
        <ActionButton
          icon={<ArrowUturnLeftIcon className="w-5 h-5" />}
          onClick={undo}
          label={t("Undo")}
          disabled={!canUndo}
        />

        {/* ✅ Redo */}
        <ActionButton
          icon={<ArrowUturnRightIcon className="w-5 h-5" />}
          onClick={redo}
          label={t("Redo")}
          disabled={!canRedo}
        />

        {/* ✅ Export */}
        <ActionButton
          icon={<CloudArrowDownIcon className="w-5 h-5" />}
          onClick={handleExport}
          label={t("Export")}
        />

        {/* ✅ Preview as XML */}
        <ActionButton
          icon={<CodeBracketIcon className="w-5 h-5" />}
          onClick={() => {
            isPreviewModalOpen.xml
              ? closePreviewModal()
              : (isPreviewModalOpen.json && modeler) || modeler
              ? openXMLPreview({ modeler, openPreviewModal })
              : undefined;
          }}
          label={t("Preview as XML")}
        />

        {/* ✅ Preview as JSON */}
        <ActionButton
          icon={<DocumentTextIcon className="w-5 h-5" />}
          onClick={() => {
            isPreviewModalOpen.json
              ? closePreviewModal()
              : (isPreviewModalOpen.xml && modeler && moddle) ||
                (modeler && moddle)
              ? openJsonPreview({ modeler, moddle, openPreviewModal })
              : undefined;
          }}
          label={t("Preview as JSON")}
        />
        <ActionButton
          icon={<XCircleIcon className="w-5 h-5" />}
          onClick={handleClose}
          label={t("Close")}
        />
      </div>

      {/* BPMN Editor Container */}
      <div className="flex w-full h-[80vh] border border-gray-300 rounded-lg shadow-md">
        {/* <div className="relative inset-1 w-1/10 h-full border-r border-gray-300 overflow-auto"> */}
        {/* </div> */}

        <div className="flex flex-col w-full h-full  ">
          <ContextPad modeler={modeler} />
          <ContextMenu modeler={modeler} />
          <div
            ref={designer}
            className="h-full w-full border-b border-gray-300"
          />{" "}
          {/* Properties Panel */}
          <Property />
        </div>
        {/* <div className="flex flex-col w-2/10 h-full ">
          <div className=" p-4 bg-gray-100 border-gray-300 rounded-b-lg shadow-md overflow-auto">
           
          </div>
        </div> */}
      </div>

      {/* Preview Modal */}
      {(isPreviewModalOpen.json || isPreviewModalOpen.xml) && (
        <PreviewContent
          previewType={previewType}
          previewData={previewData}
          closePreviewModal={closePreviewModal}
        />
      )}
      {saveModal && (
        <SaveAndDuplicate
          process={process}
          setModalOpen={setSaveModal}
          action={Actions.SAVE}
          setIsSaved={setIsSaved}
        />
      )}
    </div>
  );
};

export default withTranslation()(BpmnViewer);
