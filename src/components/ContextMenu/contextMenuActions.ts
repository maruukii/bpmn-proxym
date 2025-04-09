// src/hooks/useBpmnActions.ts
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import BpmnReplace from 'bpmn-js/lib/features/replace/BpmnReplace'
import ElementFactory from 'bpmn-js/lib/features/modeling/ElementFactory'
import Create from 'diagram-js/lib/features/create/Create'

export default function useBpmnActions() {
  const modeler = useSelector((state: RootState) => state.modeler.modeler)

  let replaceElement: BpmnReplace['replaceElement']
  let elementFactory: ElementFactory
  let create: Create

  function replaceAction(target: any, currentElement: any) {
    if (!replaceElement && modeler) {
      replaceElement = modeler.get<BpmnReplace>('bpmnReplace').replaceElement
    }
    replaceElement?.(currentElement, target)
  }

  function appendAction(target: any, event: Event) {
    if (!elementFactory && modeler) {
      elementFactory = modeler.get<ElementFactory>('elementFactory')
    }
    if (!create && modeler) {
      create = modeler.get<Create>('create')
    }

    const shape = elementFactory?.createShape(target)
    if (!shape) return

    if (target.isExpanded != null) {
      shape.businessObject.di.isExpanded = target.isExpanded
    }
    setTimeout(() => create?.start(event, shape), 30)
  }

  return {
    replaceAction,
    appendAction
  }
}
