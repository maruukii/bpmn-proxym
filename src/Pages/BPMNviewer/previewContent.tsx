import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setFileContentCopySuccess } from "../../store/file/fileSlice";
interface PreviewContentProps {
  t: any;
  previewData: string | null;
  previewType: "xml" | "json" | null;
  closePreviewModal: () => void;
}

const PreviewContent: React.FC<PreviewContentProps> = ({
  previewData,
  previewType,
  closePreviewModal,
  t,
}) => {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const handleCopy = () => {
    if (previewData) {
      navigator.clipboard.writeText(previewData).then(() => {
        setCopied(true);
        dispatch(setFileContentCopySuccess());
        setTimeout(() => setCopied(false), 2500); // Reset after 2s
      });
    }
  };

  return (
    <div className="fixed inset-40 flex justify-center items-start bg-transparent z-100">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl h-[80vh] overflow-y-auto shadow-xl z-60">
        {/* Header row with title + copy action */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {previewType === "xml" ? t("XML Preview") : t("JSON Preview")}
          </h2>

          {/* Copy button with status */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2h-6a2 2 0 00-2 2v12zM8 4h6a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                />
              </svg>
            </button>
            <span
              className={`text-sm font-medium ${
                copied ? "text-green-600" : "text-gray-500"
              }`}
            >
              {copied ? t("Copied!") : t("Copy to clipboard")}
            </span>
          </div>
        </div>

        {/* Preview content */}
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto whitespace-pre-wrap text-sm text-gray-800 h-[64vh]">
          {previewData}
        </pre>

        {/* Close button */}
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

export default withTranslation()(PreviewContent);
