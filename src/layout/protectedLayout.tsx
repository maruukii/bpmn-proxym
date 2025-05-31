import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Protected: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen overflow-auto flex flex-col">
      <Navbar />

      <main className="mt-24 flex-grow overflow-auto">{children}</main>
    </div>
  );
};

export default Protected;
