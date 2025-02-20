import { useEffect, useRef, useState } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import { exportBPMN } from "../../utils/fileExporter";
import { addTask } from "../../utils/taskCreation";
import { useDispatch } from "react-redux";
import { setFileExportSuccess } from "../../store/bpm/fileSlice";
import { withTranslation } from "react-i18next";

interface BpmnEditorProps {
  xml: string | null;
  filename: string | null;
  t: any;
}

const BpmnEditor: React.FC<BpmnEditorProps> = ({ xml, filename, t }) => {
  const modelerRef = useRef<HTMLDivElement | null>(null);
  const [modeler, setModeler] = useState<BpmnModeler | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!xml || !modelerRef.current) return;
    const bpmnModeler = new BpmnModeler({ container: modelerRef.current });

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

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Toolbar */}
      <div className="flex justify-center gap-4 p-2 bg-gray-800 text-white rounded-lg shadow-md">
        {/* <button
          onClick={() => addTask(modeler)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          ➕ Add Task
        </button> */}
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

      {/* BPMN Modeler Container */}
      <div
        ref={modelerRef}
        className="w-full h-[70vh] border border-gray-300 rounded-lg shadow-md"
      />
    </div>
  );
};

export default withTranslation()(BpmnEditor);
