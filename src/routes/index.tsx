import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import PersistLogin from "../components/PersistLogin/PersistLogin.jsx";
// import RequireAuth from "../hooks/RequireAuth.tsx";
import routes from "./routes.tsx";
import Layout from "../layout/layout.tsx";
import Preloader from "../components/preloader/index.tsx";

const Index = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        {routes.map((route, idx) => {
          const RouteElement = <Layout children={route.element}></Layout>;
          //const RouteElement =
          // route.type === "Admin" ? (
          //   <PersistLogin>
          //     <RequireAuth allowedRole={["Admin"]}>
          //       <Layout setLayoutType={setLayoutType}>{route.element}</Layout>
          //     </RequireAuth>
          //   </PersistLogin>
          // ) : route.type === "authProtected" ? (
          //   <PersistLogin>
          //     <RequireAuth allowedRole={["Admin", "Instructor"]}>
          //       <Layout setLayoutType={setLayoutType}>{route.element}</Layout>
          //     </RequireAuth>
          //   </PersistLogin>
          // ) : route.type === "public" ? (
          //   <NonAuthLayout>
          //     <Layout>{route.element}</Layout>
          //   </NonAuthLayout>
          // ) : route.type === "client" ? (
          //   <PersistLogin>
          //     <RequireAuth allowedRole={["Admin", "Instructor", "User"]}>
          //       <Layout>{route.element}</Layout>
          //     </RequireAuth>
          //   </PersistLogin>
          // ) : (
          //   <PersistLogin>
          //     <Layout>{route.element}</Layout>
          //   </PersistLogin>
          // );

          return <Route key={idx} path={route.path} element={RouteElement} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default Index;
