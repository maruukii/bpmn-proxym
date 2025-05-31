import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import SaveAndDuplicate from "../modals/saveAndDuplicate";
import { Actions } from "../../CommonData/Enums";

const NewDiagram: React.FC = () => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed bottom-24 right-8 z-110">
        <button
          onClick={() => setModelOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-4 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <span className="text-xl">
            <PlusIcon className="w-6 h-6  " />
          </span>
        </button>
      </div>

      {modelOpen && (
        <SaveAndDuplicate setModalOpen={setModelOpen} action={Actions.CREATE} />
      )}
    </>
  );
};

export default NewDiagram;
