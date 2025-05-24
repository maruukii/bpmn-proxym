import { useLocation, Navigate } from "react-router-dom";
import { ReactNode } from "react";
import Preloader from "../components/preloader";
import useAuth from "./useAuth";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const { userName, loading } = useAuth();

  if (loading) {
    return <Preloader />;
  }

  return userName ? (
    children
  ) : (
    <Navigate to="/landingpage" state={{ from: location }} replace />
  );
};

export default RequireAuth;
