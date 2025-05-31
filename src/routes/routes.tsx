import { lazy } from "react";
import PathParms from "../hooks/PathParams";
import RedirectIfLoggedIn from "../hooks/RedirectIfLoggedIn";
import Manage from "../Pages/Processes/Manage";

// Lazy load the components
const Editor = lazy(() => import("../Pages/BPMNhome/bpmnHome"));
const Processes = lazy(() => import("../Pages/Processes"));
const Error404 = lazy(() => import("../Pages/Utility/Error404"));
const Login = lazy(() => import("../Pages/Login"));

const routes = [
  // Public Routes
  {
    path: "/landingpage",
    element: (
      <RedirectIfLoggedIn>
        <Login />
      </RedirectIfLoggedIn>
    ),
    type: "public",
  },
  {
    path: "/",
    element: <PathParms />,
    type: "public",
  },
  // Protected Routes
  { path: "/editor/:id", element: <Editor />, type: "protected" },
  { path: "/processes", element: <Processes />, type: "protected" },
  { path: "/processes/:lastVersionId", element: <Manage />, type: "protected" },
  {
    path: "/processes/:lastVersionId/history/:oldVersionId",
    element: <Manage />,
    type: "protected",
  },
  {
    path: "/apps",
    element: <Processes />,
    type: "protected",
  },
  {
    path: "/apps/:lastVersionId",
    element: <Manage />,
    type: "protected",
  },
  {
    path: "/apps/:lastVersionId/history/:oldVersionId",
    element: <Manage />,
    type: "protected",
  },
  {
    path: "/*",
    element: <Error404 />,
    type: "public",
  },
  // {
  //   path: "/login/oauth2/code/bankerise-studio",
  //   element: <PathParms />,
  //   type: "public",
  // },
  {
    path: "/front",
    element: <PathParms />,
    type: "public",
  },
];

export default routes;
