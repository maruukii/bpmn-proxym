import BpmnViewer from "bpmn-js/lib/NavigatedViewer";
import { useEffect, useRef } from "react";
import CustomRenderer from "../../../components/Designer/CustomRenderer/customRenderer";

const BpmnReadOnly = ({ xml }: { xml: string }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const viewerInstance = useRef<BpmnViewer | null>(null);

  useEffect(() => {
    if (!xml || !viewerRef.current || viewerInstance.current) return;

    viewerInstance.current = new BpmnViewer({
      container: viewerRef.current,
      additionalModules: [
        {
          __init__: ["customRenderer"],
          customRenderer: ["type", CustomRenderer],
        },
      ],
    });

    const initViewer = async () => {
      try {
        await viewerInstance.current?.importXML(xml);
        const canvas: any = viewerInstance.current?.get("canvas");

        if (canvas) {
          canvas.zoom("fit-viewport", { padding: 20 });
        }

        // ✅ Resize event handler
        const handleResize = () => {
          if (viewerInstance.current && viewerRef.current) {
            const canvas: any = viewerInstance.current.get("canvas");
            if (canvas) {
              canvas.zoom("fit-viewport", { padding: 20 });
            }
          }
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          viewerInstance.current?.destroy();
          viewerInstance.current = null;
        };
      } catch (error) {
        console.error("Error loading BPMN diagram:", error);
      }
    };

    initViewer();

    return () => {
      viewerInstance.current?.destroy();
      viewerInstance.current = null;
    };
  }, []); // ✅ Runs only once

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <div ref={viewerRef} className="w-full h-screen overflow-auto" />
    </div>
  );
};

export default BpmnReadOnly;
