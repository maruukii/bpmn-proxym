import { useState, useEffect, useRef } from "react";
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { withTranslation } from "react-i18next";
import ReactDOM from "react-dom";
import {
  useBranchesMutation,
  useFunctionsMutation,
  useGroupesQuery,
} from "../../../hooks/queries/useAssignmentsQuery";
import { axiosInstance } from "../../../config/axiosInstance";
import { data } from "react-router-dom";

type AutoSuggestInputProps = {
  searchCategory?: "branches" | "functions";
  selectedItems: BranchesMetadata[] | FunctionsMetadata[];
  setSelectedItems: (items: BranchesMetadata[]) => void;
  modalValue?: Assignees;
  multiple?: boolean;
  placeholder?: string;
  t: (key: string) => string;
};

const AutoSuggestInput: React.FC<AutoSuggestInputProps> = ({
  selectedItems,
  setSelectedItems,
  modalValue,
  multiple = false,
  placeholder,
  searchCategory,
  t,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<BranchesMetadata[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const branchesMutation = useBranchesMutation();
  const functionsMutation = useFunctionsMutation();
  // // const { data } = useGroupesQuery(modalValue?.candidateGroups as string);
  useEffect(() => {
    const fetchBranches = async () => {
      if (searchCategory === "branches" && modalValue?.candidateGroups) {
        await axiosInstance
          .get(
            `/configuration/modeler/rest/models/groups?branches=${modalValue.candidateGroups
              .split(",")
              .map((branch) => branch.split("::")[1])
              .join(",")}&functions=`
          )
          .then((data) => {
            setSelectedItems(data?.data?.branches);
          })
          .catch(() => setSelectedItems([]));
      } else setSelectedItems([]);
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    if (!inputValue) {
      setSuggestions([]);
      return;
    }
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(async () => {
      const search: BranchesFunctionsSearch = {
        category: searchCategory || "branches",
        lang: localStorage.getItem("I18N_LANGUAGE")?.split("-")[0] || "en",
        code: /^\d+$/.test(inputValue) ? inputValue : undefined,
        name: !/^\d+$/.test(inputValue) ? inputValue : undefined,
        page: 0,
        size: 5,
      };
      const mutation =
        searchCategory === "functions" ? functionsMutation : branchesMutation;

      mutation.mutate(search, {
        onSuccess: (data) => {
          const filtered = data?.filter(
            (item) => !selectedItems.some((s) => s.id === item.id)
          );
          setSuggestions(filtered || []);
        },
        onError: (error) => {
          console.error("Error fetching suggestions:", error);
        },
      });
    }, 300);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [inputValue, selectedItems]);

  const addItem = (item: BranchesMetadata | FunctionsMetadata) => {
    if (multiple) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems([item]);
    }
    setInputValue("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const removeItem = (id: string) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    setTimeout(() => {
      if (
        document.activeElement &&
        !containerRef.current?.contains(document.activeElement)
      ) {
        setShowSuggestions(false);
      }
    }, 100);
  };
  return (
    <div className="relative" onBlur={handleBlur} ref={containerRef}>
      <div className="flex flex-wrap gap-1 border rounded px-2 py-1 min-h-[80px] items-center">
        {selectedItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-sm"
          >
            <span>{item.name}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="ml-1 focus:outline-none"
              type="button"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        {!(!multiple && selectedItems.length === 1) && (
          <input
            type="text"
            className="flex-grow border-none outline-none py-1 px-1 text-sm"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
          />
        )}
      </div>

      {showSuggestions && inputValue.trim() !== "" && (
        <ul className="absolute z-50 w-full bg-white border border-gray-300 rounded mt-1 max-h-48 overflow-auto shadow-lg">
          {branchesMutation.isPending || functionsMutation.isPending ? (
            <li className="px-3 py-2 text-gray-500 italic">
              {t("Searching...")}
            </li>
          ) : suggestions.length > 0 ? (
            suggestions.map((item) => (
              <li
                key={item.id}
                className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  addItem(item);
                }}
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-500 italic">
              {t(`No matched ${searchCategory} were found`)}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

const AssignmentModal: React.FC<AssignmentModalProps> = ({
  prop,
  onCancel,
  onSave,
  modalValue,
  t,
  audience,
}) => {
  const [activeTab, setActiveTab] = useState<
    "identity" | "fixed" | "bankerise-groups"
  >(audience === "ADMINISTRATION" ? "bankerise-groups" : "fixed");
  const [selectedOption, setSelectedOption] = useState("initiator");

  const [singleUser, setSingleUser] = useState<BranchesMetadata[]>([]);
  const [candidateUsers, setCandidateUsers] = useState<BranchesMetadata[]>([]);
  const [candidateGroups, setCandidateGroups] = useState<BranchesMetadata[]>(
    []
  );
  const [assignee, setAssignee] = useState<string>(modalValue?.assignee || "");
  const [fixedCandidateUsers, setFixedCandidateUsers] = useState<string[]>(
    modalValue?.candidateUsers?.split(",") || [""]
  );
  const [fixedCandidateGroups, setFixedCandidateGroups] = useState<string[]>(
    modalValue?.candidateGroups?.split(",") || [""]
  );

  const [branches, setBranches] = useState<BranchesMetadata[]>([]);
  const [functions, setFunctions] = useState<FunctionsMetadata[]>([]);
  const [initiator, setInitiator] = useState<boolean>(false);
  const addFixedRow = (
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => [...prev, ""]);
  };

  const removeFixedRow = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number
  ) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  const updateFixedRow = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    value: string
  ) => {
    setter((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const handleFixedValues = () => {
    const userValues = fixedCandidateUsers.map((user) => user).join(",");
    const groupValues = fixedCandidateGroups.map((group) => group).join(",");
    const assigneeValues = {
      assignmentType: "fixed",
      type: "",
      assignee: assignee,
      candidateUsers: userValues,
      candidateGroups: groupValues,
      allowInitiator: initiator,
    };
    onSave(assigneeValues);
  };
  const handleBankeriseGroups = async () => {
    const userValues = fixedCandidateUsers.join(",");
    const groupValues = branches
      .map((group) => `branch::${group.code}`)
      .join(",");
    const assigneeValues = {
      assignmentType: "bankerise-groups",
      type: "",
      assignee: assignee,
      candidateUsers: userValues,
      candidateGroups: groupValues,
    };
    onSave(assigneeValues);
  };

  const handleIdentityStore = () => {
    console.log(selectedOption);
    let assigneeValues: Assignees = {
      assignmentType: "identity",
      allowInitiator: initiator,
    };

    switch (selectedOption) {
      case "initiator":
        assigneeValues = { ...assigneeValues, assignee: "$INITIATOR" };
        break;

      case "singleUser":
        assigneeValues = { ...assigneeValues, assignee: singleUser[0].name };
        break;

      case "candidateUsers":
        if (candidateUsers?.length > 0) {
          assigneeValues = {
            ...assigneeValues,
            candidateUsers: candidateUsers.map((user) => user.code).join(","),
          };
        }
        break;

      case "candidateGroups":
        if (candidateGroups?.length > 0) {
          assigneeValues = {
            ...assigneeValues,
            candidateGroups: candidateGroups
              .map((group) => group.code)
              .join(","),
          };
        }
        break;
    }
    onSave(assigneeValues);
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-100 overflow-auto ">
      <div className="w-[70vw] max-h-[95vh] p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-auto">
        <h2 className="text-md font-semibold mb-4">{`${t(prop.title)} : `}</h2>
        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "identity"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("identity")}
          >
            {t("Identity Store")}
          </button>
          {audience !== "ADMINISTRATION" && (
            <button
              className={`px-4 py-2 font-semibold ml-4 ${
                activeTab === "fixed"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("fixed")}
            >
              {t("Fixed Value")}
            </button>
          )}
          {audience === "ADMINISTRATION" && (
            <button
              className={`px-4 py-2 font-semibold ml-4 ${
                activeTab === "bankerise-groups"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("bankerise-groups")}
            >
              {t("Bankerise Groups")}
            </button>
          )}
        </div>

        {/* Tab Content */}
        {activeTab === "identity" && (
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">
                {t("Select Type")}
              </label>
              <select
                className="w-full border rounded px-3 py-2"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="initiator">
                  {t("Assigned to process initiator")}
                </option>
                <option value="singleUser">
                  {t("Assigned to single user")}
                </option>
                <option value="candidateUsers">{t("Candidate Users")}</option>
                <option value="candidateGroups">{t("Candidate Groups")}</option>
              </select>
            </div>
            {/* 
            {selectedOption === "option1" && (
              <div className="text-gray-700 italic">
                {t("No additional input needed")}
              </div>
            )} */}

            {selectedOption === "singleUser" && (
              <>
                <label className="block font-medium mb-1">
                  {t("Assignee")}
                </label>
                <AutoSuggestInput
                  selectedItems={singleUser}
                  setSelectedItems={setSingleUser}
                  multiple={false}
                  placeholder={t("Search user...")}
                  t={t}
                />
              </>
            )}

            {selectedOption === "candidateUsers" && (
              <>
                <label className="block font-medium mb-1">
                  {t("Candidate Users")}
                </label>
                <AutoSuggestInput
                  selectedItems={candidateUsers}
                  setSelectedItems={setCandidateUsers}
                  multiple={true}
                  placeholder={t("Search users...")}
                  t={t}
                />
              </>
            )}

            {selectedOption === "candidateGroups" && (
              <>
                <label className="block font-medium mb-1">
                  {t("Candidate Groups")}
                </label>
                <AutoSuggestInput
                  selectedItems={candidateGroups}
                  setSelectedItems={setCandidateGroups}
                  multiple={true}
                  placeholder={t("Search groups...")}
                  t={t}
                />
              </>
            )}
            <>
              <input
                type="checkbox"
                className="mr-2 scale-120"
                onChange={(e) => setInitiator(e.target.checked)}
              />
              <label className="ml-2">
                {t("Allow process initiator to complete task")}
              </label>
            </>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={onCancel}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xl cursor-pointer"
              >
                {t("Cancel")}
              </button>
              <button
                onClick={handleIdentityStore}
                className="bg-green-600 text-white px-2 py-1 rounded text-xl disabled:opacity-50 cursor-pointer"
              >
                {t("Select")}
              </button>
            </div>
          </div>
        )}

        {(activeTab === "fixed" || activeTab === "bankerise-groups") && (
          <div className="space-y-6">
            {/* Fixed Assignees */}
            <div>
              <label className="block font-medium mb-1">{t("Assignee")}</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={assignee}
                type="text"
                placeholder="Assignee"
                onChange={(e) => setAssignee(e.target.value)}
              />
            </div>

            {/* Fixed Candidate Users */}
            <div>
              <label className="block font-medium mb-1">
                {t("Candidate Users")}
              </label>
              {fixedCandidateUsers.map((val, i) => (
                <div key={i} className="flex gap-2 items-center mb-1">
                  <input
                    type="text"
                    className="flex-grow border rounded px-3 py-2"
                    value={val}
                    onChange={(e) =>
                      updateFixedRow(setFixedCandidateUsers, i, e.target.value)
                    }
                    placeholder={t("Candidate Users")}
                  />
                  {fixedCandidateUsers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFixedRow(setFixedCandidateUsers, i)}
                      className="text-red-500 hover:text-red-700 p-1"
                      aria-label="Remove row"
                    >
                      <MinusIcon className="w-5 h-5" />
                    </button>
                  )}
                  {i === fixedCandidateUsers.length - 1 && (
                    <button
                      type="button"
                      onClick={() => addFixedRow(setFixedCandidateUsers)}
                      className="text-green-500 hover:text-green-700 p-1"
                      aria-label="Add row"
                    >
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {activeTab === "fixed" && (
              <div>
                <label className="block font-medium mb-1">
                  {t("Candidate Groups")}
                </label>
                {fixedCandidateGroups.map((val, i) => (
                  <div key={i} className="flex gap-2 items-center mb-1">
                    <input
                      type="text"
                      className="flex-grow border rounded px-3 py-2"
                      value={val}
                      onChange={(e) =>
                        updateFixedRow(
                          setFixedCandidateGroups,
                          i,
                          e.target.value
                        )
                      }
                      placeholder={t("Candidate Groups")}
                    />
                    {fixedCandidateGroups.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeFixedRow(setFixedCandidateGroups, i)
                        }
                        className="text-red-500 hover:text-red-700 p-1"
                        aria-label="Remove row"
                      >
                        <MinusIcon className="w-5 h-5" />
                      </button>
                    )}
                    {i === fixedCandidateGroups.length - 1 && (
                      <button
                        type="button"
                        onClick={() => addFixedRow(setFixedCandidateGroups)}
                        className="text-green-500 hover:text-green-700 p-1"
                        aria-label="Add row"
                      >
                        <PlusIcon className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                <>
                  <input
                    type="checkbox"
                    className="mr-2 mt-5 scale-120"
                    onChange={(e) => setInitiator(e.target.checked)}
                  />
                  <label className="ml-2">
                    {t("Allow process initiator to complete task")}
                  </label>
                </>
              </div>
            )}

            {activeTab === "bankerise-groups" && (
              <div className="p-2 flex flex-row">
                <div className="flex-1 mr-2">
                  <label className="block font-medium mb-1 text-lg">
                    {t("Branches")}
                  </label>
                  <AutoSuggestInput
                    searchCategory="branches"
                    selectedItems={branches}
                    setSelectedItems={setBranches}
                    modalValue={modalValue}
                    multiple={true}
                    placeholder={t("Search branches ...")}
                    t={t}
                  />
                </div>
                <div className="flex-1 mr-2">
                  <label className="block font-medium mb-1 text-lg">
                    {t("Functions")}
                  </label>
                  <AutoSuggestInput
                    searchCategory="functions"
                    selectedItems={functions}
                    setSelectedItems={setFunctions}
                    multiple={true}
                    placeholder={t("Search functions ...")}
                    t={t}
                  />
                </div>
              </div>
            )}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={onCancel}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xl cursor-pointer"
              >
                {t("Cancel")}
              </button>
              <button
                onClick={
                  () =>
                    activeTab === "bankerise-groups"
                      ? handleBankeriseGroups()
                      : handleFixedValues()
                  // assignedSingleUser: singleUser[0] || null,
                  // candidateUsers,
                  // candidateGroups,
                  // fixedAssignees,
                  // fixedCandidateUsers,
                  // fixedCandidateGroups,
                }
                className="bg-green-600 text-white px-2 py-1 rounded text-xl disabled:opacity-50 cursor-pointer"
              >
                {t("Select")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default withTranslation()(AssignmentModal);
