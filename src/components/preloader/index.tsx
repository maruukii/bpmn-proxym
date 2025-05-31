import { Mirage } from "ldrs/react";

const Preloader = () => {
  return (
    <div className="z-100 preloader fixed inset-0 flex items-center justify-center bg-white">
      <Mirage size="60" speed="2.5" color="black" />
    </div>
  );
};

export default Preloader;
