import { withTranslation } from "react-i18next";
import { axiosInstance } from "../../config/axiosInstance";

const DeleteModal: React.FC<DeleteModalProps> = ({
  setModalOpen,
  navigate,
  id,
  modelName,
}) => {
  const handleDelete = async () => {
    try {
      await axiosInstance
        .delete(`/configuration/modeler/rest/models/${id}?cascade=false`)
        .then(() => {
          setModalOpen(false);
          navigate("/processes");
        });
    } catch (error) {
      console.error("Error deleting BPMN:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100  bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-100">
        <h2 className="text-3xl font-semibold mb-4 bg-gray-200 text-center">
          Confirm Deletion
        </h2>
        <h3 className="text-xl mb-5 text-center">
          Are you sure you want to delete the business process model "
          {modelName}"? This action cannot be undone.
        </h3>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(DeleteModal);
