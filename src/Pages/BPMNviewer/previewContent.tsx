import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setFileContentCopySuccess } from "../../store/file/fileSlice";
import { RootState } from "../../store/store";
import {
  openJsonPreview,
  openXMLPreview,
} from "../../utils/previewContentUtils";

interface PreviewContentProps {
  t: any;
  setIsPreviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviewContent: React.FC<PreviewContentProps> = ({
  setIsPreviewModalOpen,
  t,
}) => {
  const [copied, setCopied] = useState(false);
  const [previewData, setPreviewData] = useState<string | undefined>(undefined);
  const [previewType, setPreviewType] = useState<"xml" | "json" | null>("xml");
  const { modeler, moddle } = useSelector((state: RootState) => state.modeler);
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsPreviewModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsPreviewModalOpen]);

  useEffect(() => {
    const importContent = async () => {
      if (!modeler || !moddle) return;

      try {
        const data =
          previewType === "xml"
            ? await openXMLPreview({ modeler })
            : await openJsonPreview({ modeler, moddle });

        setPreviewData(data);
      } catch (error) {
        console.error("Error fetching preview content:", error);
        setPreviewData(undefined);
      }
    };

    importContent();
  }, [previewType]);

  const handleCopy = () => {
    if (previewData) {
      navigator.clipboard.writeText(previewData).then(() => {
        setCopied(true);
        dispatch(setFileContentCopySuccess());
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="fixed inset-20 flex justify-center items-start bg-transparent  z-100">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg w-full max-w-3xl h-[80vh] overflow-y-auto shadow-xl mt-20"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {previewType === "xml" ? t("XML Preview") : t("JSON Preview")}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">XML</span>
            <label className="relative inline-block w-12 h-6 cursor-pointer">
              <input
                type="checkbox"
                checked={previewType === "json"}
                onChange={(e) =>
                  setPreviewType(e.target.checked ? "json" : "xml")
                }
                className="sr-only peer"
              />
              <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors duration-300"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 transform peer-checked:translate-x-6"></div>
            </label>
            <span className="text-sm font-medium text-gray-600">JSON</span>
          </div>

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

        {/* Preview */}
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto whitespace-pre-wrap text-sm text-gray-800 h-[64vh]">
          {previewData}
        </pre>

        {/* Close button */}
        <button
          onClick={() => setIsPreviewModalOpen(false)}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          {t("Close")}
        </button>
      </div>
    </div>
  );
};

export default withTranslation()(PreviewContent);
