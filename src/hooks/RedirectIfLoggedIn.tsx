import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import Preloader from "../components/preloader";
import useAuth from "./useAuth";

interface RedirectIfLoggedInProps {
  children: ReactNode;
}

const RedirectIfLoggedIn: React.FC<RedirectIfLoggedInProps> = ({
  children,
}) => {
  const location = useLocation();
  const { userName, loading } = useAuth();

  if (loading) {
    return <Preloader />;
  }

  return userName ? (
    <Navigate to={location.state?.from?.pathname || "/processes"} replace />
  ) : (
    children
  );
};

export default RedirectIfLoggedIn;
