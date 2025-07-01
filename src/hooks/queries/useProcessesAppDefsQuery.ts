import { useMutation, useQuery } from '@tanstack/react-query';
import { convertToBpmn, convertToJson, createProcess, deleteProcessAndApp, duplicateProcess, getProcessesAndApps, saveProcess,publishApp, modifyProcess, getAppsDefs, getProcess, saveApp } from '../../api/processesApi';
import { ProcessMetadata, UseProcessesQueryProps } from '../../../types/apis/bpmn-process';


  
  export const useProcessesAndAppsDefsQuery = ({ filter,modelType,sort }: UseProcessesQueryProps) => {
    return useQuery({
      queryKey: ["processes",filter,modelType,sort],
      queryFn: () => getProcessesAndApps({filter,modelType,sort}),
    });
  };
  export const useAppsDefsQuery = ({ lastId,oldId }: {lastId:string,oldId:string}) => {
    return useQuery({
      queryKey: ["apps",lastId,oldId],
      queryFn: () => getAppsDefs(lastId,oldId ),
    });
  };
  export const useGetProcessMutation = () => {
  return useMutation({
    mutationFn: (id:string) => getProcess(id),
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
export const useSaveAppMutation = () => {
  return useMutation({
    mutationFn: ({id,req}:{id:string,req:AppDefReq}) => saveApp(id,req),
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
