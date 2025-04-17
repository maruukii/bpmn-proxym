import Modeler from 'bpmn-js/lib/Modeler';

import { setModeler } from '../../store/modeler/modelerSlice'; 
import EventEmitter from '../../utils/EventEmitter'; 
import type { BaseViewerOptions } from 'bpmn-js/lib/BaseViewer';
import type { ModulesAndModdles } from './modulesAndModdle';
import "diagram-js-minimap/assets/diagram-js-minimap.css";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import { AppDispatch } from '../../store/store';
interface InitModelerProps {
    designer: React.RefObject<HTMLDivElement | null>;
    propertiesRef: React.RefObject<HTMLDivElement | null>;
    xml: string;
    modelerModules: ModulesAndModdles;
  dispatch:AppDispatch;
  modeler: Modeler | undefined;
//   emit: (event: string, payload?: any) => void;
}

/**
 * Initialize BPMN Modeler
 */
export default async function initModeler({ designer, xml,propertiesRef,modelerModules,dispatch,modeler }: InitModelerProps) {
  if (!designer) {
    console.error('Designer container is not available');
    return;
  }

  const options: BaseViewerOptions = {
    container: designer.current as HTMLDivElement,
    propertiesPanel: {
        parent: propertiesRef.current,
      },
    additionalModules: modelerModules[0] || [],
    moddleExtensions: modelerModules[1] || {},
    ...modelerModules[2],
  };
  // Destroy existing modeler if it exists
  const currentModeler = modeler
  if (currentModeler) {
    currentModeler.destroy();
    dispatch(setModeler(undefined));
  }

  // Create new modeler
  const BpmnModeler:Modeler = new Modeler(options);
  await BpmnModeler!.importXML(xml).then(() => {
    const canvas: any = BpmnModeler?.get<"canvas">("canvas");
      canvas!.zoom("fit-viewport");
    });
  dispatch(setModeler(BpmnModeler));
  // Emit modeler-init event (if you're using EventEmitter)
  EventEmitter.emit('modeler-init', modeler);
  // Enhance the modeler (add context menu etc.)
//   EnhancementContextmenu(modeler);

//   // Listen to command stack changes
//   BpmnModeler.on('commandStack.changed', async (event: any) => {
//     try {
//       const { xml } = await BpmnModeler.saveXML({ format: true });
//     //   emit('update:xml', xml);
//     //   emit('command-stack-changed', event);
//     } catch (error) {
//       console.error(error);
//     }
//   });
}
