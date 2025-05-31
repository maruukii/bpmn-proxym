import React, { useEffect, useState } from "react";
import FileUploadButton from "../../components/Buttons/fileUpload";
import NewDiagram from "../../components/Buttons/newDiagram";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { withTranslation } from "react-i18next";
import Designer from "../../components/Designer";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { setProcessData, setXml } from "../../store/process/processSlice";
import { Mirage } from "ldrs/react";

interface Bpmnhome {
  t: any;
}
const bpmnHome: React.FC<Bpmnhome> = () => {
  document.title = "Bankerise-Studio";
  const { id } = useParams();
  const dispatch = useDispatch();
  const { filename } = useSelector((state: RootState) => state.file);
  const { xml, name } = useSelector((state: RootState) => state.process);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchXML = async () => {
      if (id) {
        setLoading(true);
        await axiosInstance
          .post(
            `/configuration/modeler/rest/converter/convert-to-bpmn/${id}`,
            {}
          )
          .then(async (data) => {
            dispatch(setXml(data.data));
            setLoading(false);
          });
      }
    };
    const fetchProcess = async () => {
      if (id) {
        await axiosInstance
          .get(`/configuration/modeler/rest/models/${id}`)
          .then((data) => {
            dispatch(setProcessData(data.data));
          });
      }
    };
    fetchProcess();
    fetchXML();
  }, [id]);
  return (
    <div>
      {!xml && (
        <>
          <NewDiagram />
          <FileUploadButton />
        </>
      )}

      {xml && !loading ? (
        // <BpmnViewer xml={xml} filename={filename} />
        <Designer xml={xml} filename={filename || name} />
      ) : (
        <Mirage size="60" speed="2.5" color="black" />
      )}
    </div>
  );
};

export default withTranslation()(bpmnHome);
