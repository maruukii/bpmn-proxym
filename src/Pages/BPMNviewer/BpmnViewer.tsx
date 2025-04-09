import { useEffect, useRef, useState } from "react";

import { exportBPMN } from "../../utils/fileExporter";
import { useDispatch, useSelector } from "react-redux";
import { setFileExportSuccess } from "../../store/file/fileSlice";
import { withTranslation } from "react-i18next";

import { RootState } from "../../store/store";
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
  // const saveBPMNFile = (fileContent: any) => {
  //   localStorage.setItem("bpmnFileContent", JSON.stringify(fileContent));
  //   localStorage.setItem("bpmnFileName", JSON.stringify(filename));
  // };
  // let saveTimeout: any;
  // const handleBPMNChange = (updatedContent: string) => {
  //   clearTimeout(saveTimeout);
  //   saveTimeout = setTimeout(() => {
  //     saveBPMNFile(updatedContent);
  //   }, 1500);
  // };

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
        <div ref={designer} className="w-3/4 h-full" />
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

export default withTranslation()(BpmnViewer);
