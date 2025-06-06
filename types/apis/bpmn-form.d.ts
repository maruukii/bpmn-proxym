import { ProcessMetadata } from "./bpmn-process";
declare interface FormMetadata extends ProcessMetadata {
        historyModels: FormMetadata[]|[];
        thumbnail?:string

}
declare interface SingleFormMetadata {
  form: FormMetadata;
  t: any;
}

declare interface UseFormsQueryProps {
    filter: string | null;
    includeHistoryModels: string | null;
    modelType: number | string | null;
    page?: number;
    limit?: number;
  }
  declare interface FormKeyModalProps {
    prop: any;
    onCancel: () => void;
    onSave: () => void;
    setModalValue: React.Dispatch<React.SetStateAction<string>>;
    modalValue: string;
    // onSelect: (item: Item) => void;
    t: any;
  }