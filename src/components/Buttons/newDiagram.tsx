import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewDiagram } from "../../utils/createNewDiagram";
import ActionButton from "../UI/components/actionButton";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import SaveAndDuplicate from "../modals/saveAndDuplicate";

const NewDiagram: React.FC = () => {
  const navigate = useNavigate();
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed bottom-24 right-8 z-100">
        <button
          onClick={() => setModelOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-4 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <span className="text-xl">
            <PlusIcon className="w-6 h-6  " />
          </span>
        </button>
      </div>

      {/* Modal Form */}
      {modelOpen && (
        <SaveAndDuplicate
          setModalOpen={setModelOpen}
          navigate={navigate}
          action={"Create"}
        />
      )}
    </>
  );
};

export default NewDiagram;
