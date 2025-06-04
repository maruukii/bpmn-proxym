import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: AppDefinition = {
    icon: "",
    models:[],
    theme:"",
    groupsAccess:"",
    usersAccess:""
};

const appDefsSlice = createSlice({
  name: "appDefs",
  initialState,
  reducers: {
    setAppDefsData: (state, action: PayloadAction<AppDefinition>) => {
      state.icon = action.payload?.icon;
      state.theme = action.payload?.theme;
      state.models=action.payload?.models
      state.usersAccess=action.payload?.usersAccess
      state.groupsAccess=action.payload?.groupsAccess
          },
    clearAppDefsData: (state) => {
    state.icon = ""
      state.theme = ""
      state.models=[]
      state.usersAccess=""
      state.groupsAccess=""
    },

  },
});

export const { setAppDefsData ,clearAppDefsData} = appDefsSlice.actions;
export default appDefsSlice.reducer;
