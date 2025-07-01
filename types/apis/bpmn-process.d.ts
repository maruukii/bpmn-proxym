import { NavigateFunction } from "react-router-dom";
import { Types } from "../../src/CommonData/Enums";

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
  theme?:string
  icon?:string
    process: ProcessMetadata;
    doNavigate?:boolean
    type:Types
    t: any;
    isSelected?:boolean
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
// declare interface UseProcessesSavingProps {
//     modeltype: string;
//     json_xml: string;
//     name:string;
//     key:string;
//     description?:string;
//     newversion?:string;
//     comment?:string; 
//     lastUpdated:number
//   }
  declare interface SaveAndDuplicateModalProps {
  process?: ProcessMetadata;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // handleChange: (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => void;
  // setProcess: React.Dispatch<React.SetStateAction<ProcessMetadata>>;
    action:string
    t:any
    setIsSaved?:React.Dispatch<React.SetStateAction<boolean>>
}

declare interface DeleteModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id:string;
  modelName:string
  t:any
}

// declare interface ProcessCrudProps{
//   description: string;
// key: string;
// modelType: number;
// name: string;
// comment?:string
// }