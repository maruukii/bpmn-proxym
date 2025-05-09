import { withTranslation } from "react-i18next";
import stencilConfig from "../../tasks/stencils.json";
import { useEffect, useState } from "react";
import { updateDynamicProperty } from "../../utils/dynamicPropertyUtil";

function CustomPalette({ modeler, t }: { modeler: any; t: any }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const groupedStencils = stencilConfig.stencils
    .filter((stencil) => stencil.type === "node")
    .reduce((acc: Record<string, any[]>, stencil) => {
      const category = stencil.groups;

      if (typeof category !== "string") return acc;

      if (!acc[category]) acc[category] = [];
      acc[category].push(stencil);

      return acc;
    }, {});

  const toggleCategory = (cat: string) => {
    setExpanded((prev) => (prev === cat ? null : cat));
  };

  const handleDragStart = (event: React.DragEvent, elementId: any) => {
    // event.dataTransfer.setData("bpmn-type", stencil.type);
    // event.dataTransfer.setData("stencil-data", JSON.stringify(stencil));
    event.dataTransfer.setData("elementId", elementId);
    event.dataTransfer.effectAllowed = "copy";
  };
  useEffect(() => {
    if (!modeler) return;

    // Import your stencil configuration
    const elementRegistry = modeler.get("elementRegistry");
    const canvas = modeler.get("canvas");
    const elementFactory = modeler.get("elementFactory");
    const modeling = modeler.get("modeling");
    const bpmnFactory = modeler.get("bpmnFactory");

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();

      const elementId = event.dataTransfer?.getData("elementId");
      if (!elementId) return;

      // Find the stencil element definition
      const stencilElement = stencilConfig.stencils.find(
        (el: BpmnElement) => el.id === elementId
      );
      if (!stencilElement) return;

      // Calculate position
      const container = canvas.getContainer();
      const rect = container.getBoundingClientRect();
      const viewbox = canvas.viewbox();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      const diagramX = viewbox.x + (clientX / rect.width) * viewbox.width;
      const diagramY = viewbox.y + (clientY / rect.height) * viewbox.height;

      // Find parent element (pool/lane)
      const targetParent =
        findParentElement(diagramX, diagramY) || canvas.getRootElement();

      // Create the base shape
      const shape = elementFactory.createShape({
        type: stencilElement.bpmnType,
        x: diagramX,
        y: diagramY,
        width: stencilElement.width,
        height: stencilElement.height,
      });

      // Create element on canvas
      const element = modeling.createShape(
        shape,
        { x: diagramX, y: diagramY },
        targetParent
      );

      // Add event definition if specified
      if (stencilElement?.eventDefinitionType) {
        addEventDefinition(element, stencilElement, bpmnFactory, modeling);
      }
      if (stencilElement?.flowableType) {
        updateDynamicProperty(
          modeling,
          element,
          "type",
          stencilElement.flowableType
        );
      }
    };

    // Helper functions
    const findParentElement = (x: number, y: number) => {
      const participants = elementRegistry.filter(
        (el: BpmnElement) => el.type === "bpmn:Participant"
      );
      return participants.find((part: BpmnElement) => {
        const { x: px, y: py, width, height } = part;
        return x >= px && x <= px + width && y >= py && y <= py + height;
      });
    };

    const addEventDefinition = (
      element: any,
      stencilEl: any,
      bpmnFactory: any,
      modeling: any
    ) => {
      const eventDefinition = bpmnFactory.create(stencilEl.eventDefinitionType);

      modeling.updateProperties(element, {
        eventDefinitions: [eventDefinition],
      });

      // Handle boundary event special cases
      if (element.type === "bpmn:BoundaryEvent") {
        modeling.updateProperties(element, {
          cancelActivity: !stencilEl.eventDefinitionType.includes("Compensate"),
        });
      }
    };
    const handleDragOver = (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
    };
    // Event listeners setup
    const container = canvas.getContainer();
    container.addEventListener("drop", handleDrop);
    container.addEventListener("dragover", handleDragOver);

    return () => {
      container.removeEventListener("drop", handleDrop);
      container.removeEventListener("dragover", handleDragOver);
    };
  }, [modeler]);
  return (
    <div className="custom-palette space-y-2">
      {Object.entries(groupedStencils).map(([category, stencils]) => {
        const isOpen = expanded === category;
        return (
          <div
            key={category}
            className="border border-gray-300 rounded shadow-sm"
          >
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium text-lg text-left"
            >
              <span>{t(category)}</span>
              <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen
                  ? "max-h-[1000px] opacity-100 py-2"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <div className="flex flex-col gap-2 px-4">
                {stencils.map((stencil) => (
                  <div
                    key={stencil.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, stencil.id)}
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-move border border-gray-200"
                  >
                    <img
                      src={`/icons/${stencil.icon}`}
                      alt={t(stencil.title)}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-lg">{t(stencil.title)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withTranslation()(CustomPalette);
