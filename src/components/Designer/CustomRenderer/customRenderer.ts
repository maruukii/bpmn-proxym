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

    // Only target bpmn:ServiceTask
    if (element.type === 'bpmn:ServiceTask') {
      const iconUrl = this.getCustomIconForTask(element);

      const customIcon = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      customIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', iconUrl);
      customIcon.setAttribute('width', '30');
      customIcon.setAttribute('height', '30');

      const width = element.width || 100;
      const height = element.height || 80;

      // Position the icon at the center
      customIcon.setAttribute('x', `0`);
      customIcon.setAttribute('y', `0`);

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

    // Default icon for service tasks
    return '/proxym.png'; // Ensure this exists in your `public` folder
  }

  canRender(element: Shape): boolean {
    return true; // Render all elements (or filter here if needed)
  }
}
