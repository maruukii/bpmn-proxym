import { setNewDiagram } from '../store/file/fileSlice';
import { AppDispatch } from '../store/store';
import EmptyXML from './EmptyXML'
import { setXml } from '../store/process/processSlice';
// import { EditorSettings } from 'types/editor/settings'


export const createNewDiagram = async function (
dispatch:AppDispatch, settings?:{key:string,name:string,description?:string}) {
  try {
if (!settings?.key||!settings?.name) {
  throw new Error('Modeler, dispatch, or settings are not available');}
    const { key, name, description } = settings
    const xmlString = EmptyXML(key, name, description)
   dispatch (setXml(xmlString))
  dispatch(setNewDiagram({ filename: name, fileContent:xmlString }));
  // dispatch(setNewDiagramStatus());
   
  } catch (e) {
    console.error(`[Process Designer Warn]: ${typeof e === 'string' ? e : (e as Error)?.message}`)
  }
}
