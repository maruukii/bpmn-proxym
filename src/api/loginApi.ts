import axiosInstance from "../config/axiosInstance";
type loginJson={
    redirectUrl:string,
    provider:string
}


export const login= async (): Promise<loginJson> => {
    const { data } = await axiosInstance.get(`/authorization/`);
    return data;
  };