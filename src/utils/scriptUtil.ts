import { useSelector } from 'react-redux';
import { RootState } from './../store/store';
import { ModdleElement } from 'bpmn-moddle'

export function createScript(props: ScriptForm): ModdleElement {
  const prefix = "flowable"
  const {moddle} = useSelector((state: RootState) => state.modeler)
  const { scriptFormat, value, resource } = props

  return moddle!.create(`${prefix}:Script`, { scriptFormat, value, resource })
}

export function getScriptType(script: ModdleElement & BpmnScript): string {
  if (script.get('resource')) {
    return 'External Resource'
  }
  if (script.get('value')) {
    return 'Inline Script'
  }
  return 'none'
}
