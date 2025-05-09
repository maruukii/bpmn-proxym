import React from "react";
type LayoutProps = {
  children: React.ReactNode;
};

const Public = ({ children }: LayoutProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default Public;
