import { useSelector } from 'react-redux';
import { RootState } from "../store/store";

const useAuth = () => {
     const { userName,isLoggedIn,loginError,logoutError } =
        useSelector((state: RootState) => state.user);
    
    return { auth:{userName,isLoggedIn,loginError,logoutError }};
}
export default useAuth;