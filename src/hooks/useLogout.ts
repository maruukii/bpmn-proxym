import {axiosInstance} from "../config/axiosInstance";
const useLogout = () => {
  const logout = async () => {
    try {
      await axiosInstance.post("/gw/logout",
        {},
      );
    } catch (error) {
  }
  };
  return logout;
};
export default useLogout;
