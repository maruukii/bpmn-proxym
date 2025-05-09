import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        gcTime: 1000 * 60 * 60 * 24, // Garbage Collection time
        staleTime: 1000 * 60,        // 1 minute before re-fetch
  
    },
  },
});

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
