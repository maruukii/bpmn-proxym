import { ProcessMetadata, UseProcessesQueryProps } from "../../types/apis/bpmn-process";
import {axiosInstance} from "../config/axiosInstance";
import axios from 'axios';

export const getProcessesAndApps= async ({ filter,modelType,sort }: UseProcessesQueryProps): Promise<ProcessMetadata[]> => {
    const { data } = await axiosInstance.get(`/configuration/modeler/rest/models?filter=${filter}&modelType=${modelType}&sort=${sort}`);
    return data.data
  };
//   export const updateProcess = async (process: Partial<ProcessMetadata>): Promise<ProcessMetadata> => {
//     const { data } = await axiosInstance.put('/', process);
//     return data;
//   };/configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc
export const deleteProcessAndApp= async (id:string):Promise<void> => {
    await axiosInstance
        .delete(`/configuration/modeler/rest/models/${id}?cascade=false`)
  };
  export const duplicateProcess= async (id:string,model:ProcessMetadata):Promise<ProcessMetadata> => {
    const {data} = await axiosInstance
          .post(`/configuration/modeler/rest/models/${id}/clone`, model)
    return data
  };
  export const createProcess= async (model:ProcessMetadata):Promise<ProcessMetadata> => {
    const {data}=await axiosInstance
          .post("/configuration/modeler/rest/models", model)
    return data
  };
   export const saveProcess= async (id:string,req:URLSearchParams):Promise<ProcessMetadata> => {
    const {data}= await axios
              .post(
                `/configuration/modeler/rest/models/${id}/editor/json`,
                req.toString(),
                {
                  headers: {
                    "Content-Type":
                      "application/x-www-form-urlencoded; charset=UTF-8",
                  },
                }
              )
    return data
  };
  export const convertToBpmn= async (model:ProcessMetadata):Promise<string> => {
    const {data}=await axiosInstance.post(`/configuration/modeler/rest/converter/convert-to-bpmn/${model?.id}`,{})
    return data
  };
 export const convertToJson= async (xml:string):Promise<string> => {
    const {data}=await axiosInstance.post(
          "/configuration/modeler/rest/converter/convert-to-json",
          {
            value: xml,
          }
        );
    return (JSON.stringify(data))
  };

  export const publishApp= async (id:string):Promise<any> => {
    const {data}=await axiosInstance
          .post(`/configuration/modeler/rest/app-definitions/${id}/publish`,{comment:""})
    return data
  };
  export const modifyProcess= async ({id,model}:{id:string,model:ProcessMetadata}):Promise<ProcessMetadata> => {
    const {data}=await axiosInstance
          .put(`/configuration/modeler/rest/models/${id}`,model)
    return data
  };