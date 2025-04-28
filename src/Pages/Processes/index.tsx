import { useState } from "react";
import FileUploadButton from "../../components/Buttons/fileUpload";
import NewDiagram from "../../components/Buttons/newDiagram";
import { SingleProcess } from "../../components/UI/SingleProcess"; // Assuming SingleProcess is in the same folder

export const Processes = () => {
  const [xml, setXml] = useState<string | null>(null);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const processData = [
    {
      name: "Process 1",
      createdBy: "John",
      lastModified: "2025-04-26",
      description: "Short description",
    },
    {
      name: "Process 2",
      createdBy: "Alice",
      lastModified: "2025-04-27",
      description: "Another process description",
    },
    {
      name: "Process 3",
      createdBy: "Bob",
      lastModified: "2025-04-28",
      description: "More details about this process",
    },
    {
      name: "Process 4",
      createdBy: "Charlie",
      lastModified: "2025-04-29",
      description: "Details for process 4",
    },
    {
      name: "Process 5",
      createdBy: "David",
      lastModified: "2025-04-30",
      description: "Details for process 5",
    },
  ];

  return (
    <div className="grid grid-cols-8 h-screen">
      <div className="col-span-1 flex flex-col items-start space-y-4 p-4"></div>

      <div className="col-span-6 flex flex-col items-center justify-start">
        <div className="flex flex-wrap  gap-4 w-full">
          {processData.map((process, index) => (
            <SingleProcess key={index} process={process} />
          ))}
        </div>
      </div>

      {/* Right section (third div) */}
      <div className="col-span-1 flex flex-col items-end ">
        <NewDiagram
          setXml={setXml}
          setModelOpen={setModelOpen}
          modelOpen={modelOpen}
        />
        <FileUploadButton setXml={setXml} />
      </div>
    </div>
  );
};

export default Processes;
