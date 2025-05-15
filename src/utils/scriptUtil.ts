import { ModdleElement } from 'bpmn-moddle'
import type  { Moddle } from 'bpmn-moddle';

export function createScript(props: ScriptForm,moddle:Moddle): ModdleElement {
  const prefix = "flowable"
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
