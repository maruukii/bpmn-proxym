import { AppDispatch } from '../../src/store/store';
import type { ModulesAndModdles } from '../../src/components/Designer/modulesAndModdle';

declare interface InitModelerProps {
    designer: React.RefObject<HTMLDivElement | null>;
    xml: string;
    modelerModules: ModulesAndModdles;
    dispatch:AppDispatch;
    modeler: Modeler | undefined;
}