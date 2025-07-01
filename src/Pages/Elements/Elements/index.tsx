import { withTranslation } from "react-i18next";
import stencilConfig from "../../../tasks/stencils.json";
import { useEffect, useMemo, useState } from "react";
import SingleElement from "../../../components/UI/Single Element";
import { PlusIcon } from "@heroicons/react/24/outline";
import CRUD from "../../../components/UI/Single Element/CRUD";
import { Actions } from "../../../CommonData/Enums";
import Properties from "../Properties";
import { axiosElements } from "../../../config/axiosInstance";

export const Elements = ({ t }: { t: any }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"elements" | "properties">(
    "elements"
  );
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [backendElements, setBackendElements] = useState<
    SingleElementMetadata[]
  >([]);
  const [changed, setChanged] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosElements.get("/elements");
        setBackendElements(response.data);
      } catch (error) {
        console.error("Error fetching elements:", error);
      }
    };

    fetchData();
  }, [modalOpen, changed]);
  const property: PropertiesMetadata = {
    name: "",
    properties: [
      {
        id: "",
        type: "",
        title: "",
        value: "",
        description: "",
        popular: false,
      },
    ],
  };
  const element: ElementMetadata = {
    type: "node",
    id: "",
    title: "",
    description: "",
    view: "",
    icon: "",
    groups: "",
    bpmnType: "",
    width: 0,
    height: 0,
    eventDefinitionType: "",
    flowableType: "",
    propertyPackages: [],
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 200);

    return () => clearTimeout(timeout);
  }, [searchQuery]);
  const [currentPage, setCurrentPage] = useState(1);

  const allElements = stencilConfig.stencils || [];
  const filteredElements: ElementMetadata[] = useMemo(() => {
    const reversedBackend = [...backendElements].reverse();
    const merged = [...reversedBackend, ...allElements] as ElementMetadata[];

    return merged.filter(
      (element) =>
        t(element.title).toLowerCase().includes(debouncedQuery.toLowerCase()) &&
        element.type === "node"
    );
  }, [allElements, backendElements, debouncedQuery, t, modalOpen]);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow relative">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-semibold text-gray-800">
            {t("Elements")}
          </h1>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full border-b">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "elements"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              } cursor-pointer`}
              onClick={() => {
                setActiveTab("elements");
                setSearchQuery("");
              }}
            >
              {t("Elements")}
            </button>

            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "properties"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              } cursor-pointer`}
              onClick={() => {
                setActiveTab("properties");
                setSearchQuery("");
              }}
            >
              {t("Properties")}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 flex-1 overflow-hidden">
        <div className="col-span-2 flex flex-col items-start space-y-4 p-4 bg-gray-50 border-r truncate">
          <input
            type="text"
            placeholder={t("Search", {
              item:
                activeTab === "elements"
                  ? t("elements_singular")
                  : t("properties_singular"),
            })}
            className="px-2 py-1 text-black rounded border w-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>

        <div className="col-span-10 flex flex-col overflow-y-auto p-4 h-full">
          {activeTab === "elements" ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">
                  {filteredElements?.length > 1
                    ? t("There_plural", { count: filteredElements.length })
                    : t("There_singular", {
                        count: filteredElements.length,
                      })}{" "}
                  {filteredElements?.length > 1
                    ? t("elements_plural")
                    : t("elements_singular")}
                </span>
              </div>
              <div className="flex flex-wrap gap-5 w-full justify-start">
                {filteredElements.length ? (
                  filteredElements.map((element, index) => (
                    <div key={index} className="w-[290px]">
                      <SingleElement
                        element={element}
                        setChanged={setChanged}
                        changed={changed}
                      />
                    </div>
                  ))
                ) : (
                  <p className="h-[75vh]"></p>
                )}
              </div>
            </>
          ) : (
            <Properties
              t={t}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              debouncedQuery={debouncedQuery}
              modalOpen={modalOpen}
            />
          )}
        </div>
      </div>
      <>
        <div className="fixed bottom-12 right-8 z-110">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-4 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <span className="text-xl">
              <PlusIcon className="w-6 h-6  " />
            </span>
          </button>
        </div>

        {modalOpen && activeTab === "elements" ? (
          <CRUD
            activeTab={activeTab}
            element={element}
            onClose={() => setModalOpen(false)}
            action={Actions.CREATE}
          />
        ) : modalOpen && activeTab === "properties" ? (
          <CRUD
            activeTab={activeTab}
            element={property}
            onClose={() => setModalOpen(false)}
            action={Actions.CREATE}
          />
        ) : null}
      </>
    </div>
  );
};

export default withTranslation()(Elements);
