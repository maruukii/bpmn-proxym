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
  ShareIcon,
  ArrowLongUpIcon,
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Mirage } from "ldrs/react";
import History from "./history";
import BpmnReadOnly from "./bpmnReadOnly";
import { ProcessMetadata } from "../../../../types/apis/bpmn-process";
import { setProcessData, setXml } from "../../../store/process/processSlice";
import {
  downloadBPMN,
  downloadZip,
  exportBar,
} from "../../../utils/fileExporter";
import { Actions } from "../../../CommonData/Enums";
import AppDetails from "./appDefViewer";

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
  const location = useLocation();
  // const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  // const [newVersionModalOpen, setNewVersionModalOpen] =
  //   useState<boolean>(false);
  // const [DuplicateModalOpen, setDuplicateModalOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [action, setAction] = useState<Actions>(Actions.NULL);

  const [historyData, setHistoryData] = useState<ProcessMetadata[]>([]);
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);
  const [process, setProcess] = useState<ProcessMetadata>();

  const [loading, setLoading] = useState<boolean>(false);
  const { xml } = useSelector((state: RootState) => state.process);
  // const [xml, setXml] = useState<string | null>(null);
  const { lastVersionId, oldVersionId } = useParams();
  useEffect(() => {
    // let isMounted = true;
    const loadProcess = async () => {
      try {
        if (lastVersionId && !modalOpen) {
          if (oldVersionId) {
            await axiosInstance
              .get(
                `/configuration/modeler/rest/models/${lastVersionId}/history/${oldVersionId}`
              )
              .then(async (data) => {
                setProcess(data.data);
                if (location?.pathname?.includes("/processes"))
                  await axiosInstance.get(
                    `/configuration/modeler/rest/models/${lastVersionId}/history/${oldVersionId}/model-json`
                  );
              });
          } else {
            await axiosInstance
              .get(`/configuration/modeler/rest/models/${lastVersionId}`)
              .then((data) => {
                setProcess(data.data);
              });
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
  }, [lastVersionId, oldVersionId, modalOpen]);
  useEffect(() => {
    const fetchXML = async () => {
      if (lastVersionId && location?.pathname?.includes("/processes")) {
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
    if (process) {
      location?.pathname?.includes("/processes")
        ? await downloadBPMN(process?.id, process?.name)
        : location?.pathname?.includes("/apps")
        ? await downloadZip(process?.id, process?.name)
        : undefined;
    }
  };

  const handleExportBar = async () => {
    if (process) await exportBar(process?.id, process?.name);
  };

  //   const  handleSetNewVersion=()=> {
  // if(oldVersionId&&lastVersionId)
  //   }

  return (
    <div className=" flex flex-col gap-6 p-6 ">
      {/* Top Section */}
      <div className="flex justify-between items-start border-b pb-4">
        {/* Left: Name and Version */}
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-semibold flex items-center gap-2">
            <span>{process?.name}</span>
            <span className="text-gray-500">|</span>
            <Tag
              className="bg-blue-100 text-blue-700"
              label={
                process?.latestVersion ? "latest" : process?.version?.toString()
              }
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
              <span>
                {t("Created by")} {process?.createdBy}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              <span>
                {t("Last updated by")} {process?.lastUpdatedBy} {" - "}
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
          <ActionButton
            icon={<PencilIcon className="w-5 h-5" />}
            label={t("Modify")}
            onClick={() => {
              setModalOpen(true);
              setAction(Actions.MODIFY);
            }}
            disabled={oldVersionId ? true : false}
          />
          <ActionButton
            icon={<DocumentDuplicateIcon className="w-5 h-5" />}
            label={t("Duplicate")}
            onClick={() => {
              setModalOpen(true);
              setAction(Actions.DUPLICATE);
            }}
            disabled={oldVersionId ? true : false}
          />
          <ActionButton
            icon={<TrashIcon className="w-5 h-5" />}
            label={t("Delete")}
            onClick={() => {
              setModalOpen(true);
              setAction(Actions.DELETE);
            }}
            disabled={oldVersionId ? true : false}
          />
          <ActionButton
            icon={<ArrowDownTrayIcon className="w-5 h-5" />}
            label={t("Download")}
            onClick={handleDownload}
          />
          {location?.pathname?.includes("/apps") && !oldVersionId ? (
            <ActionButton
              icon={<ArrowLongUpIcon className="w-5 h-5" />}
              label={t("Export bar")}
              onClick={handleExportBar}
              disabled={oldVersionId ? true : false}
            />
          ) : undefined}
          {location?.pathname?.includes("/apps") && !oldVersionId ? (
            <ActionButton
              icon={<ShareIcon className="w-5 h-5" />}
              label={t("Publish")}
              onClick={() => {
                setModalOpen(true);
                setAction(Actions.PUBLISH);
              }}
            />
          ) : undefined}
          {!oldVersionId ? (
            <ActionButton
              icon={<EyeIcon className="w-5 h-5" />}
              label={
                location?.pathname?.includes("/apps")
                  ? t("App Editor")
                  : t("Visual Editor")
              }
              onClick={() => {
                dispatch(setProcessData(process as ProcessMetadata));
                location?.pathname?.includes("/apps")
                  ? navigate(`/apps-editor/${process?.id}`)
                  : navigate(`/editor/${process?.id}`);
              }}
            />
          ) : (
            <ActionButton
              icon={<TagIcon className="w-5 h-5" />}
              label={t("Use as new version")}
              onClick={() => {
                setModalOpen(true);
                setAction(Actions.NEW_VERSION);
              }}
            />
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        <div
          className="text-sm text-gray-700 max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap"
          title={process?.description}
        >
          <span className="font-bold">Description: </span>
          <span className="font-medium">{process?.description}</span>
        </div>

        {process?.comment && (
          <div
            className="text-sm text-gray-700 max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap"
            title={process?.comment}
          >
            <span className="font-bold">Comment: </span>
            <span className="font-medium">{process?.comment}</span>
          </div>
        )}

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
      <div className="flex-grow w-full h-full flex items-start justify-start overflow-auto">
        {xml && loading ? (
          <div className="w-full h-full max-w-[90vw] ">
            <BpmnReadOnly xml={xml} />
          </div>
        ) : location?.pathname?.includes("/apps") && process ? (
          <AppDetails process={process} t={t} />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center">
            <Mirage size="60" speed="2.5" color="black" />
          </span>
        )}
      </div>

      {modalOpen && action !== Actions.DELETE && (
        <SaveAndDuplicate
          process={process}
          setModalOpen={setModalOpen}
          action={action}
        />
      )}
      {modalOpen &&
        action === Actions.DELETE &&
        lastVersionId &&
        process?.name && (
          <Delete
            setModalOpen={setModalOpen}
            id={lastVersionId}
            modelName={process?.name || ""}
          />
        )}
    </div>
  );
};

export default withTranslation()(Manage);
