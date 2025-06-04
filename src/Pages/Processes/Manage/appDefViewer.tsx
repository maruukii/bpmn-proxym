import React, { useEffect, useRef, useState } from "react";
import { GlyphiconIcons, ThemeOptions } from "../../../CommonData/Enums";
import DynamicView from "../../../components/UI/SingleProcess";
import {
  useAppsDefsQuery,
  useProcessesAndAppsDefsQuery,
} from "../../../hooks/queries/useProcessesAppDefsQuery";
import { useParams } from "react-router-dom";
import { ProcessMetadata } from "../../../../types/apis/bpmn-process";
import { Types } from "../../../CommonData/Enums";
import "../../../Styles/glyphicons.css";

interface Props {
  process: ProcessMetadata;
  appDefs?: AppDefinition;
  setAppDef?: React.Dispatch<React.SetStateAction<AppDefinition>>;
  t: any;
}

const AppDetails: React.FC<Props> = ({ appDefs, setAppDef, process, t }) => {
  const { lastVersionId, oldVersionId } = useParams();
  const [activeTab, setActiveTab] = useState<"bpmn" | "cmmn">("bpmn");
  const [showImported, setShowImported] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowImported(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowImported]);
  const processes = useProcessesAndAppsDefsQuery({
    filter: "processes",
    modelType: 0,
    sort: "modifiedDesc",
  });
  const apps = useAppsDefsQuery({
    lastId: lastVersionId || "",
    oldId: oldVersionId || "",
  });

  const handleChange = (field: keyof AppDefinition, value: string) => {
    if (setAppDef) {
      setAppDef((prev) => ({ ...prev, [field]: value }));
    }
  };
  const handleModelSelection = (process: ProcessMetadata) => {
    const isSelected = appDefs?.models.some(
      (model) => model.id === process?.id
    );

    const updatedModels = isSelected
      ? appDefs?.models.filter((model) => model.id !== process?.id)
      : [...appDefs!.models, process];
    setAppDef &&
      setAppDef((prev) => ({
        ...prev,
        models: updatedModels ?? [],
      }));
  };

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Full Width Header */}
      <h1 className="text-2xl font-semibold mb-5">
        {t("AppDetails", { item: process?.name })}
      </h1>

      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="w-1/4 pr-4 border-r border-gray-300 overflow-y-auto">
          <DynamicView
            process={process}
            type={Types.APPS}
            icon={appDefs?.icon}
            theme={appDefs?.theme}
          />
        </div>

        {/* Right Panel */}
        <div className="w-3/4 pl-6 flex flex-col space-y-4">
          {setAppDef && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Icon Select */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">{t("Icon")}</label>
                <div className="grid grid-cols-6 gap-3 max-h-40 overflow-y-auto p-2 border border-gray-300 rounded-md">
                  {GlyphiconIcons.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => handleChange("icon", icon)}
                      className={`flex items-center justify-center p-2 border rounded hover:bg-blue-100 cursor-pointer ${
                        appDefs?.icon === icon
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      title={icon}
                    >
                      <i className={`glyphicon ${icon} text-2xl`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Visual Select */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">{t("Theme")}</label>
                <div className="flex space-x-2">
                  {ThemeOptions.map((theme) => (
                    <div
                      key={theme.id}
                      className="w-10 h-10 rounded cursor-pointer border-4"
                      title={theme.id}
                      style={{
                        backgroundColor: theme.color,
                        borderColor:
                          appDefs?.theme === theme.id ? "#00e" : "#fff",
                      }}
                      onClick={() => handleChange("theme", theme.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700">{t("groupsAccess")}</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2"
                  placeholder={"..."}
                  value={appDefs?.groupsAccess || ""}
                  onChange={(e) => handleChange("groupsAccess", e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700">{t("usersAccess")}</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2"
                  placeholder={"..."}
                  value={appDefs?.usersAccess || ""}
                  onChange={(e) => handleChange("usersAccess", e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">{t("Included Models")}</p>
            {setAppDef && (
              <button
                onClick={() => setShowImported(!showImported)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                {t("Select Processes")}
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 w-[80rem] border-b pb-2">
            <button
              className={`px-4 py-2 rounded-md cursor-pointer ${
                activeTab === "bpmn" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("bpmn")}
            >
              {t("BPMN Models")}
            </button>
            <button
              className={`px-4 py-2 rounded-md cursor-pointer ${
                activeTab === "cmmn" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("cmmn")}
            >
              {t("CMMN Models")}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto max-h-[20rem] w-[80rem] border p-2 rounded-lg bg-white shadow flex flex-wrap gap-2">
            {appDefs?.models?.length && activeTab === "bpmn" ? (
              appDefs?.models.map((item: ProcessMetadata) => (
                <div key={item?.id} className="w-[290px]">
                  <DynamicView process={item} type={Types.PROCESS} />
                </div>
              ))
            ) : apps &&
              apps?.data?.definition?.models?.length &&
              activeTab === "bpmn" ? (
              apps?.data?.definition?.models.map((item: ProcessMetadata) => (
                <div key={item?.id} className="w-[290px]">
                  <DynamicView process={item} type={Types.PROCESS} />
                </div>
              ))
            ) : (
              <div className="text-gray-500 italic p-4 w-full h-[15rem]">
                {t("No models")}
              </div>
            )}
          </div>

          {showImported && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 z-130">
              <div
                className="w-[60%] h-[80%] p-6 border bg-gray-50 rounded-lg shadow-lg flex flex-col"
                ref={modalRef}
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {t("Included Models")}
                </h2>

                {/* Scrollable content */}
                <div className="flex-1 overflow-auto">
                  {processes.data?.length ? (
                    <div className="flex flex-wrap gap-4">
                      {processes.data.map((proc: ProcessMetadata) => (
                        <div
                          key={proc.id}
                          className="w-[290px] cursor-pointer"
                          onClick={() => {
                            handleModelSelection(proc);
                          }}
                        >
                          <DynamicView
                            process={proc}
                            type={Types.PROCESS}
                            isSelected={appDefs?.models.some(
                              (model) => model.id === proc.id
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="italic text-gray-500">
                      {t("No process models found.")}
                    </p>
                  )}
                </div>

                {/* Close button always visible */}
                <div className="mt-4 flex justify-end border-t pt-4">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow cursor-pointer"
                    onClick={() => setShowImported(false)}
                  >
                    {t("Close")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
