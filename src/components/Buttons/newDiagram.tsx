import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewDiagram } from "../../utils/createNewDiagram";

interface NewDiagramProps {
  setXml: (xml: string) => void;
  setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modelOpen: boolean;
}

const NewDiagram: React.FC<NewDiagramProps> = ({
  setXml,
  setModelOpen,
  modelOpen,
}) => {
  const dispatch = useDispatch();

  const [settings, setSettings] = useState({
    id: "",
    name: "",
    description: "",
  });

  const handleCreation = async () => {
    if (!settings.id || !settings.name) {
      alert("ID and Name are required.");
      return;
    }
    try {
      await createNewDiagram(setXml, dispatch, settings);
      setModelOpen(false);
    } catch (error) {
      console.error("Error creating diagram:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Floating Plus Button styled same as uploader and positioned above it */}
      <div className="fixed bottom-24 right-8 z-30">
        <button
          onClick={() => setModelOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-4 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <span className="text-xl">➕</span>
        </button>
      </div>

      {/* Modal Form */}
      {modelOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setModelOpen(false)} // close modal on outside click
        >
          <div
            className="bg-white p-6 rounded-xl shadow-xl w-96 space-y-4 border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()} // prevent modal content clicks from closing
          >
            {/* Close button */}
            <button
              onClick={() => {
                setModelOpen(false);
                setSettings({ id: "", name: "", description: "" });
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ❌
            </button>

            <h2 className="text-xl font-semibold text-center">New Diagram</h2>

            <input
              type="text"
              name="id"
              placeholder="ID (required)"
              value={settings.id}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name (required)"
              value={settings.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={settings.description}
              onChange={handleChange}
              className="w-full border p-2 rounded resize-none"
              rows={3}
            />

            <button
              onClick={handleCreation}
              className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded font-semibold transition"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewDiagram;
