import { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import {
  PencilIcon,
  XMarkIcon,
  CheckCircleIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { Actions } from "../../../../CommonData/Enums";
import properties from "../../../../tasks/properties.json"; // Load properties file
import { axiosElements } from "../../../../config/axiosInstance";
import { toast } from "react-toastify";

type PropertySuggestion = {
  name: string;
  title: string;
};

type Props = {
  selected: string[];
  setSelected: (values: string[]) => void;
  t: (key: string) => string;
};

const PropertyAutoSuggest = ({ selected, setSelected, t }: Props) => {
  const [elementReady, setElementReady] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosElements.get("/properties");
        setBackendProperties([...response.data, ...backendProperties]);
      } catch (error) {
        console.error("Error fetching elements:", error);
      }
      setElementReady(true);
    };
    fetchData();
  }, []);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<PropertySuggestion[]>([]);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [backendProperties, setBackendProperties] = useState<
    PropertiesMetadata[]
  >((properties.propertyPackages as [PropertiesMetadata]) || []);
  const allSuggestions: PropertySuggestion[] = backendProperties.map((p) => ({
    name: p.name || "",
    title: p!.properties![0].title ?? "",
  }));

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!input) return setSuggestions([]);

    debounceRef.current = setTimeout(() => {
      const filtered = allSuggestions.filter(
        (item) =>
          t(item.title).toLowerCase().includes(input.toLowerCase()) &&
          !selected.includes(item.name)
      );
      setSuggestions(filtered);
    }, 200);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [input, selected]);

  const addItem = (item: PropertySuggestion) => {
    if (!selected.includes(item.name)) {
      setSelected([...selected, item.name]);
      setInput("");
      setSuggestions([]);
    }
  };

  const removeItem = (name: string) => {
    setSelected(selected.filter((item) => item !== name));
  };

  const handleBlur = () => {
    setTimeout(() => setSuggestions([]), 100);
  };

  return (
    <div className="relative" ref={ref} onBlur={handleBlur}>
      <div className="flex flex-wrap gap-2 border rounded px-2 py-1 min-h-[50px] items-center">
        {elementReady &&
          selected.map((name) => {
            const match = allSuggestions.find((s) => s.name === name);
            return (
              <div
                key={name}
                className="flex items-center bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-sm"
              >
                <span>{match ? t(match.title) : name}</span>
                <button
                  onClick={() => removeItem(name)}
                  type="button"
                  className="ml-1"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            );
          })}

        <input
          type="text"
          className="flex-grow border-none outline-none py-1 px-1 text-sm"
          placeholder={t("Add property")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-gray-300 rounded mt-1 max-h-48 overflow-auto shadow-lg">
          {suggestions.map((item, i) => (
            <li
              key={i}
              onMouseDown={() => addItem(item)}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {t(item.title)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ModalView: React.FC<{
  element: ElementMetadata | PropertiesMetadata;
  onClose: () => void;
  t: (key: string) => string;
  activeTab: "elements" | "properties";
  action: Actions;
}> = ({ element, onClose, t, action, activeTab }) => {
  const [editMode, setEditMode] = useState(
    action === Actions.CREATE ? true : false
  );
  const [localElement, setLocalElement] = useState(element);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const handleChange = (key: keyof SingleElementMetadata, value: any) => {
    setLocalElement((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLocalElement((prevState) => ({
          ...prevState,
          ElementImage: reader.result,
          ImageName: file.name,
        }));
      };
    }
  };
  const handleSave = async () => {
    const requiredElementFields = [
      "type",
      "id",
      "title",
      "description",
      "groups",
      "icon",
      "width",
      "height",
    ];
    const requiredPropertyFields = ["name", "properties"];
    const missingFields = (
      activeTab === "properties"
        ? requiredPropertyFields
        : requiredElementFields
    ).filter((field) => {
      const value = (localElement as any)[field];

      if (value === undefined || value === null) return true;

      if (field === "icon") {
        if (
          (localElement as any).ElementImage === undefined ||
          (localElement as any).ElementImage === null
        ) {
          return true;
        }
      } else if (field === "properties") {
        if (!Array.isArray(value) || value.length === 0) return true;
        for (const prop of value) {
          if (
            !prop.title ||
            typeof prop.title !== "string" ||
            prop.title.trim() === ""
          ) {
            return true;
          }
          if (
            !prop.type ||
            typeof prop.type !== "string" ||
            prop.type.trim() === ""
          ) {
            return true;
          }
          if (
            !prop.id ||
            typeof prop.id !== "string" ||
            prop.id.trim() === ""
          ) {
            return true;
          }
        }
      } else if (
        value === 0 ||
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "object" && Object.keys(value).length === 0)
      ) {
        return true;
      }

      return false;
    });

    if (missingFields.length > 0) {
      toast.error(
        `Please fill all required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    try {
      const endpoint =
        activeTab === "elements" ? "/elements/new" : "/properties/new";

      const response = await axiosElements.post(endpoint, localElement);

      const successMessage =
        activeTab === "elements" ? response?.data?.title : response?.data?.name;

      toast.success(successMessage);

      if (action === Actions.CREATE) onClose();
      setEditMode(false);
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  const handleDelete = async () => {
    if (
      activeTab === "elements" &&
      typeof localElement === "object" &&
      localElement !== null &&
      "_id" in localElement &&
      localElement?._id !== ""
    ) {
      await axiosElements
        .delete(`/elements/delete/${localElement?._id}`)
        .then((data) => {
          toast.success(data?.data?.title);
          console.log(data);
        });
    } else if (
      activeTab === "properties" &&
      typeof localElement === "object" &&
      localElement !== null &&
      "_id" in localElement &&
      localElement?._id !== ""
    ) {
      await axiosElements
        .delete(`/properties/delete/${localElement?._id}`)
        .then((data) => {
          toast.success(data?.data?.name);
          console.log(data);
        });
    }
    onClose();
  };
  const handleUpdate = async () => {
    if (
      activeTab === "elements" &&
      typeof localElement === "object" &&
      localElement !== null &&
      "_id" in localElement &&
      localElement?._id !== ""
    ) {
      await axiosElements
        .put(`/elements/update/${localElement?._id}`, localElement)
        .then((data) => {
          toast.success(data?.data?.title);
          console.log(data);
        });
    } else if (
      activeTab === "properties" &&
      typeof localElement === "object" &&
      localElement !== null &&
      "_id" in localElement &&
      localElement?._id !== ""
    ) {
      console.log(localElement);

      await axiosElements
        .put(`/properties/update/${localElement?._id}`, localElement)
        .then((data) => {
          toast.success(data?.data?.name);
          console.log(data);
        });
    }
    onClose();
  };
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-500">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-[600px] max-h-[90vh] overflow-y-auto relative">
        <h2 className="text-3xl font-semibold mb-4 ">
          {t(action) +
            " " +
            (activeTab === "elements"
              ? t("elements_singular")
              : t("properties_singular"))}
        </h2>
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition duration-300 cursor-pointer"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        {action !== Actions.CREATE && (
          <div className="absolute top-15 right-3 flex items-center space-x-2">
            <button
              className="flex items-center space-x-2 bg-blue-100 text-blue-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md hover:bg-blue-200 transition duration-300 cursor-pointer"
              onClick={() => setEditMode(!editMode)}
            >
              <PencilIcon className="w-6 h-6" />
              <span>{t("Modify")}</span>
            </button>

            {/* Delete Button */}
            <button
              className="flex items-center bg-red-100 text-red-600 font-semibold text-sm px-3 py-1 rounded-full shadow-md hover:bg-red-200 transition duration-300 cursor-pointer"
              onClick={() => setDeleteModal(true)}
            >
              <XMarkIcon className="w-6 h-6" />
              <span>{t("Delete")}</span>
            </button>
          </div>
        )}
        <div className="mt-10 space-y-4">
          {Object.entries(localElement)
            .filter(
              ([key]) =>
                ![
                  "view",
                  "roles",
                  "hiddenPropertyPackages",
                  "type",
                  "__v",
                  "_id",
                  "ElementImage",
                  "ImageName",
                  "bpmnType",
                ].includes(key)
            )
            .map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm font-medium capitalize text-gray-700">
                  {key !== "properties" ? key : ""}{" "}
                  {![
                    "propertyPackages",
                    "flowableType",
                    "eventDefinitionType",
                    "properties",
                    "modifiedAt",
                    "createdAt",
                  ].includes(key) ? (
                    <span className="text-red-500 text-xl">*</span>
                  ) : (
                    ""
                  )}
                </label>
                {key === "icon" &&
                (editMode ||
                  (localElement &&
                    "icon" in localElement &&
                    localElement.icon === "")) ? (
                  <div className="flex flex-row space-x-2 items-center">
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      required={true}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      <ArrowUpTrayIcon className="w-6 h-6" />
                    </label>{" "}
                  </div>
                ) : key === "properties" && Array.isArray(value) ? (
                  <div className="space-y-3">
                    {value.map((prop: SinglePropertyMetadata, idx: number) => (
                      <div key={idx} className="grid grid-cols-1 gap-2">
                        {["id", "title", "type", "value", "description"].map(
                          (field) => (
                            <div key={field} className="flex flex-col">
                              <label className="text-sm font-medium text-gray-700 capitalize">
                                {t(field)}
                                {!["value", "description"].includes(field) ? (
                                  <span className="text-red-500 text-xl">
                                    *
                                  </span>
                                ) : (
                                  ""
                                )}{" "}
                              </label>
                              {editMode ? (
                                <input
                                  type="text"
                                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                                  value={(prop as any)[field] ?? ""}
                                  onChange={(e) => {
                                    const updated = [...value];
                                    updated[idx] = {
                                      ...updated[idx],
                                      [field]: e.target.value,
                                    };
                                    handleChange(
                                      "properties" as keyof SingleElementMetadata,
                                      updated
                                    );
                                  }}
                                />
                              ) : (
                                <div className="text-sm text-gray-800 py-1">
                                  {t((prop as any)[field] ?? "—")}
                                </div>
                              )}
                            </div>
                          )
                        )}

                        {/* Checkbox for popular */}
                        <div className="flex items-center gap-2 mt-1">
                          <label className="text-sm font-medium text-gray-700 capitalize">
                            {t("popular")}
                          </label>
                          {editMode ? (
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-blue-600"
                              checked={!!prop.popular}
                              onChange={(e) => {
                                const updated = [...value];
                                updated[idx] = {
                                  ...updated[idx],
                                  popular: e.target.checked,
                                };
                                handleChange(
                                  "properties" as keyof SingleElementMetadata,
                                  updated
                                );
                              }}
                            />
                          ) : (
                            <div className="text-sm text-gray-800">
                              {prop.popular ? t("Yes") : t("No")}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : key === "propertyPackages" &&
                  editMode &&
                  localElement &&
                  "propertyPackages" in localElement ? (
                  <PropertyAutoSuggest
                    selected={localElement.propertyPackages ?? []}
                    setSelected={(values) =>
                      handleChange(
                        "propertyPackages" as keyof SingleElementMetadata,
                        values
                      )
                    }
                    t={t}
                  />
                ) : editMode && key !== "icon" ? (
                  <input
                    className={`border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 ${
                      ["createdAt", "modifiedAt"].includes(key)
                        ? "bg-gray-100 cursor-not-allowed"
                        : ""
                    }`}
                    type={["height", "width"].includes(key) ? "number" : "text"}
                    value={value != "" ? (value as string) : ""}
                    required={true}
                    disabled={["createdAt", "modifiedAt"].includes(key)}
                    onChange={(e) =>
                      handleChange(
                        key as keyof SingleElementMetadata,
                        ["height", "width"].includes(key)
                          ? Number(e.target.value)
                          : e.target.value
                      )
                    }
                  />
                ) : key === "icon" &&
                  localElement &&
                  "icon" in localElement &&
                  localElement.icon !== "" ? (
                  typeof localElement.icon === "object" &&
                  localElement.icon?.ImageLink ? (
                    <img
                      src={localElement.icon.ImageLink}
                      alt="icon"
                      className={`h-${
                        "height" in localElement ? localElement?.height : "40"
                      } w-${
                        "width" in localElement ? localElement?.width : "40"
                      } object-contain`}
                    />
                  ) : typeof localElement.icon === "string" ? (
                    <img
                      src={`/icons/${localElement.icon}`}
                      alt="icon"
                      className="h-10 w-10 object-contain"
                    />
                  ) : null
                ) : (
                  <div className="text-sm text-gray-800 py-1">
                    {Array.isArray(value) && value?.length > 0
                      ? value.join(", ")
                      : Array.isArray(value) && value?.length == 0
                      ? "—"
                      : t(value) || "—"}
                  </div>
                )}
              </div>
            ))}
        </div>

        {editMode || action === Actions.CREATE ? (
          <button
            className="cursor-pointer mt-4 w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
            onClick={
              editMode && action !== Actions.CREATE ? handleUpdate : handleSave
            }
          >
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            {t(action)}
          </button>
        ) : undefined}
      </div>
      {deleteModal && (
        <DeleteConfirmationModal
          show={deleteModal}
          t={t}
          onClose={() => setDeleteModal(false)}
          onConfirm={handleDelete}
          type={
            activeTab === "elements"
              ? "elements_singular"
              : "properties_singular"
          }
          itemName={
            activeTab === "elements"
              ? (localElement as ElementMetadata).title
              : (localElement as PropertiesMetadata).name
          }
        />
      )}
    </div>
  );
};

export default withTranslation()(ModalView);
import React from "react";

interface DeleteConfirmationModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: string;
  itemName?: string;
  t: any;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  show,
  onClose,
  onConfirm,
  type,
  itemName,
  t,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {t("Delete")} {t(type)}
        </h2>
        <p className="text-gray-600 mb-6">
          {t("DeleteModal_description", {
            item: t(type),
            name: itemName || "",
          })}
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 cursor-pointer"
          >
            {t("Cancel")}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
          >
            {t("Delete")}
          </button>
        </div>
      </div>
    </div>
  );
};
