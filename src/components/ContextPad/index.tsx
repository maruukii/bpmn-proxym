import { withTranslation } from "react-i18next";
import stencilConfig from "../../tasks/stencils.json";
import { useEffect, useState } from "react";
import { updateDynamicProperty } from "../../utils/dynamicPropertyUtil";
import { generateFlowableId } from "../../utils/tools";

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

  const handleDragStart = (event: React.DragEvent, elementId: string) => {
    event.dataTransfer.setData("elementId", elementId);
    event.dataTransfer.effectAllowed = "copy";
  };

  useEffect(() => {
    if (!modeler) return;

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

      const stencilElement = stencilConfig.stencils.find(
        (el: any) => el.id === elementId
      );
      if (!stencilElement) return;

      const container = canvas.getContainer();
      const rect = container.getBoundingClientRect();
      const viewbox = canvas.viewbox();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      const diagramX = viewbox.x + (clientX / rect.width) * viewbox.width;
      const diagramY = viewbox.y + (clientY / rect.height) * viewbox.height;

      const findParentElement = (x: number, y: number) => {
        const participants = elementRegistry.filter(
          (el: any) => el.type === "bpmn:Participant"
        );
        return participants.find((part: any) => {
          const { x: px, y: py, width, height } = part;
          return x >= px && x <= px + width && y >= py && y <= py + height;
        });
      };

      const parent =
        findParentElement(diagramX, diagramY) || canvas.getRootElement();

      // Check if it's a Structural element
      const isStructural = stencilElement.groups?.includes("Structural");

      const shape = elementFactory.createShape({
        type: stencilElement.bpmnType,
        x: diagramX,
        y: diagramY,
        width: stencilElement.width,
        height: stencilElement.height,
        ...(isStructural && {
          isExpanded: Boolean(stencilElement?.isExpanded),
          triggeredByEvent: Boolean(stencilElement?.triggeredByEvent),
        }),
      });

      const element = modeling.createShape(
        shape,
        { x: diagramX, y: diagramY },
        parent
      );

      if (isStructural && element.di) {
        element.businessObject.isExpanded = Boolean(stencilElement.isExpanded);
        element.di.isExpanded = Boolean(stencilElement.isExpanded);
        canvas.resized();
      }

      if (stencilElement.eventDefinitionType) {
        const eventDef = bpmnFactory.create(stencilElement.eventDefinitionType);
        modeling.updateProperties(element, {
          eventDefinitions: [eventDef],
        });

        if (element.type === "bpmn:BoundaryEvent") {
          modeling.updateProperties(element, {
            cancelActivity:
              !stencilElement.eventDefinitionType.includes("Compensate"),
          });
        }
      }

      if (stencilElement.flowableType) {
        setTimeout(() => {
          updateDynamicProperty(
            modeling,
            element,
            "type",
            stencilElement.flowableType
          );
        }, 0);
      }
      const customId = generateFlowableId();
      modeling.updateProperties(element, { id: customId });
    };

    const handleDragOver = (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
    };

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
