import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../../api/applicationApi";

 export const useApplicationsQuery = () => {
    return useQuery({
      queryKey: ["applications"], 
      queryFn: () => getApplications(), 
    });
  };