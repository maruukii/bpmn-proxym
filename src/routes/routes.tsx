import { lazy } from "react";

// Lazy load the components
const Home = lazy(() => import("../Pages/BPMNhome/bpmnHome"));
const Processes = lazy(() => import("../Pages/Processes"));
const Error404 = lazy(() => import("../Pages/Utility/Error404"));
const Login = lazy(() => import("../Pages/login"));

const routes = [
  // Public Routes
  {
    path: "/login",
    element: <Login />,
    type: "public",
  },
  // Protected Routes
  { path: "/", element: <Home />, type: "protected" },
  { path: "/processes", element: <Processes />, type: "protected" },
  {
    path: "/*",
    element: <Error404 />,
    type: "public",
  },
];

export default routes;
