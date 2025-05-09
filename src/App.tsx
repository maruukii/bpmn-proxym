import React, { useEffect } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Routes from "./routes";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { queryClient, persister } from "./lib/reactQuerry";

const App: React.FC = () => {
  // useEffect(() => {
  //   const designer = document.getElementById("designer");
  //   if (designer) {
  //     designer.addEventListener("contextmenu", function (ev: PointerEvent) {
  //       ev.preventDefault();
  //     });
  //   }
  // }, []);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
      <Routes />
    </PersistQueryClientProvider>
  );
};

export default App;

// import React, { useEffect } from "react";

// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Routes from "./routes/index";
// import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
// import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
// import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
// import ContextMenu from "./components/ContextMenu";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       gcTime: 1000 * 60 * 60 * 24,
//     },
//   },
// });

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
// });
// // const queryClient = useQueryClient();
// const App: React.FC = () => {
//   const designer: any | null = document.getElementById("designer");
//   useEffect(() => {
//     if (designer) {
//       designer.addEventListener("contextmenu", function (ev: PointerEvent) {
//         ev.preventDefault();
//       });
//     }
//   }, [designer]);

//   return (
//     <PersistQueryClientProvider
//       client={queryClient}
//       persistOptions={{ persister }}
//     >
//       <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
//       <Routes />
//       {/* <ContextMenu /> */}
//     </PersistQueryClientProvider>
//   );
// };

// export default App;
