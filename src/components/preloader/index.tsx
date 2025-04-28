import { useEffect } from "react";
import { Mirage } from "ldrs/react";
import "ldrs/react/Mirage.css";

const Preloader = () => {
  //   useEffect(() => {
  //     const preloader = document.querySelector(".preloader");
  //     if (preloader) {
  //       setTimeout(() => {
  //         preloader.classList.add("fade-out");
  //         setTimeout(() => preloader.remove(), 1500);
  //       }, 1000);
  //     }
  //   }, []);

  return (
    <div className="z-100 preloader fixed inset-0 flex items-center justify-center bg-white">
      <Mirage size="60" speed="2.5" color="black" />
    </div>
  );
};

export default Preloader;
