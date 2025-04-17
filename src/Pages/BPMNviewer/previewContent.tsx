interface PreviewContentProps {
  t: any;
  previewData: string | null;
  previewType: "xml" | "json" | null;
  closePreviewModal: () => void;
}
import { withTranslation } from "react-i18next";

export const previewContent: React.FC<PreviewContentProps> = ({
  previewData,
  previewType,
  closePreviewModal,
  t,
}) => {
  return (
    <div className="fixed inset-40 flex justify-center items-start bg-transparent z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl h-[80vh] overflow-y-auto shadow-xl z-60">
        <h2 className="text-xl font-bold mb-4">
          {previewType === "xml" ? t("XML Preview") : t("JSON Preview")}
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto whitespace-pre-wrap text-sm text-gray-800 h-[64vh]">
          {previewData}
        </pre>
        <button
          onClick={closePreviewModal}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          {t("Close")}
        </button>
      </div>
    </div>
  );
};
export default withTranslation()(previewContent);
