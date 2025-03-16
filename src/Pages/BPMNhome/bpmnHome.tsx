import React, { useState } from "react";
import BpmnViewer from "../BPMNviewer/bpmnViewer";
import FileUploadButton from "../../components/Buttons/fileUploadButton";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  clearFileError,
  clearFileExportSuccess,
  clearFileImportSucess,
} from "../../store/bpm/fileSlice";
import { withTranslation } from "react-i18next";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import { setFileData } from "../../store/bpm/fileSlice";
interface Bpmnhome {
  t: any;
}
const bpmnHome: React.FC<Bpmnhome> = ({ t }) => {
  const dispatch = useDispatch();
  const [xml, setXml] = useState<string | null>(null);
  const { filename, fileExportSuccess, fileImportSuccess, fileError } =
    useSelector((state: RootState) => state.file);
  // Restore the file content and filename from local storage if available
  // const savedXMLContent = localStorage.getItem("bpmnFileContent");
  // const savedXMLFileName = localStorage.getItem("bpmnFileName");
  // savedXMLContent && savedXMLFileName
  //   ? dispatch(
  //       setFileData({
  //         filename: savedXMLFileName,
  //         fileContent: savedXMLContent,
  //       })
  //     )
  //   : null;

  fileError
    ? toast.error(fileError) && dispatch(clearFileError())
    : filename
    ? fileImportSuccess
      ? toast.success(filename + " imported successfully!") &&
        dispatch(clearFileImportSucess())
      : fileExportSuccess
      ? toast.success(filename + " exported successfully!") &&
        dispatch(clearFileExportSuccess())
      : null
    : null;
  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <FileUploadButton setXml={setXml} />

      {xml ? (
        <BpmnViewer xml={xml} filename={filename} />
      ) : (
        <p style={{ margin: "1rem" }}>{t("BPMNSTATUS")}</p>
      )}
    </div>
  );
};

export default withTranslation()(bpmnHome);
