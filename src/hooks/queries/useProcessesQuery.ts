import { useQuery } from '@tanstack/react-query';
import { getProcesses } from '../../api/processesApi';


  
  export const useProcessesQuery = ({ filter,modelType,sort,page, limit }: UseProcessesQueryProps) => {
    return useQuery({
      queryKey: ["processes",filter,modelType,sort, page, limit], // this key identifies the cache for this combination
      queryFn: () => getProcesses({filter,modelType,sort, page, limit }), // call the API with params
    });
  };