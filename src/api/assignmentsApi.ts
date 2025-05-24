import {axiosInstance} from "../config/axiosInstance";

export const getBranches= async (search:BranchesFunctionsSearch): Promise<BranchesMetadata[]> => {
    const { data } = await axiosInstance.post(`/configuration/modeler/rest/models/groups`,search);

    return data?.content
  };

export const getFunctions= async (search:BranchesFunctionsSearch): Promise<FunctionsMetadata[]> => {
    const { data } = await axiosInstance.post(`/configuration/modeler/rest/models/groups`,search);

    return data?.content
  };
  export const getAllGroupes= async (branches:string): Promise<[]> => {
    const branchesCodes=(branches.split(",")).map((branch)=>branch.split("::")[1].trim()).join(",");
    const { data } = await axiosInstance.get(`/configuration/modeler/rest/models/groups?branches=${branchesCodes}&functions=`);
    return data.branches
  };