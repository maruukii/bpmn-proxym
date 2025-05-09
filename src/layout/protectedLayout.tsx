import React from "react";
import Navbar from "../components/Common/Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Protected: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4"> {children}</main>
    </div>
  );
};

export default Protected;
