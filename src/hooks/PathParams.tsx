import { Navigate } from "react-router-dom";

const PathParms = () => {
  const queryParams = new URLSearchParams(location.search);
  const login_status = queryParams.has("login_success");
  return login_status ? (
    <Navigate to={"/"} />
  ) : (
    <Navigate to={"/landingpage"} />
  );
};
export default PathParms;
