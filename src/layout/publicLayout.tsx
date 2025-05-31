import React from "react";
type LayoutProps = {
  children: React.ReactNode;
};

const Public = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <nav className="fixed top-0 h-12 w-full bg-gray-800 text-white px-6 py-3 flex items-center justify-between z-50 shadow-md">
        <div className="flex items-center space-x-2">
          {/* <Link to={"/landingpage"}>
            <img
              src="/bankerise-flowable-logo.png"
              alt="Proxym Bankerise"
              className="md:max-w-30 lg:max-w-40 xl:max-w-60"
            />
          </Link> */}
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Public;
