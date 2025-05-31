import { useEffect, useMemo, useState } from "react";
import FileUploadButton from "../../components/Buttons/fileUpload";
import NewDiagram from "../../components/Buttons/newDiagram";
import { SingleProcess } from "../../components/UI/SingleProcess";
import { useProcessesQuery } from "../../hooks/queries/useProcessesQuery";
import { withTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { isActive } from "../../utils/tools";

export const Processes = ({ t }: { t: any }) => {
  const location = useLocation();
  const [sortCriteria, setSortCriteria] = useState("modifiedDesc");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const { data, isLoading, error } = useProcessesQuery({
    filter: isActive(location, "/apps")
      ? "apps"
      : isActive(location, "/processes")
      ? "processes"
      : "processes",
    modelType: isActive(location, "apps")
      ? 3
      : isActive(location, "/processes")
      ? 0
      : 0,
    sort: sortCriteria,
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 200);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const allProcesses = data || [];

  const filteredProcesses = useMemo(() => {
    return allProcesses.filter((process) =>
      process.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [allProcesses, debouncedQuery]);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
        <h1 className="text-2xl font-semibold text-gray-800">
          {isActive(location, "/apps") ? t("Apps") : t("Processes")}
        </h1>
        <div className="flex gap-3">
          <NewDiagram />
          <FileUploadButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-8 flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="col-span-1 flex flex-col items-start space-y-4 p-4 bg-gray-50 border-r">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-black rounded border w-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>

        {/* Right Content */}
        <div className="col-span-7 flex flex-col overflow-y-auto p-4 h-full">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">
              {filteredProcesses?.length > 1
                ? t("There_plural", { count: filteredProcesses.length })
                : t("There_singular", { count: filteredProcesses.length })}{" "}
              {isActive(location, "/apps") && filteredProcesses?.length > 1
                ? t("apps_plural")
                : isActive(location, "/apps") && filteredProcesses?.length <= 1
                ? t("apps_singular")
                : isActive(location, "/processes") &&
                  filteredProcesses?.length > 1
                ? t("processModels_plural")
                : t("processModels_singular")}
            </span>

            <select
              className="px-2 py-1 border rounded text-sm"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="modifiedDesc">{t("LastModified")}</option>
              <option value="modifiedAsc">{t("Oldest")}</option>
              <option value="nameAsc">{t("Name_AZ")}</option>
              <option value="nameDesc">{t("Name_ZA")}</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-5 w-full justify-start">
            {filteredProcesses.length ? (
              filteredProcesses.map((process, index) => (
                <div key={index} className="w-[290px]">
                  <SingleProcess t={t} process={process} />
                </div>
              ))
            ) : (
              <p>
                #
                {isLoading
                  ? "Loading processes..."
                  : error
                  ? "Error loading processes"
                  : t("NoProcessesFound")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Processes);
