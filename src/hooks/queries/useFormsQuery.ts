import { useQuery } from '@tanstack/react-query';
import { getForms,getThumbnail } from '../../api/formsApi';

  
  export const useFormsQuery = ({ filter,includeHistoryModels,modelType,page, limit }: UseFormsQueryProps) => {
    return useQuery({
      queryKey: ["forms",filter,includeHistoryModels,modelType, page, limit], 
      queryFn: () => getForms({filter,includeHistoryModels,modelType, page, limit }), 
    });
  };
  // Fetch thumbnails based on the forms' IDs
  export const thumbnailsQuery = ( formId : string) => {
    return useQuery({
      queryKey: ["thumbnail",formId], 
      queryFn: () => getThumbnail(formId),   
      enabled: !!formId, });
  };

