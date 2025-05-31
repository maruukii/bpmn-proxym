import Modeler from 'bpmn-js/lib/Modeler';

import { setModeler } from '../../store/modeler/modelerSlice'; 
import type { BaseViewerOptions } from 'bpmn-js/lib/BaseViewer';
import { InitModelerProps } from '../../../types/declares/bpmn-modeler';


/**
 * Initialize BPMN Modeler
 */
export default async function initModeler({ designer, xml,modelerModules,dispatch,modeler }: InitModelerProps) {
  if (!designer) {
    console.error('Designer container is not available');
    return;
  }
  const options: BaseViewerOptions = {
    container: designer.current as HTMLDivElement,
    additionalModules: modelerModules[0] || [],
    moddleExtensions: modelerModules[1] || {},
    ...modelerModules[2],
  };
  // Destroy existing modeler if it exists
  const currentModeler = modeler
  if (currentModeler) {
    currentModeler.clear();
  }
  // Create new modeler
  const BpmnModeler:Modeler = new Modeler(options);

  await BpmnModeler!.importXML(xml).then(() => {
    const canvas: any = BpmnModeler?.get<"canvas">("canvas");
      canvas!.zoom("fit-viewport");
    });
  dispatch(setModeler(BpmnModeler));
}
