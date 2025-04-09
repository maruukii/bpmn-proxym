import { lazy } from "react";

// Lazy load the components
const Home = lazy(() => import("../Pages/BPMNhome/bpmnHome"));

// all routes in a single array
const routes = [
  // Client Routes
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
];

export default routes;
