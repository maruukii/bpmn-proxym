import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/reactQuery.ts";
import { PersistGate } from "redux-persist/integration/react";
import "ldrs/react/Mirage.css";
import "diagram-js-minimap/assets/diagram-js-minimap.css";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </PersistGate>
      </Provider>{" "}
    </BrowserRouter>
  </StrictMode>
);
