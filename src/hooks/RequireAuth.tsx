import { useLocation, Navigate } from "react-router-dom";
import { useState, useEffect, ReactNode } from "react";
import { axiosInstance } from "../config/axiosInstance";
import Preloader from "../components/preloader";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const [connected, setConnected] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const isConnected = async () => {
      try {
        const response = await axiosInstance.get(
          import.meta.env.VITE_CONNECTED_USER
        );
        setConnected(response?.data?.userApp ? true : false);
      } catch (error) {
        console.error(error);
        setConnected(false);
      } finally {
        setLoading(false);
      }
    };

    isConnected();
  }, []);

  return loading ? (
    <Preloader />
  ) : connected ? (
    children
  ) : (
    <Navigate to="/landingpage" state={{ from: location }} replace />
  );
};

export default RequireAuth;
