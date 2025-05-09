import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

const PathParms = () => {
  const queryParams = new URLSearchParams(location.search);
  const login_status = queryParams.has("login_success");
  console.log(login_status);
  return login_status ? (
    <Navigate to={"/"} />
  ) : (
    <Navigate to={"/landingpage"} />
  );
};
export default PathParms;
