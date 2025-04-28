import { lazy } from "react";

// Lazy load the components
const Home = lazy(() => import("../Pages/BPMNhome/bpmnHome"));
const Processes = lazy(() => import("../Pages/Processes"));
const Error404 = lazy(() => import("../Pages/Utility/Error404.jsx"));

// all routes in a single array
const routes = [
  // Client Routes
  { path: "/", element: <Home /> },
  { path: "/processes", element: <Processes /> },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export default routes;
