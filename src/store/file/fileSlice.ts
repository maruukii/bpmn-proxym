import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileState {
  filename: string | null;
  fileContent:string | null;
  fileContentCopySuccess:boolean|null;
  fileImportSuccess: boolean;
  fileExportSuccess: boolean;
  fileSavedSuccess: boolean;
  newDiagramCreationSuccess: boolean;
  fileError: string | null;
}

const initialState: FileState = {
  filename: null,
  fileContent:null,
  fileContentCopySuccess:false,
  fileExportSuccess: false,
  fileSavedSuccess: false,
  fileImportSuccess: false,
  newDiagramCreationSuccess: false,
  fileError:null,
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFileData: (state, action: PayloadAction<{ filename: string;fileContent:string}>) => {
      state.filename = action.payload.filename;
      state.fileContent = action.payload.fileContent;
      state.fileImportSuccess=true;
    },
    setNewDiagram:(state, action: PayloadAction<{filename:string;fileContent:string}>) => {
      state.filename = action.payload.filename;
      state.fileContent = action.payload.fileContent;
      state.newDiagramCreationSuccess=true;
    },
    clearFileData: (state) => {
      state.filename = null;
      state.fileContent = null;
      state.fileImportSuccess=false;
    },
    clearFileImportSucess: (state) => {
        state.fileImportSuccess=false;
    },
    setFileExportSuccess: (state) => {
      state.fileExportSuccess=true;
    },
    clearFileExportSuccess: (state) => {
      state.fileExportSuccess=false;
    },
    setFileContentCopySuccess: (state) => {
      state.fileContentCopySuccess=true;
    },
    clearFileContentCopySuccess: (state) => {
      state.fileContentCopySuccess=false;
    },
    clearNewDiagramCreationSuccess: (state) => {
      state.newDiagramCreationSuccess=false;},
    setFileError: (state, action: PayloadAction<string>) => {
        state.fileError = action.payload;
    },
    clearFileError: (state) => {
        state.fileError = null;
    },
    setModelSaved: (state) => {
      state.fileSavedSuccess = true;
    },
    clearModelSaved: (state) => {
      state.fileSavedSuccess = false;
    },
  },
});

export const { setFileData, clearFileData,clearFileImportSucess,setFileExportSuccess,clearFileExportSuccess,setFileError,clearFileError,setFileContentCopySuccess,clearFileContentCopySuccess,setNewDiagram,clearNewDiagramCreationSuccess,setModelSaved,clearModelSaved } = fileSlice.actions;
export default fileSlice.reducer;
