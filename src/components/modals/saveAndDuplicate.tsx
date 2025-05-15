import { withTranslation } from "react-i18next";
import { axiosFormData, axiosInstance } from "../../config/axiosInstance";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setProcessData, setXml } from "../../store/process/processSlice";
import { ProcessMetadata } from "../../../types/apis/bpmn-process";
import { createNewDiagram } from "../../utils/createNewDiagram";
import { setNewDiagram } from "../../store/file/fileSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

const SaveAndDuplicate: React.FC<SaveAndDuplicateModalProps> = ({
  process,
  setModalOpen,
  navigate,
  action,
}) => {
  const { lastVersionId, oldVersionId } = useParams();
  const dispatch = useDispatch();
  const [model, setModel] = useState<ProcessMetadata>(
    process || { modelType: 0 }
  );
  const [newVersion, setNewVersion] = useState<boolean>(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setModel({ ...model, [e.target.name]: e.target.value });
  };
  const handleSaveAndDuplicate = async () => {
    try {
      if (!model.name || !model.key) {
        alert("Model Name and Model Key are required!");
        return;
      }
      action === "Duplicate" && navigate
        ? await axiosInstance
            .post(
              `/configuration/modeler/rest/models/${model?.id}/clone`,
              model
            )
            .then((data) => {
              setModalOpen(false);
              navigate(`/process/${data?.data?.id}`);
            })
        : action === "Create" && navigate
        ? await axiosInstance
            .post("/configuration/modeler/rest/models", model)
            .then(async (data) => {
              dispatch(setProcessData(data.data));

              await axiosInstance
                .post(
                  `/configuration/modeler/rest/converter/convert-to-bpmn/${data?.data?.id}`,
                  {}
                )
                .then((data) => {
                  setModalOpen(false);
                  dispatch(setXml(data.data));
                  dispatch(
                    setNewDiagram({
                      filename: model?.name,
                      fileContent: data.data,
                    })
                  );
                  navigate("/");
                });
            })
        : action === "Use As New Version" && navigate
        ? await axiosInstance
            .post(
              `/configuration/modeler/rest/models/${lastVersionId}/history/${oldVersionId}`,
              { action: "useAsNewVersion", comment: model?.comment }
            )
            .then(() => {
              navigate(`/process/${lastVersionId}`);
              setModalOpen(false);
            })
        : await axiosInstance
            .post("/configuration/modeler/rest/converter/convert-to-json", {
              value: model?.xml,
            })
            .then(async (data) => {
              const req = new URLSearchParams();
              req.append("modeltype", "model");
              req.append("json_xml", JSON.stringify(data?.data) || "");
              req.append("name", model?.name || "");
              req.append("key", model?.key || "");
              req.append("description", model?.description || "");
              req.append("newversion", String(newVersion));
              req.append("comment", model?.comment || "");
              req.append("lastUpdated", String(Date.now()));

              await axios.post(
                `/configuration/modeler/rest/models/${model?.id}/editor/json`,
                req.toString(),
                {
                  headers: {
                    "Content-Type":
                      "application/x-www-form-urlencoded; charset=UTF-8",
                  },
                }
              );
            })
            .then((data) => {
              dispatch(setProcessData(data));
              setModalOpen(false);
            });
    } catch (error) {
      console.error("Error duplicating BPMN:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 bg-opacity-50 overflow-auto backdrop-blur-md">
      <div className="bg-white p-6 rounded shadow-lg w-150 max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-4 bg-gray-200">
          {action} Model
        </h2>
        {action === "Use As New Version" ? (
          <h3 className="text-xl mb-5">
            {`Are you sure you want to use version ${process?.version} to create a new version of \"${model?.name}\"`}
          </h3>
        ) : action !== "Create" ? (
          <h3 className="text-xl mb-5">
            You can change the name for the new model and you may want to change
            the description at the same time.
          </h3>
        ) : (
          <h3 className="text-xl mb-5">
            You need to give a name for the new model and you may want to add a
            description at the same time.
          </h3>
        )}

        <div className="flex flex-col gap-3">
          {action !== "Use As New Version" && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Model Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter new name"
                  value={model?.name || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Model Key
                </label>
                <input
                  type="text"
                  name="key"
                  placeholder="Enter new Key"
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
                  placeholder="Enter new Description"
                  value={model?.description || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  rows={4}
                />
              </div>
            </>
          )}
          {action === "Save" && (
            <div className="flex flex-row gap-1">
              <input
                type="checkbox"
                name="newVersion"
                onChange={(e) => setNewVersion(e.target.checked)}
                className="border p-2 rounded"
              />
              <p className="text-sm">
                Save this as a new version? This means you can always go back to
                a previous version.
              </p>
            </div>
          )}

          {((newVersion && action === "Save") ||
            action === "Use As New Version") && (
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Comment
              </label>
              <textarea
                name="comment"
                placeholder="Enter new Comment"
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
            Cancel
          </button>
          {action === "Save" && (
            <button
              onClick={async () =>
                await handleSaveAndDuplicate().then(() =>
                  navigate(`/process/${process?.id}`)
                )
              }
              className={`px-4 py-2 ${
                !model?.name || !model?.key
                  ? "bg-green-200 cursor-not-allowed"
                  : "bg-green-600 cursor-pointer"
              }  text-white rounded `}
              disabled={!model?.name || !model?.key ? true : false}
            >
              Save and close editor
            </button>
          )}
          <button
            onClick={handleSaveAndDuplicate}
            className={`px-4 py-2 ${
              !model?.name || !model?.key
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-blue-600 cursor-pointer"
            }  text-white rounded `}
            disabled={
              (!model?.name || !model?.key) && action !== "Save As New Version"
                ? true
                : false
            }
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};
export default withTranslation()(SaveAndDuplicate);
