import { withTranslation } from "react-i18next";
import stencilConfig from "../../tasks/stencils.json";
import { useEffect, useState } from "react";
import { updateDynamicProperty } from "../../utils/dynamicPropertyUtil";
import { generateFlowableId } from "../../utils/tools";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { axiosElements } from "../../config/axiosInstance";

function CustomPalette({ modeler, t }: { modeler: any; t: any }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [elements, setElements] = useState<ElementMetadata[]>(
    stencilConfig.stencils || []
  );
  const [elementsReady, setElementsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosElements.get("/elements");
        setElements([...response.data, ...elements] as ElementMetadata[]);
        setElementsReady(true);
      } catch (error) {
        console.error("Error fetching elements:", error);
      }
    };

    fetchData();
  }, []);

  const groupedStencils = elements
    .filter((stencil) => stencil.type === "node" && stencil.id !== "Process")
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
      const stencilElement = elements.find((el: any) => el.id === elementId);
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
          (el: any) => el.type === "bpmn:Participant" || el.type === "bpmn:Lane"
        );
        return participants.find((part: any) => {
          const { x: px, y: py, width, height } = part;
          return x >= px && x <= px + width && y >= py && y <= py + height;
        });
      };

      const parent =
        findParentElement(diagramX, diagramY) || canvas.getRootElement();

      const isStructural = stencilElement.groups?.includes("Structural");

      const shape = elementFactory.createShape({
        type: stencilElement.bpmnType,
        x: diagramX,
        y: diagramY,
        width: stencilElement.width,
        height: stencilElement.height,
        ...(isStructural && {
          isExpanded:
            "isExpanded" in stencilElement
              ? Boolean(stencilElement?.isExpanded)
              : false,
          triggeredByEvent:
            "triggeredByEvent" in stencilElement
              ? Boolean(stencilElement?.triggeredByEvent)
              : true,
        }),
      });
      const element = modeling.createShape(
        shape,
        { x: diagramX, y: diagramY },
        parent
      );

      if (isStructural && element.di) {
        element.businessObject.isExpanded =
          "isExpanded" in stencilElement
            ? Boolean(stencilElement?.isExpanded)
            : false;
        element.di.isExpanded =
          "isExpanded" in stencilElement
            ? Boolean(stencilElement?.isExpanded)
            : false;
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
      if (typeof stencilElement?.flowableType !== undefined) {
        setTimeout(() => {
          updateDynamicProperty(
            modeling,
            element,
            "type",
            stencilElement.flowableType as string | boolean
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
  }, [modeler, elementsReady]);

  return (
    <>
      {isOpen && (
        <div className="fixed z-[120] overflow-auto">
          <div
            className={`relative top-0 left-0 h-[79vh] bg-white shadow-lg border-r border-gray-300 transition-transform duration-300 ease-in-out w-64
        translate-x-0`}
          >
            <div className="p-2 border-b flex justify-between items-center">
              <span className="font-semibold text-lg">{t("Palette")}</span>
              <button onClick={() => setIsOpen(false)}>
                <ChevronDoubleLeftIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="custom-palette space-y-2 p-2 overflow-y-auto h-[71vh]">
              {Object.entries(groupedStencils).map(([category, stencils]) => {
                const isCategoryOpen = expanded === category;
                return (
                  <div
                    key={category}
                    className="border border-gray-300 rounded shadow-sm"
                  >
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium text-md text-left"
                    >
                      <span title={t(category.replace("TITLE", "DESCRIPTION"))}>
                        {t(category)}
                      </span>
                      <span className="text-gray-500">
                        {isCategoryOpen ? "▲" : "▼"}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isCategoryOpen
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
                            {typeof stencil.icon === "object" &&
                            stencil.icon?.ImageLink ? (
                              <img
                                src={stencil.icon.ImageLink}
                                alt="Thumbnail"
                                className={`w-6 h-6 object-contain`}
                              />
                            ) : typeof stencil.icon === "string" ? (
                              <img
                                src={"/icons/" + stencil.icon}
                                alt="Thumbnail"
                                className="w-6 h-6 object-contain"
                              />
                            ) : null}
                            <span
                              className="text-sm"
                              title={t(stencil.description)}
                            >
                              {t(stencil.title)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Open Button */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white text-xs font-bold py-2 px-1 cursor-pointer rounded-r-2xl z-[90]"
          style={{ writingMode: "sideways-lr" }}
        >
          <div className="text-lg tracking-wide px-3">P a l e t t e</div>
        </div>
      )}
    </>
  );
}

export default withTranslation()(CustomPalette);
