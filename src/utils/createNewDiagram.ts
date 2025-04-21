import { setNewDiagram } from '../store/file/fileSlice';
import { setNewDiagramStatus } from '../store/modeler/modelerSlice';
import { AppDispatch } from '../store/store';
import EmptyXML from './EmptyXML'
// import { EditorSettings } from 'types/editor/settings'


export const createNewDiagram = async function (setXml:(xml: string) => void
,dispatch:AppDispatch, settings?:{id?:string,name?:string,description:string}) {
  try {
if (!settings?.id||!settings?.name) {
  throw new Error('Modeler, dispatch, or settings are not available');}
    const { id, name, description } = settings
    const xmlString = EmptyXML(id, name, description)
    setXml(xmlString)
  dispatch(setNewDiagram({ filename: id, fileContent:xmlString }));
  // dispatch(setNewDiagramStatus());
   
  } catch (e) {
    console.error(`[Process Designer Warn]: ${typeof e === 'string' ? e : (e as Error)?.message}`)
  }
}
