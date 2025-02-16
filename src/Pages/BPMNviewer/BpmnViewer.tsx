import { useEffect, useRef } from "react";
import BpmnJS from "bpmn-js";

const BpmnViewer = ({ xml }: { xml: string }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!xml || !viewerRef.current) return;

    const bpmnViewer = new BpmnJS({ container: viewerRef.current });

    bpmnViewer
      .importXML(xml)
      .then(() => {
        console.log("BPMN Diagram Loaded Successfully");
        const canvas: any = bpmnViewer.get("canvas");
        canvas.zoom("fit-viewport");
      })
      .catch((error: any) => {
        console.error("Error loading BPMN:", error);
      });

    return () => bpmnViewer.destroy();
  }, [xml]);

  return <div ref={viewerRef} />;
};

export default BpmnViewer;
