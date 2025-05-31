import { useMutation, useQuery } from '@tanstack/react-query';
import { convertToBpmn, convertToJson, createProcess, deleteProcessAndApp, duplicateProcess, getProcessesAndApps, saveProcess,publishApp, modifyProcess } from '../../api/processesApi';
import { ProcessMetadata, UseProcessesQueryProps } from '../../../types/apis/bpmn-process';


  
  export const useProcessesQuery = ({ filter,modelType,sort,page, limit }: UseProcessesQueryProps) => {
    return useQuery({
      queryKey: ["processes",filter,modelType,sort, page, limit], // this key identifies the cache for this combination
      queryFn: () => getProcessesAndApps({filter,modelType,sort, page, limit }), // call the API with params
    });
  };
  
  export const useDeleteProcessMutation = () => {
  return useMutation({
    mutationFn: (id:string) => deleteProcessAndApp(id),
  });
};
export const useDuplicateProcessMutation = () => {
  return useMutation({
    mutationFn: ({id,model}:{id:string,model:ProcessMetadata}) => duplicateProcess(id,model),
  });
};
export const useCreateProcessMutation = () => {
  return useMutation({
    mutationFn: (model:ProcessMetadata) => createProcess(model),
  });
};
export const useConvertToBpmnMutation = () => {
  return useMutation({
    mutationFn: (model:ProcessMetadata) => convertToBpmn(model),
  });
};
export const useConvertToJsonMutation = () => {
  return useMutation({
    mutationFn: (xml:string) => convertToJson(xml),
  });
};
export const useSaveProcessMutation = () => {
  return useMutation({
    mutationFn: ({id,req}:{id:string,req:URLSearchParams}) => saveProcess(id,req),
  });
};
export const usePublishMutation = () => {
  return useMutation({
    mutationFn: (id:string) => publishApp(id),
  });
};
export const useModifyMutation = () => {
  return useMutation({
    mutationFn: ({id,model}:{id:string,model:ProcessMetadata}) => modifyProcess({id,model}),
  });
};
