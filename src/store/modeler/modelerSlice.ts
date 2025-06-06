import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type  BpmnModdle  from 'bpmn-moddle'
import type Modeler from 'bpmn-js/lib/Modeler'
import type Modeling from 'bpmn-js/lib/features/modeling/Modeling'
import type Canvas from 'diagram-js/lib/core/Canvas'
import type ElementRegistry from 'diagram-js/lib/core/ElementRegistry'


interface ModelerState {
  activeElement: BpmnElement | undefined
  activeElementId: string | undefined
  modeler: Modeler | undefined
  moddle: BpmnModdle | undefined
  modeling: Modeling | undefined
  canvas: Canvas | undefined
  elementRegistry: ElementRegistry | undefined
  newDiagramStatus:boolean
}

const initialState: ModelerState = {
  activeElement: undefined,
  activeElementId: undefined,
  modeler: undefined,
  moddle: undefined,
  modeling: undefined,
  canvas: undefined,
  elementRegistry: undefined,
  newDiagramStatus: false,
}

const modelerSlice = createSlice({
  name: 'modeler',
  initialState,
  reducers: {
    setModeler(state, action: PayloadAction<Modeler | undefined>) {
      state.modeler = action.payload
      if (action.payload) {
        const modeler = action.payload
        state.modeling = modeler.get<Modeling>('modeling')
        state.newDiagramStatus = false
        state.moddle = modeler.get<BpmnModdle>('moddle')
        state.canvas = modeler.get<Canvas>('canvas')
        state.elementRegistry = modeler.get<ElementRegistry>('elementRegistry')
      } else {
        state.modeling = undefined
        state.moddle = undefined
        state.canvas = undefined
        state.elementRegistry = undefined
      }
    },
    setNewDiagramStatus(state) {
      state.newDiagramStatus = true 
},

    setElement(state, action: PayloadAction<BpmnElement | undefined>) {
      state.activeElement = action.payload
      state.activeElementId = action.payload?.id
    }
  }
})

export const { setModeler, setElement,setNewDiagramStatus } = modelerSlice.actions

export default modelerSlice.reducer
