import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string | null;
  accessToken:string | null;
  isLoggedIn: boolean;
  loginError: string | null;
  logoutError: string | null;

}

const initialState: UserState = {
  userName: null,
  accessToken:null,
  isLoggedIn: false,
  loginError: null,
  logoutError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<{ userName: string;accessToken:string}>) => {
      state.userName = action.payload.userName;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    clearUserData: (state) => {
      state.userName = null;
      state.accessToken = null;
      state.isLoggedIn = false;
    },
    setLoginError: (state, action: PayloadAction<string>) => {
        state.loginError = action.payload;
    },
    clearLoginError: (state) => {
        state.loginError = null;
    },
    setLogoutError: (state, action: PayloadAction<string>) => {
        state.logoutError = action.payload;
    },
    clearLogoutError: (state) => {
        state.logoutError = null;
    },
  },
});

export const { setUserData,clearUserData,setLoginError,clearLoginError,setLogoutError,clearLogoutError } = userSlice.actions;
export default userSlice.reducer;
