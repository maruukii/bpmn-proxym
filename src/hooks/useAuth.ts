import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { axiosInstance } from "../config/axiosInstance";
import { setUserData } from "../store/user/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isConnected = async () => {
      try {
        const response = await axiosInstance.get(import.meta.env.VITE_CONNECTED_USER);
        const username = response?.data?.userApp?.user?.name;
        if (username) {
          dispatch(setUserData(username));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!userName) {
      isConnected();
    } else {
      setLoading(false);
    }
  }, [userName, dispatch]);

  return { userName, loading };
};

export default useAuth;