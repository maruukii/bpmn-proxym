import {  getAllGroupes, getBranches, getFunctions } from './../../api/assignmentsApi';
import { useMutation, useQuery } from "@tanstack/react-query";

export const useBranchesMutation = () => {
  return useMutation({
    mutationFn: (search: BranchesFunctionsSearch) => getBranches(search),
  });
};
export const useFunctionsMutation = () => {
  return useMutation({
    mutationFn: (search: BranchesFunctionsSearch) => getFunctions(search),
  });
};
export const useGroupesQuery = (branches:string) => {
    return useQuery({
      queryKey: ["branches"], 
      queryFn: () => getAllGroupes(branches), 
    });
  };