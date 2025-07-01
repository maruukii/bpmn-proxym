import { withTranslation } from "react-i18next";
import ActionButton from "../../components/UI/components/actionButton";
import {
  DocumentArrowDownIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  useAppsDefsQuery,
  useGetProcessMutation,
} from "../../hooks/queries/useProcessesAppDefsQuery";
import { useNavigate, useParams } from "react-router-dom";
import SaveAndDuplicate from "../../components/modals/saveAndDuplicate";
import { Actions, GlyphiconIcons, ThemeOptions } from "../../CommonData/Enums";
import AppDetails from "../Processes/Manage/appDefViewer";
import {
  clearProcessData,
  setProcessData,
} from "../../store/process/processSlice";
import { useDispatch, useSelector } from "react-redux";
import { Mirage } from "ldrs/react";
import {
  clearAppDefsData,
  setAppDefsData,
} from "../../store/process/appDefsSlice";
import { RootState } from "../../store/store";
import { clearModelSaved } from "../../store/file/fileSlice";

const appEditor = ({ t }: { t: any }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [saveModal, setSaveModal] = useState<boolean>(false);
  const { lastVersionId } = useParams();
  const process = useSelector((state: RootState) => state.process);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { fileSavedSuccess } = useSelector((state: RootState) => state.file);

  const apps = useAppsDefsQuery({
    lastId: lastVersionId || "",
    oldId: "",
  });
  const [appDefs, setAppDef] = useState<AppDefinition>(
    apps?.data?.definition ?? {
      groupsAccess: "",
      usersAccess: "",
      icon: GlyphiconIcons[0],
      models: [],
      theme: ThemeOptions[0]?.id,
    }
  );
  const getProcessMutation = useGetProcessMutation();

  useEffect(() => {
    if (lastVersionId) {
      dispatch(clearModelSaved());
      setIsLoading(true);
      new Promise((resolve, reject) => {
        getProcessMutation.mutate(lastVersionId, {
          onSuccess: (data) => {
            if (data) {
              dispatch(setProcessData(data));
            }
            resolve(data);
          },
          onError: (error) => {
            reject(error);
          },
        });
      })
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [lastVersionId, fileSavedSuccess]);
  useEffect(() => {
    if (appDefs) dispatch(setAppDefsData(appDefs));
  }, [appDefs]);

  return (
    <div className="flex flex-col gap-4 ">
      {/* Toolbar */}
      <div className="flex justify-between gap-4 p-2 bg-gray-300 text-white rounded-lg shadow-md">
        <ActionButton
          icon={<DocumentArrowDownIcon className="w-8 h-8" />}
          onClick={() => setSaveModal(true)}
          label={t("Save")}
        />

        <ActionButton
          icon={<XCircleIcon className="w-8 h-8" />}
          onClick={() => {
            dispatch(clearProcessData());
            dispatch(clearAppDefsData());
            navigate("/apps");
          }}
          label={t("Close")}
        />
      </div>

      <div className="flex w-full h-[80vh] justify-center items-start overflow-auto">
        {isLoading ? (
          <Mirage size="60" speed="2.5" color="black" />
        ) : process?.id ? (
          <AppDetails
            process={process}
            t={t}
            appDefs={appDefs}
            setAppDef={setAppDef}
          />
        ) : null}
      </div>

      {saveModal && (
        <SaveAndDuplicate
          process={process}
          setModalOpen={setSaveModal}
          action={Actions.SAVE_PUBLISH}
        />
      )}
    </div>
  );
};

export default withTranslation()(appEditor);
