import { lazy } from "react";
import PathParms from "../hooks/PathParams";
import RedirectIfLoggedIn from "../hooks/RedirectIfLoggedIn";

// Lazy load the components
const Home = lazy(() => import("../Pages/BPMNhome/bpmnHome"));
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
  // Protected Routes
  { path: "/", element: <Home />, type: "protected" },
  { path: "/processes", element: <Processes />, type: "protected" },
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
