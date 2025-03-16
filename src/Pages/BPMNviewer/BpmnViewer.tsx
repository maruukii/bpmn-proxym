import { useEffect, useRef, useState } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import { exportBPMN } from "../../utils/fileExporter";
import { useDispatch } from "react-redux";
import { setFileExportSuccess } from "../../store/bpm/fileSlice";
import { withTranslation } from "react-i18next";
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from "bpmn-js-properties-panel";

interface BpmnEditorProps {
  xml: string | null;
  filename: string | null;
  t: any;
}

const BpmnEditor: React.FC<BpmnEditorProps> = ({ xml, filename, t }) => {
  const modelerRef = useRef<HTMLDivElement | null>(null);
  const propertiesRef = useRef<HTMLDivElement | null>(null);
  const [modeler, setModeler] = useState<BpmnModeler | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!xml || !modelerRef.current) return;

    const bpmnModeler = new BpmnModeler({
      container: modelerRef.current,
      propertiesPanel: {
        parent: propertiesRef.current,
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
      ],
    });

    bpmnModeler
      .importXML(xml)
      .then(() => {
        const canvas: any = bpmnModeler.get<"canvas">("canvas");
        canvas.zoom("fit-viewport");
        setModeler(bpmnModeler);
      })
      .catch((error) => {
        console.error("Error loading BPMN:", error);
      });
    bpmnModeler.on("commandStack.changed", async () => {
      const fileContent: any = await bpmnModeler.saveXML({ format: true });
      handleBPMNChange(fileContent.xml);
    });
    return () => bpmnModeler.destroy();
  }, [xml]);

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
  const saveBPMNFile = (fileContent: any) => {
    localStorage.setItem("bpmnFileContent", JSON.stringify(fileContent));
    localStorage.setItem("bpmnFileName", JSON.stringify(filename));
  };
  let saveTimeout: any;
  const handleBPMNChange = (updatedContent: string) => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      saveBPMNFile(updatedContent);
    }, 1500);
  };

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
      </div>

      {/* BPMN Editor Container */}
      <div className="flex flex-row w-full h-[80vh] border border-gray-300 rounded-lg shadow-md">
        {/* BPMN Modeler (Right) */}
        <div ref={modelerRef} className="w-3/4 h-full" />
        {/* Properties Panel (Left) */}
        <div
          ref={propertiesRef}
          className="w-1/4 p-4 bg-gray-100 border-r border-gray-300 rounded-l-lg shadow-md overflow-auto"
        >
          <h3 className="text-lg font-bold mb-2">Properties Panel</h3>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(BpmnEditor);
