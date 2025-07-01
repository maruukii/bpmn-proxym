import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlyphiconIcons, ThemeOptions } from "../../CommonData/Enums";



const initialState: AppDefinition = {
    icon: GlyphiconIcons[0],
    models:[],
    theme:ThemeOptions[0]?.id,
    groupsAccess:"",
    usersAccess:""
};

const appDefsSlice = createSlice({
  name: "appDefs",
  initialState,
  reducers: {
    setAppDefsData: (state, action: PayloadAction<AppDefinition>) => {
      action.payload?.icon?state.icon = action.payload?.icon:undefined;
      action.payload?.theme?state.theme = action.payload?.theme:undefined;
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
