import { withTranslation } from "react-i18next";
import { axiosInstance } from "../../config/axiosInstance";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProcessData, setXml } from "../../store/process/processSlice";
import {
  ProcessMetadata,
  SaveAndDuplicateModalProps,
} from "../../../types/apis/bpmn-process";
import { setModelSaved, setNewDiagram } from "../../store/file/fileSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { openXMLPreview } from "../../utils/previewContentUtils";
import { RootState } from "../../store/store";
import {
  useConvertToBpmnMutation,
  useConvertToJsonMutation,
  useCreateProcessMutation,
  useDuplicateProcessMutation,
  useModifyMutation,
  usePublishMutation,
  useSaveAppMutation,
  useSaveProcessMutation,
} from "../../hooks/queries/useProcessesAppDefsQuery";
import { toast } from "react-toastify";
import { Mirage } from "ldrs/react";
import { Actions } from "../../CommonData/Enums";

const SaveAndDuplicate: React.FC<SaveAndDuplicateModalProps> = ({
  process,
  setModalOpen,
  action,
  setIsSaved,
  t,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const ModalTitle: string = location?.pathname
    ?.toLowerCase()
    ?.startsWith("/apps")
    ? "apps_singular"
    : "processModels_singular";
  const { lastVersionId, oldVersionId } = useParams();
  const { modeler } = useSelector((state: RootState) => state.modeler);
  const appDef = useSelector((state: RootState) => state.appDefs);
  const dispatch = useDispatch();
  const [model, setModel] = useState<ProcessMetadata>(() => ({
    id: process?.id || "",
    name: process?.name || "",
    key: process?.key || "",
    createdBy: process?.createdBy || "",
    description: process?.description || "",
    lastUpdatedBy: process?.lastUpdatedBy || "",
    lastUpdated: process?.lastUpdated || Date.now(),
    latestVersion: process?.latestVersion ?? false,
    version: process?.version ?? 1,
    modelType:
      process?.modelType ??
      (location?.pathname?.toLowerCase()?.startsWith("/apps") ? 3 : 0),
  }));
  const [newVersion, setNewVersion] = useState<boolean>(false);
  const [publishApp, setPublishApp] = useState<boolean>(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setModel({ ...model, [e.target.name]: e.target.value });
  };
  const [isLoading, setIsLoading] = useState(false);
  const duplication = useDuplicateProcessMutation();
  const creation = useCreateProcessMutation();
  const convertToBPMN = useConvertToBpmnMutation();
  const converToJson = useConvertToJsonMutation();
  const saving = useSaveProcessMutation();
  const savingApp = useSaveAppMutation();
  const publish = usePublishMutation();
  const modify = useModifyMutation();
  const handleSaveAndDuplicate = async (closeEditor?: boolean) => {
    if (!model.name || !model.key) {
      alert("Model Name and Model Key are required!");
      return;
    }

    setIsLoading(true);

    try {
      switch (action) {
        case Actions.DUPLICATE:
          if (lastVersionId) {
            const id = lastVersionId;
            await new Promise<void>((resolve, reject) => {
              duplication.mutate(
                { id, model },
                {
                  onSuccess: (data) => {
                    setModalOpen(false);
                    location?.pathname?.includes("/apps")
                      ? navigate(`/apps/${data?.id}`)
                      : navigate(`/processes/${data?.id}`);
                    resolve();
                  },
                  onError: (error) => {
                    if (
                      process?.id === model?.id ||
                      process?.name === model?.name
                    ) {
                      toast.warn(
                        "Already exists with the same name or ID. Please change the name or ID and try again."
                      );
                    }
                    reject(error);
                  },
                }
              );
            });
          }
          break;
        case Actions.PUBLISH:
          if (lastVersionId) {
            const id = lastVersionId;
            await new Promise<void>((resolve, reject) => {
              publish.mutate(id, {
                onSuccess: () => {
                  setModalOpen(false);
                  toast.success(t("Published", { item: t(ModalTitle) }));
                  resolve();
                },
                onError: (error) => {
                  reject(error);
                },
              });
            });
          }
          break;
        case Actions.MODIFY:
          if (lastVersionId && model) {
            const id = lastVersionId;
            await new Promise<void>((resolve, reject) => {
              modify.mutate(
                { id, model },
                {
                  onSuccess: () => {
                    setModalOpen(false);
                    toast.success(t("Modified", { item: t(ModalTitle) }));
                    resolve();
                  },
                  onError: (error) => {
                    reject(error);
                  },
                }
              );
            });
          }
          break;
        case Actions.CREATE:
          await new Promise<void>((resolve, reject) => {
            creation.mutate(model, {
              onSuccess: (data) => {
                dispatch(setProcessData(data));
                setModalOpen(false);

                if (location?.pathname?.includes("/apps")) {
                  navigate(`/apps/${data?.id}`);
                  resolve();
                } else if (location?.pathname?.includes("/processes")) {
                  convertToBPMN.mutate(data, {
                    onSuccess: (xml) => {
                      dispatch(setXml(xml || ""));
                      dispatch(
                        setNewDiagram({
                          filename: model?.name,
                          fileContent: xml,
                        })
                      );
                      navigate(`/editor/${data?.id}`);
                      resolve();
                    },
                    onError: (error) => {
                      console.error("Error converting to BPMN:", error);
                      toast.error("Error converting");
                      reject(error);
                    },
                  });
                }
              },
              onError: (error) => {
                console.error("Error creating process:", error);
                toast.error("Error creating process");
                reject(error);
              },
            });
          });
          break;

        case Actions.NEW_VERSION:
          if (lastVersionId) {
            await axiosInstance.post(
              `/configuration/modeler/rest/models/${lastVersionId}/history/${oldVersionId}`,
              { action: "useAsNewVersion", comment: model?.comment }
            );
            location?.pathname?.includes("/apps")
              ? navigate(`/apps/${lastVersionId}`)
              : navigate(`/processes/${lastVersionId}`);
            setModalOpen(false);
          }
          break;

        case Actions.SAVE:
          if (!modeler) return;

          const xml = await openXMLPreview({ modeler });

          await new Promise<void>((resolve, reject) => {
            converToJson.mutate(xml as string, {
              onSuccess: (json) => {
                try {
                  // Parse JSON
                  const parsed =
                    typeof json === "string" ? JSON.parse(json) : json;

                  // Add modelId
                  parsed.modelId = model?.id || "";

                  const updatedJson = JSON.stringify(parsed);

                  const req = new URLSearchParams();
                  req.append("modeltype", "model");
                  req.append("json_xml", updatedJson);
                  req.append("name", model?.name || "");
                  req.append("key", model?.key || "");
                  req.append("description", model?.description || "");
                  req.append("newversion", String(newVersion));
                  req.append("comment", model?.comment || "");
                  req.append("lastUpdated", String(Date.now()));

                  saving.mutate(
                    { id: model?.id, req },
                    {
                      onSuccess: () => {
                        dispatch(setModelSaved());
                        setModalOpen(false);
                        setIsSaved && setIsSaved(true);
                        if (closeEditor) {
                          navigate(`/processes/${model?.id}`);
                        }
                        resolve();
                      },
                      onError: (error) => {
                        console.error("Error saving model:", error);
                        toast.error("Error saving model");
                        reject(error);
                      },
                    }
                  );
                } catch (error) {
                  console.error("Error modifying JSON:", error);
                  toast.error("Invalid JSON format");
                  reject(error);
                }
              },
              onError: (error) => {
                console.error("Error converting to JSON:", error);
                toast.error("Error converting to JSON");
                reject(error);
              },
            });
          });

          break;
        case Actions.SAVE_PUBLISH:
          await new Promise<void>((resolve, reject) => {
            const req: AppDefReq = {
              appDefinition: {
                name: model?.name,
                key: model?.key,
                definition: appDef,
                created: Date.now(),
                version: model?.version,
                description: model?.description ?? "",
                id: model?.id,
              },
              publish: publishApp,
            };
            savingApp.mutate(
              { id: model?.id, req },
              {
                onSuccess: () => {
                  dispatch(setModelSaved());
                  setModalOpen(false);
                  publishApp
                    ? toast.success(t("Published", { item: t(ModalTitle) }))
                    : toast.success(t("SAVESUCCESS", { name: t(ModalTitle) }));

                  if (closeEditor) {
                    navigate(
                      `/${
                        location?.pathname?.toLowerCase()?.includes("apps")
                          ? "apps"
                          : "processes"
                      }/${model?.id}`
                    );
                  }
                  resolve();
                },
                onError: (error) => {
                  console.error("Error saving model:", error);
                  toast.error("Error saving model");
                  reject(error);
                },
              }
            );
          });
          break;
        default:
          console.warn("Unhandled action type:", action);
          break;
      }
    } catch (error) {
      console.error("Error in handleSaveAndDuplicate:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 bg-opacity-50 overflow-auto backdrop-blur-md">
      <div className="bg-white p-6 rounded shadow-lg w-170 max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-4 bg-gray-200">
          {action === Actions.NEW_VERSION
            ? t("NewVersionModal_title")
            : action === Actions.CREATE
            ? t("CreateModal_title", { item: t(ModalTitle) })
            : action === Actions.DUPLICATE
            ? t("DuplicateModal_title", { item: t(ModalTitle) })
            : action === Actions.MODIFY
            ? t("ModifyModal_title", { item: t(ModalTitle) })
            : action === Actions.SAVE || action === Actions.SAVE_PUBLISH
            ? t("SaveModal_title", { item: t(ModalTitle) })
            : action === Actions.PUBLISH
            ? t("PublishModal_title", { item: t(ModalTitle) })
            : ""}
        </h2>
        <h3 className="text-xl mb-5">
          {action === Actions.NEW_VERSION
            ? t("NewVersionModal_description", {
                version: process?.version,
                name: process?.name,
              })
            : action === Actions.CREATE
            ? t("CreateModal_description", { item: t(ModalTitle) })
            : action === Actions.DUPLICATE
            ? t("DuplicateModal_description", { item: t(ModalTitle) })
            : action === Actions.MODIFY
            ? t("ModifyModal_description", { item: t(ModalTitle) })
            : action === Actions.SAVE
            ? t("SaveModal_description", { item: t(ModalTitle) })
            : action === Actions.SAVE_PUBLISH
            ? t("SavePublishModal_description", { item: t(ModalTitle) })
            : action === Actions.PUBLISH
            ? t("PublishModal_description", { item: process?.name })
            : ""}
        </h3>

        <div className="flex flex-col gap-3">
          {![Actions.NEW_VERSION, Actions.PUBLISH].includes(
            action as Actions
          ) && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  {t("modelName", { item: t(ModalTitle) })}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="..."
                  value={model?.name || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  {t("modelKey", { item: t(ModalTitle) })}
                </label>
                <input
                  type="text"
                  name="key"
                  placeholder="..."
                  value={model?.key || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="..."
                  value={model?.description || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  rows={4}
                />
              </div>
            </>
          )}
          {action === Actions.SAVE && (
            <div className="flex flex-row gap-1">
              <input
                type="checkbox"
                name="newVersion"
                onChange={(e) => setNewVersion(e.target.checked)}
                className="border p-2 rounded"
              />
              <p className="text-sm">{t("NewVersionModal_checkbox")}</p>
            </div>
          )}
          {action === Actions.SAVE_PUBLISH && (
            <div className="flex flex-row gap-1">
              <input
                type="checkbox"
                name="newVersion"
                onChange={(e) => setPublishApp(e.target.checked)}
                className="border p-2 rounded"
              />
              <p className="text-sm">{t("PublishModal_checkbox")}</p>
            </div>
          )}
          {((newVersion && action === Actions.SAVE) ||
            action === "Use As New Version") && (
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Comment
              </label>
              <textarea
                name="comment"
                placeholder="..."
                // value={model?.comment}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                rows={4}
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
          >
            {t("Cancel")}
          </button>
          {(action === Actions.SAVE || action === Actions.SAVE_PUBLISH) && (
            <button
              onClick={() => {
                handleSaveAndDuplicate(true);
              }}
              className={`px-4 py-2 ${
                !model?.name || !model?.key
                  ? "bg-green-200 cursor-not-allowed"
                  : "bg-green-600 cursor-pointer"
              }  text-white rounded `}
              disabled={!model?.name || !model?.key ? true : false}
            >
              {isLoading ? (
                <Mirage size="60" speed="2.5" color="black" />
              ) : (
                t("SaveAndClose")
              )}
            </button>
          )}
          <button
            onClick={() => handleSaveAndDuplicate(false)}
            className={`px-4 py-2 ${
              !model?.name || !model?.key
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-blue-600 cursor-pointer"
            }  text-white rounded `}
            disabled={!model?.name || !model?.key ? true : false}
          >
            {isLoading ? (
              <Mirage size="60" speed="2.5" color="black" />
            ) : action === Actions.NEW_VERSION ? (
              t("NewVersionModal_title")
            ) : action === Actions.CREATE ? (
              t("CreateModal_title", { item: t(ModalTitle) })
            ) : action === Actions.DUPLICATE ? (
              t("DuplicateModal_title", { item: t(ModalTitle) })
            ) : action === Actions.MODIFY ? (
              t("ModifyModal_title", { item: t(ModalTitle) })
            ) : action === Actions.SAVE || action === Actions.SAVE_PUBLISH ? (
              t("SaveModal_title", { item: t(ModalTitle) })
            ) : action === Actions.PUBLISH ? (
              t("PublishModal_title", { item: t(ModalTitle) })
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default withTranslation()(SaveAndDuplicate);
