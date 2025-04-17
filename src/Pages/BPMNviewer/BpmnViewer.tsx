import { useEffect, useState } from "react";
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

interface BpmnEditorProps {
  filename: string | null;
  designer: React.RefObject<HTMLDivElement | null>;
  propertiesRef: React.RefObject<HTMLDivElement | null>;
  t: any;
}

const BpmnViewer: React.FC<BpmnEditorProps> = ({
  filename,
  designer,
  propertiesRef,
  t,
}) => {
  const { modeler } = useSelector((state: RootState) => state.modeler);
  const dispatch = useDispatch();

  const moddle = new BpmnModdle();

  // State to handle the preview modal visibility
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewData, setPreviewData] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<"xml" | "json" | null>(null);

  const openPreviewModal = (data: string, type: "xml" | "json") => {
    setPreviewData(data);
    setPreviewType(type);
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
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

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const commandStack: any = modeler?.get("commandStack");
      if (commandStack.canUndo()) {
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [modeler]);
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Toolbar */}
      <div className="flex justify-center gap-4 p-2 bg-gray-800 text-white rounded-lg shadow-md">
        <button
          onClick={undo}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-md"
        >
          ↩️ {t("Undo")}
        </button>
        <button
          onClick={redo}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md"
        >
          ↪️ {t("Redo")}
        </button>
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md"
        >
          💾 {t("Export")}
        </button>
        <button
          onClick={() => {
            isPreviewModalOpen
              ? closePreviewModal()
              : modeler
              ? openXMLPreview({ modeler, openPreviewModal })
              : undefined;
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          📝 {t("Preview as XML")}
        </button>
        <button
          onClick={() => {
            isPreviewModalOpen
              ? closePreviewModal()
              : modeler && moddle
              ? openJsonPreview({ modeler, moddle, openPreviewModal })
              : undefined;
          }}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md"
        >
          📝 {t("Preview as JSON")}
        </button>
      </div>

      {/* BPMN Editor Container */}
      <div className="flex flex-row w-full h-[80vh] border border-gray-300 rounded-lg shadow-md">
        {/* BPMN Modeler (Right) */}
        <div ref={designer} className="w-3/4 h-full" />
        {/* Properties Panel (Left) */}
        <div
          ref={propertiesRef}
          className="w-1/4 p-4 bg-gray-100 border-r border-gray-300 rounded-l-lg shadow-md overflow-auto"
        >
          <Property />
          <h3 className="text-lg font-bold mb-2">Properties Panel</h3>
        </div>
      </div>

      {/* Preview Modal */}
      {isPreviewModalOpen && (
        <PreviewContent
          previewType={previewType}
          previewData={previewData}
          closePreviewModal={closePreviewModal}
        />
      )}
    </div>
  );
};

export default withTranslation()(BpmnViewer);
