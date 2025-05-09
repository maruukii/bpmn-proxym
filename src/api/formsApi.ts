import axiosInstance from "../config/axiosInstance";

export const getForms= async ({ filter,includeHistoryModels,modelType,page, limit }: UseFormsQueryProps): Promise<FormMetadata[]> => {
    const { data } = await axiosInstance.get(`/modeler/rest/models?filter=${filter}&includeHistoryModels=${includeHistoryModels}&modelType=${modelType}`);
    return data;
  };
  export const getThumbnail= async ( formId:string ): Promise<any> => {
    const { data } = await axiosInstance.get(`/modeler/rest/models/${formId}/thumbnail`);
    return data;
  };