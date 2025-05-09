import React, { useState } from "react";
import FileUploadButton from "../../components/Buttons/fileUpload";
import NewDiagram from "../../components/Buttons/newDiagram";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  clearFileError,
  clearFileExportSuccess,
  clearFileImportSucess,
  clearFileContentCopySuccess,
  clearNewDiagramCreationSuccess,
} from "../../store/file/fileSlice";
import { withTranslation } from "react-i18next";
import Designer from "../../components/Designer";
import { clearLoginError, clearLogoutError } from "../../store/user/userSlice";

interface Bpmnhome {
  t: any;
}
const bpmnHome: React.FC<Bpmnhome> = ({ t }) => {
  document.title = "BPMN";
  const dispatch = useDispatch();
  const [xml, setXml] = useState<string | null>(null);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const {
    filename,
    fileExportSuccess,
    fileImportSuccess,
    fileContentCopySuccess,
    fileError,
    newDiagramCreationSuccess,
  } = useSelector((state: RootState) => state.file);
  const { isLoggedIn, userName, loginError, logoutError } = useSelector(
    (state: RootState) => state.user
  );
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
      ? toast.success(filename + t("BPMNIMPORTSUCCESS")) &&
        dispatch(clearFileImportSucess())
      : newDiagramCreationSuccess
      ? toast.success(filename + t("BPMNCREATESUCCESS")) &&
        dispatch(clearNewDiagramCreationSuccess())
      : fileExportSuccess
      ? toast.success(filename + t("BPMNEXPORTSUCCESS")) &&
        dispatch(clearFileExportSuccess())
      : fileContentCopySuccess
      ? toast.success(filename + t("BPMNCOPYSUCCESS")) &&
        dispatch(clearFileContentCopySuccess())
      : null
    : isLoggedIn
    ? toast.success(userName + t("CONNECTSUCCESS"))
    : loginError
    ? toast.error(loginError) && dispatch(clearLoginError())
    : loginError
    ? toast.error(logoutError) && dispatch(clearLogoutError())
    : null;
  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <NewDiagram
        setXml={setXml}
        setModelOpen={setModelOpen}
        modelOpen={modelOpen}
      />
      <FileUploadButton setXml={setXml} />

      {xml ? (
        // <BpmnViewer xml={xml} filename={filename} />
        <Designer xml={xml} filename={filename} />
      ) : (
        <p style={{ margin: "1rem" }}>{t("BPMNSTATUS")}</p>
      )}
    </div>
  );
};

export default withTranslation()(bpmnHome);
