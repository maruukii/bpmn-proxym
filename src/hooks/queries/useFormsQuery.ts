import { useMutation, useQuery } from '@tanstack/react-query';
import { getForms,getThumbnail } from '../../api/formsApi';
import { UseFormsQueryProps } from '../../../types/apis/bpmn-form';

  
  export const useFormsQuery = ({ filter,includeHistoryModels,modelType,page, limit }: UseFormsQueryProps) => {
    return useQuery({
      queryKey: ["forms",filter,includeHistoryModels,modelType, page, limit], 
      queryFn: () => getForms({filter,includeHistoryModels,modelType, page, limit }), 
    });
  };
  // Fetch thumbnails based on the forms' IDs
 export const useThumbnailMutation = () => {
  return useMutation({
    mutationFn:async  (formId: string):Promise<string> => {
     
     const blob = await getThumbnail(formId); 
      return URL.createObjectURL(blob);
}, 
  });
};



