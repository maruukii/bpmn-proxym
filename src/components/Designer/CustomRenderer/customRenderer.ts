import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';
import type { Shape } from 'diagram-js/lib/model/Types';
import type { ModdleElement } from 'bpmn-moddle';

const HIGH_PRIORITY = 2000;

export default class CustomRenderer extends BaseRenderer {
  static $inject = ['eventBus', 'bpmnRenderer'];

  private bpmnRenderer: any;

  constructor(eventBus: any, bpmnRenderer: any) {
    super(eventBus, HIGH_PRIORITY);
    this.bpmnRenderer = bpmnRenderer;
  }

  drawShape(parentNode: SVGElement, element: Shape): SVGElement {
    // Draw the default BPMN shape first
    const shape = this.bpmnRenderer.drawShape(parentNode, element);
    const businessObject = element.businessObject as ModdleElement;
    const regional= businessObject?.get('name')?.includes('Regional');
    if(regional){
const backgroundRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  backgroundRect.setAttribute('width', element.width.toString());
  backgroundRect.setAttribute('height', element.height.toString());
  backgroundRect.setAttribute('fill', '#f0f0f0'); 
  backgroundRect.setAttribute('x', '0');
  backgroundRect.setAttribute('y', '0');
parentNode.insertBefore(backgroundRect,parentNode.firstChild);
return shape;
    }
    const type = businessObject?.get('type');
    if (type === "MySQL" ) {
      const iconUrl = this.getCustomIconForTask(element);
 const width = element.width || 100;
      const height = element.height || 80;
      const customIcon = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      customIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', iconUrl);
      customIcon.setAttribute('width', width.toString());
      customIcon.setAttribute('height', height.toString());

     

      // Position the icon at the center
      customIcon.setAttribute('x', `0`);
      customIcon.setAttribute('y', `0`);

      parentNode.appendChild(customIcon);
    }
    if(type==="MessageCenterTask"){
        const iconUrl = this.getCustomIconForTask(element);
  const width = element.width || 30;
  const height = element.height || 30;
      const customIcon = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  customIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', iconUrl);
  customIcon.setAttribute('width', width.toString());
  customIcon.setAttribute('height', height.toString());
  customIcon.setAttribute('x', String(width/2-10));
  customIcon.setAttribute('y', String(height/2+20));
customIcon.setAttribute('width', "20");
  customIcon.setAttribute('height', "20");
  // Append background first, then the icon
  parentNode.appendChild(customIcon);
    }
else if (type === "camel") {
  const iconUrl = this.getCustomIconForTask(element);
  const width = element.width || 30;
  const height = element.height || 30;

  // Create a white background rectangle
  const backgroundRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  backgroundRect.setAttribute('width', width.toString());
  backgroundRect.setAttribute('height', height.toString());
  backgroundRect.setAttribute('fill', '#e5936a'); 
  backgroundRect.setAttribute('x', '0');
  backgroundRect.setAttribute('y', '0');

  backgroundRect.setAttribute('rx', '10');
backgroundRect.setAttribute('ry', '10');
  const customIcon = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  customIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', iconUrl);
  customIcon.setAttribute('width', width.toString());
  customIcon.setAttribute('height', height.toString());
  customIcon.setAttribute('x', '0');
  customIcon.setAttribute('y', '0');
customIcon.setAttribute('width', "20");
  customIcon.setAttribute('height', "20");
  // Append background first, then the icon
  parentNode.appendChild(backgroundRect);
  parentNode.appendChild(customIcon);
}

    return shape;
  }

  getCustomIconForTask(element: Shape): string {
    const businessObject = element.businessObject as ModdleElement;

    // Customize logic here:
    // For example: check name or custom properties
    // if (businessObject.name?.includes('Proxy')) {
    //   return '/icons/proxy.png';
    // }
  if(businessObject?.get('type')==="MessageCenterTask") return '/icons/custom/icons8-email-50.png';

  if(businessObject?.get('type')==="MySQL") return '/icons/custom/mysql.png';
  if (businessObject?.get('type')==="camel") return '/icons/activity/list/type.camel.png';
    return '/proxym.png'; 
  }

  canRender(element: Shape): boolean {
    if(element)
    return true;
  return false // Render all elements (or filter here if needed)
  }
}
