import React, { useState } from "react";
import BpmnViewer from "./Pages/BPMNviewer/BpmnViewer";
import FileUploadButton from "./components/Buttons/fileUploadButton";

const App: React.FC = () => {
  const [xml, setXml] = useState<string | null>(null);

  return (
    <div>
      <FileUploadButton setXml={setXml} />

      {xml ? <BpmnViewer xml={xml} /> : <p>waiting for BPMN diagram...</p>}
    </div>
  );
};

export default App;
