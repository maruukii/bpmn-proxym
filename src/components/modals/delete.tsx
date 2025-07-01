import { withTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeleteProcessMutation } from "../../hooks/queries/useProcessesAppDefsQuery";
import { useEffect, useState } from "react";
import { Mirage } from "ldrs/react";
import { axiosInstance } from "../../config/axiosInstance";
import { DeleteModalProps } from "../../../types/apis/bpmn-process";
import { toast } from "react-toastify";

const DeleteModal: React.FC<DeleteModalProps> = ({
  setModalOpen,
  id,
  modelName,
  t,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const ModalTitle: string = location?.pathname
    ?.toLowerCase()
    ?.startsWith("/apps")
    ? "apps_singular"
    : "processModels_singular";
  const deletion = useDeleteProcessMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [parentRelation, setParentRelation] = useState<string | undefined>(
    undefined
  );
  useEffect(() => {
    const checkParent = async () => {
      setIsLoading(true);
      await axiosInstance
        .get(`/configuration/modeler/rest/models/${id}/parent-relations`)
        .then((data) => {
          if (data?.data?.length > 0) setParentRelation(data?.data?.[0]?.name);
          setIsLoading(false);
        });
    };

    checkParent();
  }, []);

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      if (!parentRelation)
        await new Promise<void>((resolve, reject) => {
          deletion.mutate(id, {
            onSuccess: () => {
              setModalOpen(false);
              const firstPath = `/${location.pathname.split("/")[1]}`;
              navigate(firstPath);
              toast.success(modelName + t("BPMNDELETESUCCESS"));
              resolve();
            },
            onError: (error) => {
              reject();
              throw new Error(`Error deleting process: ${error}`);
            },
          });
        });
    } catch (error) {
      console.error("Error saving model:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-120  bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded shadow-lg w-170">
        <h2 className="text-3xl font-semibold mb-4 bg-gray-200 text-center">
          {t("DeleteModal_title", { item: t(ModalTitle) })}
        </h2>
        <h3 className="text-xl mb-5 text-left">
          {isLoading ? (
            <Mirage size="60" speed="2.5" color="black" />
          ) : !parentRelation ? (
            t("DeleteModal_description", {
              item: t(ModalTitle),
              name: modelName,
            })
          ) : (
            <>
              {t("DeleteModal_description_conflict")}
              <ul>
                <li>*{t("app_model", { name: parentRelation })}</li>
              </ul>
            </>
          )}
        </h3>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
          >
            {t("Cancel")}
          </button>
          <button
            onClick={handleDelete}
            className={`px-4 py-2  text-white rounded ${
              parentRelation
                ? "cursor-not-allowed bg-red-200"
                : "cursor-pointer bg-red-600"
            }`}
            disabled={parentRelation ? true : false}
          >
            {isLoading ? (
              <Mirage size="60" speed="2.5" color="black" />
            ) : (
              t("DeleteModal_title", { item: t(ModalTitle) })
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(DeleteModal);
