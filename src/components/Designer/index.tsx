import { useEffect, useRef } from "react";
import BpmnViewer from "../../Pages/BPMNviewer/bpmnViewer";
import modulesAndModdle, { ModulesAndModdles } from "./modulesAndModdle";
import initModeler from "./initModeler";
import { createNewDiagram } from "../../utils/createNewDiagram";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface DesignerProps {
  xml: string;
  filename: string | null;
}

const Designer: React.FC<DesignerProps> = ({ xml, filename }) => {
  const designer = useRef<HTMLDivElement>(null);
  const propertiesRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const { modeler } = useSelector((state: RootState) => state.modeler);

  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;
    const setupModeler = async () => {
      try {
        const modelerModules: ModulesAndModdles = modulesAndModdle();
        await initModeler({
          designer,
          xml,
          propertiesRef,
          modelerModules,
          dispatch,
          modeler,
        });

        // if (!xml || !xml.length) {
        //   await createNewDiagram();
        // } else {
        //   await createNewDiagram(xml, modeler);
        // }
      } catch (error) {
        console.error(error);
      }
    };

    setupModeler();
  }, []);
  return (
    <BpmnViewer
      filename={filename}
      designer={designer}
      propertiesRef={propertiesRef}
    />
  );
};

export default Designer;
