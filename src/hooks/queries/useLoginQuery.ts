import { useQuery } from "@tanstack/react-query";
import { login } from "../../api/loginApi";

export const useLoginQuery = () => {
    return useQuery({
      queryKey: ["login"], // this key identifies the cache for this combination
      queryFn: () => login(), // call the API with params
      staleTime:0
    });
  };