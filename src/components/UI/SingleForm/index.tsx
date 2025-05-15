import { withTranslation } from "react-i18next";
import { formatTimestamp } from "../../../utils/tools";
import Tag from "../components/tag";
import { useEffect, useState } from "react";
import { Mirage } from "ldrs/react";
import { fetchThumbnail } from "../../../hooks/useFetchThumbnail";
export const SingleForm: React.FC<SingleFormMetadata> = ({ form }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadThumbnail = async () => {
      if (form?.id) {
        setThumbnail(null);
        const imageUrl = await fetchThumbnail(form.id);
        if (isMounted) {
          setThumbnail(imageUrl);
        }
      }
    };

    loadThumbnail();

    return () => {
      isMounted = false;
      if (thumbnail) {
        URL.revokeObjectURL(thumbnail);
      }
    };
  }, [form?.id]);

  return (
    <div
      className="relative w-120 mx-auto bg-white rounded-lg shadow-lg overflow-hidden group"
      title={form.name}
    >
      {/* Canvas View - Fixed Size */}
      <div className="relative h-130 bg-gray-200">
        {/* You can replace this div with your actual diagram canvas */}
        <div className="absolute inset-2 flex items-center justify-center">
          <span className="text-xs  px-1 rounded absolute top-1 right-1">
            <Tag
              className="bg-blue-100 text-blue-700"
              label={"v" + form.version.toString()}
            />
          </span>
          {thumbnail ? (
            <img src={thumbnail} alt="Thumbnail" />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center">
              <Mirage size="60" speed="2.5" color="black" />
            </span>
          )}
        </div>
      </div>

      {/* Metadata Container - Positioned at the Bottom */}
      <div className="metadata-container absolute bottom-0 left-0 right-0 px-4 py-2 bg-white z-20 opacity-90 transition-all duration-300 ease-in-out group-hover:h-[180px] h-[115px] overflow-hidden">
        {/* form Name */}
        <div className="text-xl font-semibold text-gray-800 truncate">
          {form.name}
        </div>

        {/* form Metadata (Created By, Last Modified) */}
        <Tag
          className="bg-blue-100 text-blue-700"
          label={"v" + form.version.toString()}
        />
        <div className="text-sm text-gray-500 mt-1">{form.createdBy}</div>
        <div className="text-sm text-gray-500 mt-1">
          {formatTimestamp(
            form.lastUpdated,
            localStorage.getItem("I18N_LANGUAGE") || "en_US"
          )}
        </div>

        {/* Comment - Shows when hovered */}
        <div className="text-sm text-gray-500 mt-1 ">{form.comment}</div>
      </div>
    </div>
  );
};

export default withTranslation()(SingleForm);
