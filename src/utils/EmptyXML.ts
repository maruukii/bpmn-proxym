export default (key: string, name: string, description?: string): string => {
//   return `<?xml version="1.0" encoding="UTF-8"?>
// <bpmn:definitions 
//   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//   xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
//   xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
//   xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
//   xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
//   targetNamespace="http://bpmn.io/schema/bpmn"
//   id="Definitions_${key}">
//   <bpmn:process id="${key}" name="${name}" isExecutable="true"></bpmn:process>
//   <bpmndi:BPMNDiagram id="BPMNDiagram_1">
//     <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="${key}"></bpmndi:BPMNPlane>
//   </bpmndi:BPMNDiagram>
// </bpmn:definitions>
return `
<definitions 
xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
xmlns:flowable="http://flowable.org/bpmn" 
xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" 
xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" 
typeLanguage="http://www.w3.org/2001/XMLSchema" 
expressionLanguage="http://www.w3.org/1999/XPath" 
targetNamespace="http://www.flowable.org/processdef" 
exporter="Proxym Custom Flowable Modeler" 
exporterVersion="0.1.0">
<process id="${key}" name="${name}" isExecutable="true">
${description ? `<documentation>${description}</documentation>` : ''}
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_${key}">
<bpmndi:BPMNPlane id="BPMNPlane_${key}" bpmnElement="${key}">
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`
}
