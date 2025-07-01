import { useEffect, useMemo, useState } from "react";
import propertiesConfig from "../../../tasks/properties.json";
import CRUD from "../../../components/UI/Single Element/CRUD";
import { Actions } from "../../../CommonData/Enums";
import { axiosElements } from "../../../config/axiosInstance";

const PAGE_SIZE = 10;

type Props = {
  t: any;
  debouncedQuery: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  modalOpen?: boolean;
};

const Properties = ({
  t,
  debouncedQuery,
  currentPage,
  setCurrentPage,
  modalOpen,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [backendProperties, setBackendProperties] = useState<
    PropertiesMetadata[]
  >([]);
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosElements.get("/properties");
        setBackendProperties(response.data);
      } catch (error) {
        console.error("Error fetching elements:", error);
      }
    };
    fetchData();
  }, [open, modalOpen]);
  const properties = propertiesConfig.propertyPackages || [];
  const allProperties = useMemo(() => {
    const reversedBackend = [...backendProperties].reverse();
    const merged = [...reversedBackend, ...properties] as PropertiesMetadata[];
    return merged.flatMap((group) =>
      group.properties?.map((prop) => ({
        ...prop,
        groupName: group.name,
        _id: group?._id || "",
      }))
    );
  }, [properties, backendProperties, debouncedQuery, t, open]);

  // Filter based on search
  const filtered = useMemo(() => {
    if (!debouncedQuery) return allProperties;
    return allProperties.filter((prop) =>
      [prop?.id, prop?.title, prop?.groupName, prop?.description, prop?.value]
        .filter(Boolean)
        .some((field) => field?.toLowerCase().includes(debouncedQuery))
    );
  }, [debouncedQuery, allProperties]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="w-full overflow-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">
          {filtered.length > 1
            ? t("There_plural", { count: filtered.length })
            : t("There_singular", { count: filtered.length })}{" "}
          {filtered.length > 1
            ? t("properties_plural")
            : t("properties_singular")}
        </span>
      </div>

      <div className="shadow border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full table-auto text-sm text-left bg-white">
          <thead className="bg-gray-100 text-gray-700 uppercase font-medium">
            <tr>
              <th className="px-4 py-3 border-b">{t("ID")}</th>
              <th className="px-4 py-3 border-b">{t("Title")}</th>
              <th className="px-4 py-3 border-b">{t("Group Name")}</th>
              <th className="px-4 py-3 border-b">{t("Value")}</th>
              <th className="px-4 py-3 border-b">{t("Description")}</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((prop, i) => (
              <tr
                key={i}
                className="hover:bg-blue-50 transition hover:cursor-pointer"
                onClick={() => {
                  setSelectedProperty({
                    _id: prop?._id || "",
                    name: prop?.groupName,
                    properties: [prop],
                  });
                  setOpen(true);
                }}
              >
                <td className="px-4 py-3 border-b text-gray-800">{prop?.id}</td>
                <td className="px-4 py-3 border-b">{t(prop?.title)}</td>
                <td className="px-4 py-3 border-b text-blue-700 font-medium">
                  {t(prop?.groupName)}
                </td>
                <td className="px-4 py-3 border-b">{prop?.value ?? "-"}</td>
                <td className="px-4 py-3 border-b text-gray-600">
                  {t(prop?.description) ?? "-"}
                </td>
              </tr>
            ))}
            {!paginated.length && (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-400">
                  {t("No results found")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
      {open && (
        <CRUD
          activeTab="properties"
          element={selectedProperty}
          onClose={() => {
            setOpen(false);
            setSelectedProperty(null);
          }}
          action={Actions.MODIFY}
        />
      )}
    </div>
  );
};

export default Properties;
