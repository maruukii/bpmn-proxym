import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProcessMetadata } from "../../../types/apis/bpmn-process";



const initialState: ProcessMetadata = {
    id: "",
    name: "",
    key: "",   
    description: "",
    createdBy: "",
    lastUpdatedBy: "",
    lastUpdated: NaN,
    latestVersion: true,
    version:NaN,
    modelType: NaN,
    tenantId: "",
    xml:undefined
};

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    setProcessData: (state, action: PayloadAction<ProcessMetadata>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.key = action.payload.key;
      state.description = action.payload?.description;
      state.createdBy = action.payload.createdBy;
      state.lastUpdated = action.payload.lastUpdated;
      state.latestVersion = action.payload.latestVersion;
      state.lastUpdatedBy = action.payload.lastUpdatedBy;
      state.version = action.payload.version;
      state.modelType = action.payload.modelType;
      state.tenantId = action.payload?.tenantId;
          },
    clearProcessData: (state) => {
    state.id= "";
    state.name= "";
    state.key= "";  
    state.description= "";
    state.createdBy= "";
    state.lastUpdatedBy= "";
    state.lastUpdated= NaN;
    state.latestVersion= true;
    state.version=NaN;
    state.modelType= NaN;
    state.tenantId= "";
    state.xml=undefined;
    },
   setXml:(state,action:PayloadAction<string>)=>{

  state.xml=action.payload
   }
  },
});

export const { setProcessData,clearProcessData,setXml } = processSlice.actions;
export default processSlice.reducer;
