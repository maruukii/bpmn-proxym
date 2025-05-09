declare interface ProcessMetadata {
    id: string;
    name: string;
    key: string;    
    description: string;
    createdBy: string;
    lastUpdatedBy: string;
    lastUpdated: number;
    latestVersion: boolean;
    version:number;
    modelType: number;
    tenantId: string;
    thumbnail?:any;

  }
 declare interface SingleProcessMetadata {
    process: ProcessMetadata;
    t: any;
  }
  declare interface UseProcessesQueryProps {
    filter: string | null;
    modelType: number | string | null;
    sort: string | null;
    page?: number;
    limit?: number;
  }