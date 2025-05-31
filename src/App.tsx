import React, { useEffect } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Routes from "./routes";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { queryClient, persister } from "./lib/reactQuery";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  clearFileContentCopySuccess,
  clearFileError,
  clearFileExportSuccess,
  clearFileImportSucess,
  clearNewDiagramCreationSuccess,
} from "./store/file/fileSlice";
import { toast, ToastContainer } from "react-toastify";
import { withTranslation, WithTranslation } from "react-i18next";
const App: React.FC<WithTranslation> = ({ t }) => {
  const dispatch = useDispatch();
  const {
    filename,
    fileExportSuccess,
    fileImportSuccess,
    fileContentCopySuccess,
    fileError,
    newDiagramCreationSuccess,
  } = useSelector((state: RootState) => state.file);
  useEffect(() => {
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
      : // : isLoggedIn
        // ? toast.success(userName + t("CONNECTSUCCESS"))
        // : loginError
        // ? toast.error(loginError) && dispatch(clearLoginError())
        // : loginError
        // ? toast.error(logoutError) && dispatch(c learLogoutError())
        null;
  }, [
    dispatch,
    filename,
    fileContentCopySuccess,
    fileError,
    fileExportSuccess,
    fileImportSuccess,
  ]);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <ToastContainer position="top-center" autoClose={2000} />

      <Routes />
    </PersistQueryClientProvider>
  );
};

export default withTranslation()(App);
