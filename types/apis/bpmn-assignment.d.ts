declare interface Assignees{
    assignmentType:string
    type?:string
    allowInitiator?:boolean
assignee?: string;
  candidateUsers?: string;
  candidateGroups?: string;
  initiator?: boolean;
}
declare interface BranchesMetadata{
  attributes: {ar: [string], en: [string], fr: [string]}
children?: []
code:number
id:string
name: string
}
declare interface FunctionsMetadata{
  attributes: {ar: [string], en: [string], fr: [string]}
children?: []
code:number
id:string
name: string
}
declare interface BranchesFunctionsSearch{
category: string;
lang: string;
name?: string;
code?: string;
page: number;
size:number;
}
declare interface AssignmentModalProps{
prop: any;
onCancel: () => void;
onSave: (assigneeValues:Assignees) => void;
setModalValue?: React.Dispatch<React.SetStateAction<Assignees|undefined>>
modalValue?: Assignees;
t: any;
audience?: string|undefined;
}


declare interface AssignmentMetadata{
    id: number;
    name: string;
    audience: string;
    oauthClientId:string;
    helpText:string;
    type: string;
    attributes?: [ApplicationAttributes];
}
declare interface  AutoSuggestInputProps  {
  searchCategory?: "branches" | "functions";
  selectedItems: BranchesMetadata[] | FunctionsMetadata[];
  setSelectedItems: (items: BranchesMetadata[]) => void;
  modalValue?: Assignees;
  multiple?: boolean;
  placeholder?: string;
  t: (key: string) => string;
};