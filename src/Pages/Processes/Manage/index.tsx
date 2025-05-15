import { FC, useEffect, useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  TagIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { formatTimestamp } from "../../../utils/tools";
import Tag from "../../../components/UI/components/tag";
import ActionButton from "../../../components/UI/components/actionButton";
import { axiosInstance } from "../../../config/axiosInstance";
import SaveAndDuplicate from "../../../components/modals/saveAndDuplicate";
import Delete from "../../../components/modals/delete";
import { useNavigate, useParams } from "react-router-dom";
import { Mirage } from "ldrs/react";
import { fetchThumbnail } from "../../../hooks/useFetchThumbnail";
import History from "./history";
import BpmnReadOnly from "./bpmnReadOnly";
import { ProcessMetadata } from "../../../../types/apis/bpmn-process";
import { setProcessData, setXml } from "../../../store/process/processSlice";
import { downloadBPMN } from "../../../utils/fileExporter";

const Manage: FC<any> = ({ t }) => {
  // const {
  //   id,
  //   name,
  //   createdBy,
  //   version,
  //   lastUpdated,
  //   description,
  //   lastUpdatedBy,
  //   key,
  // } = useSelector((state: RootState) => state.process);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [newVersionModalOpen, setNewVersionModalOpen] =
    useState<boolean>(false);
  const [DuplicateModalOpen, setDuplicateModalOpen] = useState<boolean>(false);
  const [historyData, setHistoryData] = useState<ProcessMetadata[]>([]);
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);
  const [process, setProcess] = useState<ProcessMetadata>();

  // const [duplicate, setDuplicate] = useState<DuplicateModel>({
  //   id: process?.id,
  //   name: process?.name,
  //   key: process?.key,
  //   description: process?.description,
  //   modelType: process?.modelType,
  // });
  const [loading, setLoading] = useState<boolean>(false);
  const { xml } = useSelector((state: RootState) => state.process);
  // const [xml, setXml] = useState<string | null>(null);
  const { lastVersionId, oldVersionId } = useParams();
  useEffect(() => {
    // let isMounted = true;
    const loadProcess = async () => {
      try {
        if (lastVersionId) {
          if (oldVersionId) {
            await axiosInstance
              .get(
                `/configuration/modeler/rest/models/${lastVersionId}/history/${oldVersionId}`
              )
              .then(async (data) => {
                setProcess(data.data);
                await axiosInstance.get(
                  `/configuration/modeler/rest/models/${lastVersionId}/history/${oldVersionId}/model-json`
                );
              });
          } else {
            await axiosInstance
              .get(`/configuration/modeler/rest/models/${lastVersionId}`)
              .then((data) => setProcess(data.data));
          }
        }
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
    // const loadThumbnail = async () => {
    //   if (id) {
    //     setThumbnail(null);
    //     const imageUrl = await fetchThumbnail(id);
    //     if (isMounted) {
    //       setThumbnail(imageUrl);
    //     }
    //   }
    // };
    const loadHistory = async () => {
      try {
        if (lastVersionId) {
          const response = await axiosInstance.get(
            `/configuration/modeler/rest/models/${lastVersionId}/history?from=0&includeLatestVersion=true&size=10`
          );
          setHistoryData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
    loadProcess();
    loadHistory();
    // loadThumbnail();

    // return () => {
    //   // isMounted = false;
    //   if (thumbnail) {
    //     URL.revokeObjectURL(thumbnail);
    //   }
    // };
  }, [lastVersionId, oldVersionId]);
  useEffect(() => {
    const fetchXML = async () => {
      if (lastVersionId) {
        setLoading(false);
        oldVersionId
          ? await axiosInstance
              .post(
                `/configuration/modeler/rest/converter/convert-to-bpmn/${oldVersionId}`,
                {}
              )
              .then(async (data) => {
                dispatch(setXml(data.data));
                setLoading(true);
                // await axiosInstance.post(
                //   "/configuration/modeler/rest/converter/convert-to-json",
                //   {
                //     value: data.data,
                //   }
                // );
              })
          : await axiosInstance
              .post(
                `/configuration/modeler/rest/converter/convert-to-bpmn/${lastVersionId}`,
                {}
              )
              .then(async (data) => {
                dispatch(setXml(data.data));
                setLoading(true);
              });
      }
      // .then((data) => console.log(data));
    };
    fetchXML();
  }, [oldVersionId, lastVersionId]);

  const handleDownload = async () => {
    if (process) await downloadBPMN(process?.id, process?.name);
  };

  //   const  handleSetNewVersion=()=> {
  // if(oldVersionId&&lastVersionId)
  //   }

  return (
    <div className="flex flex-col gap-6 p-6 ">
      {/* Top Section */}
      <div className="flex justify-between items-start border-b pb-4">
        {/* Left: Name and Version */}
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-semibold flex items-center gap-2">
            <span>{process?.name}</span>
            <span className="text-gray-500">|</span>
            <Tag
              className="bg-blue-100 text-blue-700"
              label={process?.version?.toString()}
              icon={<TagIcon className="w-4 h-4" />}
            />
          </div>
          <div className="flex flex-col text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <KeyIcon className="w-4 h-4" />
              <span> {process?.key}</span>
            </div>
            <div className="flex items-center gap-1">
              <UserIcon className="w-4 h-4" />
              <span>Created by {process?.createdBy}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              <span>
                Last updated by {process?.lastUpdatedBy} {" - "}
                {process?.lastUpdated
                  ? formatTimestamp(
                      process?.lastUpdated,
                      localStorage.getItem("I18N_LANGUAGE") || "en_US"
                    )
                  : undefined}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {!oldVersionId ? (
            <ActionButton
              icon={<EyeIcon className="w-5 h-5" />}
              label={t("Visual Editor")}
              onClick={() => {
                dispatch(setProcessData(process));
                navigate("/");
              }}
            />
          ) : (
            <ActionButton
              icon={<TagIcon className="w-5 h-5" />}
              label={t("Use as new version")}
              onClick={() => setNewVersionModalOpen(true)}
            />
          )}
          <ActionButton
            icon={<ArrowDownTrayIcon className="w-5 h-5" />}
            label={t("Download")}
            onClick={handleDownload}
          />

          <ActionButton
            icon={<TrashIcon className="w-5 h-5" />}
            label={t("Delete")}
            onClick={() => setDeleteModalOpen(true)}
            disabled={oldVersionId ? true : false}
          />
          <ActionButton
            icon={<DocumentDuplicateIcon className="w-5 h-5" />}
            label={t("Duplicate")}
            onClick={() => setDuplicateModalOpen(true)}
            disabled={oldVersionId ? true : false}
          />
          <ActionButton
            icon={<PencilIcon className="w-5 h-5" />}
            label={t("Modify")}
            disabled={oldVersionId ? true : false}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        {/* ✅ Description with ellipsis and hover title */}
        <div
          className="text-sm text-gray-700 max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap"
          title={process?.description}
        >
          <span className="font-bold">Description: </span>
          <span className="font-medium">{process?.description}</span>
        </div>

        {/* ✅ Comment (only if exists) */}
        {process?.comment && (
          <div
            className="text-sm text-gray-700 max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap"
            title={process?.comment}
          >
            <span className="font-bold">Comment: </span>
            <span className="font-medium">{process?.comment}</span>
          </div>
        )}

        {/* ✅ History Tag */}
        <div className="flex items-center gap-2 text-sm text-blue-600 relative">
          <Tag
            className="bg-blue-100 text-blue-700 cursor-pointer"
            label={`History ${historyData[0] ? historyData[0]?.version : ""}`}
            icon={<ClockIcon className="w-5 h-5" />}
            onClick={() => setHistoryOpen(true)}
          />

          {historyOpen && (
            <div className="absolute top-full -left-25 mt-2">
              <History
                history={historyData}
                setHistoryOpen={setHistoryOpen}
                navigate={navigate}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow w-full h-full flex items-center justify-center overflow-auto">
        {xml && loading ? (
          <div className="w-full h-full max-w-[90vw] ">
            <BpmnReadOnly xml={xml} />
          </div>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center">
            <Mirage size="60" speed="2.5" color="black" />
          </span>
        )}
      </div>

      {DuplicateModalOpen && (
        <SaveAndDuplicate
          process={process}
          setModalOpen={setDuplicateModalOpen}
          action={"Duplicate"}
          navigate={navigate}
        />
      )}
      {newVersionModalOpen && (
        <SaveAndDuplicate
          process={process}
          setModalOpen={setNewVersionModalOpen}
          action={"Use As New Version"}
          navigate={navigate}
        />
      )}
      {deleteModalOpen && (
        <Delete
          setModalOpen={setDeleteModalOpen}
          navigate={navigate}
          id={lastVersionId}
          modelName={process?.name}
        />
      )}
    </div>
  );
};

export default withTranslation()(Manage);
