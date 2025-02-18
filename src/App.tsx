import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Routes from "./routes/index";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
// const queryClient = useQueryClient();
const App: React.FC = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
      <Routes />
    </PersistQueryClientProvider>
  );
};

export default App;
