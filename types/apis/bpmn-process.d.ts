import { NavigateFunction } from "react-router-dom";

declare interface ProcessMetadata {
    id: string;
    name: string;
    key: string;    
    description?: string;
    createdBy: string;
    lastUpdatedBy: string;
    lastUpdated: number;
    latestVersion: boolean;
    version:number;
    modelType: number;
    tenantId?: string;
xml?:string
comment?:string
  }
 declare interface SingleProcessMetadata {
    process: ProcessMetadata;
    t: any;
  }
  declare interface ProcessHistoryProps {
    history: ProcessMetadata[];
    setHistoryOpen:React.Dispatch<React.SetStateAction<boolean>>;
    navigate:NavigateFunction
    t: any;
  }
  declare interface UseProcessesQueryProps {
    filter: string | null;
    modelType: number | string | null;
    sort: string | null;
    page?: number;
    limit?: number;
  }

  declare interface SaveAndDuplicateModalProps {
  process?: ProcessMetadata;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // handleChange: (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => void;
  // setProcess: React.Dispatch<React.SetStateAction<ProcessMetadata>>;
    action:string
}

declare interface DeleteModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id:string;
  modelName:string
}
// declare interface ProcessCrudProps{
//   description: string;
// key: string;
// modelType: number;
// name: string;
// comment?:string
// }