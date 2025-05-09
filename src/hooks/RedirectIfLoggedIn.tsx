import { Navigate, useLocation } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";
import { ReactNode, useEffect, useState } from "react";
import Preloader from "../components/preloader";

interface RedirectIfLoggedInProps {
  children: ReactNode;
}

const RedirectIfLoggedIn: React.FC<RedirectIfLoggedInProps> = ({
  children,
}) => {
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

  return loading || connected === null ? (
    <Preloader />
  ) : connected ? (
    <Navigate to={location.state?.from?.pathname || "/"} replace />
  ) : (
    children
  );
};

export default RedirectIfLoggedIn;
