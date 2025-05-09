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
import ContextPad from "../../components/ContextPad";

interface BpmnEditorProps {
  filename: string | null;
  designer: React.RefObject<HTMLDivElement | null>;
  // propertiesRef: React.RefObject<HTMLDivElement | null>;
  t: any;
}

const BpmnViewer: React.FC<BpmnEditorProps> = ({
  filename,
  designer,
  // propertiesRef,
  t,
}) => {
  const { modeler } = useSelector((state: RootState) => state.modeler);
  const dispatch = useDispatch();

  const moddle = new BpmnModdle();

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState({
    json: false,
    xml: false,
  });
  const [previewData, setPreviewData] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<"xml" | "json" | null>(null);

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

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const commandStack: any = modeler?.get("commandStack");
      if (commandStack.canUndo()) {
        event.preventDefault();
        event.returnValue = ""; // Required for modern browsers to show the prompt
      } else {
        document.title = originalTitle; // Reset the title if no changes
      }
    };

    const updateTitle = () => {
      const commandStack: any = modeler?.get("commandStack");
      if (commandStack?.canUndo()) {
        document.title = `*${originalTitle}`; // Add an asterisk before the title
      } else {
        document.title = originalTitle; // Reset to the original title
      }
    };

    // Store the original title
    const originalTitle = document.title;

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    const interval = setInterval(updateTitle, 100);

    return () => {
      // Cleanup event listeners and interval
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(interval);
      document.title = originalTitle; // Reset the title on component unmount
    };
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
            isPreviewModalOpen.xml
              ? closePreviewModal()
              : (isPreviewModalOpen.json && modeler) || modeler
              ? openXMLPreview({ modeler, openPreviewModal })
              : undefined;
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          📝 {t("Preview as XML")}
        </button>
        <button
          onClick={() => {
            isPreviewModalOpen.json
              ? closePreviewModal()
              : (isPreviewModalOpen.xml && modeler && moddle) ||
                (modeler && moddle)
              ? openJsonPreview({ modeler, moddle, openPreviewModal })
              : undefined;
          }}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md"
        >
          📝 {t("Preview as JSON")}
        </button>
      </div>

      {/* BPMN Editor Container */}
      <div className="flex w-full h-[80vh] border border-gray-300 rounded-lg shadow-md">
        {/* Left Column (1/4 Width, Full Height) */}
        <div className="relative inset-1 w-1/5 h-full border-r border-gray-300 overflow-auto">
          <ContextPad modeler={modeler} />
        </div>

        {/* Right Column (3/4 Width, Full Height) */}
        <div className="flex flex-col w-4/5 h-full">
          {/* BPMN Modeler (3/4 Height) */}
          <div
            ref={designer}
            className="h-3/5 w-full border-b border-gray-300"
          />

          {/* Properties Panel (1/4 Height) */}
          <div className="h-2/5 p-4 bg-gray-100 border-gray-300 rounded-b-lg shadow-md overflow-auto">
            <Property />
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {(isPreviewModalOpen.json || isPreviewModalOpen.xml) && (
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
