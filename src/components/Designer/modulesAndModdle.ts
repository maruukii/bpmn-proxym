import {
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
  } from 'bpmn-js-properties-panel'
  import flowableModdleDescriptors from '../../tasks/tasks.json'
  import GridLineModule from 'diagram-js-grid-bg'
  import type { ModuleDeclaration } from 'didi'
  import minimapModule from 'diagram-js-minimap'
  import BpmnColorPickerModule from 'bpmn-js-color-picker'
  import lintModule from 'bpmn-js-bpmnlint'
  import CustomPropertiesProvider from '../CustomPropertiesProvider'

  export type ModulesAndModdles = [
    ModuleDeclaration[],
    { [key: string]: any },
    { [key: string]: unknown }
  ]
  export default function (): ModulesAndModdles {
    const modules: ModuleDeclaration[] = [] 
    let moddle: { [key: string]: any } = {} 
    const options: { [key: string]: unknown } = {}
  

  
    // 配置模板选择弹窗（会影响默认 popupmenu）
    modules.push(
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        CustomPropertiesProvider()
      );
      


    //   modules.push(CustomPropertiesProvider({propertiesPanel:BpmnPropertiesPanelModule, moddleDescriptors:flowableModdleDescriptors}));
      moddle = {}
      moddle['flowable'] = flowableModdleDescriptors

    // BPMN linting
      modules.push(lintModule)
    //   options['linting'] = {
    //     active: true,
    //     bpmnlint: bpmnlint
    //   }
  
    // minimap
      modules.push(minimapModule)
      options['minimap'] = {
        open: true
      }
  

  
    //   modules.push(Rules)
  
    //   modules.push(AutoPlace)
  
    //   modules.push(TokenSimulationModule)
  
      modules.push(BpmnColorPickerModule)
  
      modules.push(GridLineModule)
  
      // modules.push(ExternalLabelModule)
  
    //   // 设置键盘事件绑定
    //   options['keyboard'] = {
    //     bindTo: document
    //   }
  
    //   modules.push(ElementFactory)
    //   options['elementFactory'] = {
    //     'bpmn:Task': { width: 120, height: 120 },
    //     'bpmn:SequenceFlow': { width: 100, height: 80 }
    //   }
    
  
    // // 配置 翻译 与 流程模拟
    // modules.push(translate)
  

  
    return [modules, moddle, options]
  }
  