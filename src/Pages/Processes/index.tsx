import { useEffect, useState } from "react";
import FileUploadButton from "../../components/Buttons/fileUpload";
import NewDiagram from "../../components/Buttons/newDiagram";
import { SingleProcess } from "../../components/UI/SingleProcess";
import { useProcessesQuery } from "../../hooks/queries/useProcessesQuery";

export const Processes = () => {
  const [xml, setXml] = useState<string | null>(null);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [processes, setProcesses] = useState<ProcessMetadata[] | null>([]);

  const { data, isLoading, error } = useProcessesQuery({
    filter: "processes",
    modelType: 0,
    sort: "modifiedDesc",
    page: 1,
    limit: 10,
  });
  useEffect(() => {
    if (data) {
      setProcesses(data);
    }
  }, [data]);
  // useEffect(() => {
  //   // fetch(
  //   //   "/configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc"
  //   // )
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((data) => {
  //   //     setProcesses(data.data);
  //   //   });
  // }, []);

  // const processData = [
  //   {
  //     id: "6f7915e4-a8c3-11ef-ac2e-ee55f3875c74",
  //     name: "onboarding-process",
  //     key: "onboarding-process",
  //     description: "",
  //     createdBy: "bkdev bkdev",
  //     lastUpdatedBy: "bkdev bkdev",
  //     lastUpdated: 1742223785233,
  //     latestVersion: true,
  //     version: 12,
  //     modelType: 0,
  //     tenantId: "",
  //   },
  //   {
  //     id: "01e21fea-c9b3-11ef-9c94-26dadc833c71",
  //     name: "testing-process",
  //     key: "testing-process",
  //     description: "",
  //     createdBy: "bkdev bkdev",
  //     lastUpdatedBy: "bkdev bkdev",
  //     lastUpdated: 1735895612981,
  //     latestVersion: true,
  //     version: 1,
  //     modelType: 0,
  //     tenantId: "",
  //   },
  //   {
  //     id: "0d0ded87-ad9a-11ef-a491-26feeb862f9e",
  //     name: "claim-request",
  //     key: "claim-request",
  //     description: "",
  //     createdBy: "bkdev bkdev",
  //     lastUpdatedBy: "bkdev bkdev",
  //     lastUpdated: 1734087783374,
  //     latestVersion: true,
  //     version: 1,
  //     comment: "",
  //     modelType: 0,
  //     tenantId: "",
  //   },
  // ];

  return (
    <div className="grid grid-cols-8 h-screen">
      <div className="col-span-1 flex flex-col items-start space-y-4 p-4"></div>

      <div className="col-span-6 flex flex-col items-center justify-start">
        <div className="flex flex-wrap  gap-4 w-full">
          {processes?.length
            ? processes?.map((process, index) => (
                <SingleProcess key={index} process={process} />
              ))
            : undefined}
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
