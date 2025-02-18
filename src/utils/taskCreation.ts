// 🛠️ Add Task to BPMN
export const addTask = (modeler: any) => {
    if (!modeler) return;
  
    // ✅ Explicitly define the types for each service
    const modeling = modeler.get("modeling") as {
      createShape: (element: any, position: { x: number; y: number }, target: any) => void;
    };
  
    const elementFactory = modeler.get("elementFactory") as {
      createShape: (options: { type: string }) => any;
    };
  
    const canvas = modeler.get("canvas") as {
      zoom: (value: string) => void;
    };
  
    const elementRegistry = modeler.get("elementRegistry") as {
      get: (id: string) => any;
    };
  
    const process = elementRegistry.get("Process_1"); // Get the main process
  
    if (!process) {
      console.error("Process not found!");
      return;
    }
  
    const newTask = elementFactory.createShape({
      type: "bpmn:Task",
    });
  
    modeling.createShape(newTask, { x: 300, y: 200 }, process);
    canvas.zoom("fit-viewport");
  };
  