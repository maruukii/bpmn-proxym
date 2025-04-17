import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileState {
  filename: string | null;
  fileContent:string | null;
  fileContentCopySuccess:boolean|null;
  fileImportSuccess: boolean;
  fileExportSuccess: boolean;
  fileError: string | null;
}

const initialState: FileState = {
  filename: null,
  fileContent:null,
  fileContentCopySuccess:false,
  fileExportSuccess: false,
  fileImportSuccess: false,
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
    setFileError: (state, action: PayloadAction<string>) => {
        state.fileError = action.payload;
    },
    clearFileError: (state) => {
        state.fileError = null;
    },
  },
});

export const { setFileData, clearFileData,clearFileImportSucess,setFileExportSuccess,clearFileExportSuccess,setFileError,clearFileError,setFileContentCopySuccess,clearFileContentCopySuccess } = fileSlice.actions;
export default fileSlice.reducer;
