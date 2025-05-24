import { useEffect, useRef } from "react";
import BpmnViewer from "../../Pages/BPMNviewer/bpmnViewer";
import modulesAndModdle, { ModulesAndModdles } from "./modulesAndModdle";
import initModeler from "./initModeler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setNewDiagramStatus } from "../../store/modeler/modelerSlice";
// import { clearNewDiagramStatus } from "../../store/modeler/modelerSlice";
interface DesignerProps {
  xml: string;
  filename: string | null;
}

const Designer: React.FC<DesignerProps> = ({ xml, filename }) => {
  const designer = useRef<HTMLDivElement>(null);
  // const propertiesRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const { modeler, newDiagramStatus } = useSelector(
    (state: RootState) => state.modeler
  );

  const isInitialized = useRef(false);
  useEffect(() => {
    if (isInitialized.current && !newDiagramStatus) return;
    isInitialized.current = true;
    const setupModeler = async () => {
      try {
        // clear and refresh to designer
        if (designer.current) {
          designer.current.innerHTML = "";
        }
        const modelerModules: ModulesAndModdles = modulesAndModdle();

        await initModeler({
          designer,
          xml,
          modelerModules,
          dispatch,
          modeler,
        });
        dispatch(setNewDiagramStatus());
      } catch (error) {
        console.error(error);
      }
    };

    setupModeler();
  }, [xml, filename]);
  return (
    <BpmnViewer
      filename={filename}
      designer={designer}
      // propertiesRef={propertiesRef}
    />
  );
};

export default Designer;
