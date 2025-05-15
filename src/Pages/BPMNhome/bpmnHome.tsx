import React from "react";
import FileUploadButton from "../../components/Buttons/fileUpload";
import NewDiagram from "../../components/Buttons/newDiagram";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { withTranslation } from "react-i18next";
import Designer from "../../components/Designer";

interface Bpmnhome {
  t: any;
}
const bpmnHome: React.FC<Bpmnhome> = ({ t }) => {
  document.title = "BPMN";
  const { filename } = useSelector((state: RootState) => state.file);
  const { xml, key } = useSelector((state: RootState) => state.process);
  // const { isLoggedIn, userName, loginError, logoutError } = useSelector(
  //   (state: RootState) => state.user
  // );
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

  return (
    <div>
      <NewDiagram />
      <FileUploadButton />

      {xml ? (
        // <BpmnViewer xml={xml} filename={filename} />
        <Designer xml={xml} filename={filename || key} />
      ) : (
        <p style={{ margin: "1rem" }}>{t("BPMNSTATUS")}</p>
      )}
    </div>
  );
};

export default withTranslation()(bpmnHome);
