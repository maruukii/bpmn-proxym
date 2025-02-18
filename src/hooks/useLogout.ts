import { useDispatch } from "react-redux";
import axiosInstance from "../config/axiosInstance";
import { setLogoutError ,clearLogoutError} from "../store/user/userSlice";
const useLogout = () => {
  const dispatch=useDispatch();
  const logout = async () => {
    dispatch(clearLogoutError())
    try {
      await axiosInstance.post("/logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
dispatch(setLogoutError(error as string))    }
  };
  return logout;
};
export default useLogout;
