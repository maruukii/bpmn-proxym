import {axiosInstance} from "../config/axiosInstance";

export const getProcesses= async ({ filter,modelType,sort,page, limit }: UseProcessesQueryProps): Promise<ProcessMetadata[]> => {
    const { data } = await axiosInstance.get(`/configuration/modeler/rest/models?filter=${filter}&modelType=${modelType}&sort=${sort}`);
    return data.data
  };
//   export const updateProcess = async (process: Partial<ProcessMetadata>): Promise<ProcessMetadata> => {
//     const { data } = await axiosInstance.put('/', process);
//     return data;
//   };/configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc
