import { lazy } from "react";

// Lazy load the components
const Home = lazy(() => import("../Pages/BPMNhome/bpmnHome"));

// all routes in a single array
const routes = [
  // Client Routes
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  //   { path: "/viewer",element:<BpmnViewer/>},
  //   {
  //     path: "/login",
  //     element: (
  //       <RedirectIfLoggedIn>
  //         <Login />
  //       </RedirectIfLoggedIn>
  //     ),
  //     layout: layoutTypes.CLIENT,
  //   },
  //   { path: "/google/oauth", element: <HandleExternalOauth />, type: "public" },
  //   { path: "/facebook/oauth", element: <HandleExternalOauth />, type: "public" },
  //   { path: "/linkedin/oauth", element: <HandleExternalOauth />, type: "public" },
  //   { path: "/github/oauth", element: <HandleExternalOauth />, type: "public" },
  //   {
  //     path: "/forgot-password",
  //     element: (
  //       <RedirectIfLoggedIn>
  //         <EmailVerification />
  //       </RedirectIfLoggedIn>
  //     ),
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/signup",
  //     element: (
  //       <RedirectIfLoggedIn>
  //         <Signup />
  //       </RedirectIfLoggedIn>
  //     ),
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/account-activation",
  //     element: (
  //       <RedirectIfLoggedIn>
  //         <AccountActivation />
  //       </RedirectIfLoggedIn>
  //     ),
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/reset-password",
  //     element: (
  //       <RedirectIfLoggedIn>
  //         <PasswordReset />
  //       </RedirectIfLoggedIn>
  //     ),
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/courses",
  //     element: <Courses />,
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/course/:id",
  //     element: <CourseViewer />,
  //     type: "client",
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/courseDetails",
  //     element: <CourseDetails />,
  //     layout: layoutTypes.CLIENT,
  //   },

  //   // Auth Protected Routes
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/calendar",
  //     element: <Calendar />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/user-profile",
  //     element: <UserProfile />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/profile",
  //     element: <UserProfile />,
  //     type: "client",
  //     layout: layoutTypes.CLIENT,
  //   },
  //   {
  //     path: "/users",
  //     element: <UsersList />,
  //     type: "Admin",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/reclamations",
  //     element: <Reclamations />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/audits",
  //     element: <Audit />,
  //     type: "Admin",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/manage-courses",
  //     element: <ManageCourses />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/Test-Final/:id",
  //     element: <TestFinal />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/Test-Final/:_id/:id",
  //     element: <TestFinal />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/Test-Final",
  //     element: <TestFinal />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/manage-course/:id",
  //     element: <CrudCourse />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/manage-course",
  //     element: <CrudCourse />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/manage-lesson/:id",
  //     element: <CrudLesson />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },

  //   {
  //     path: "/pages-starter",
  //     element: <StarterPage />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/pages-timeline",
  //     element: <TimeLine />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/pages-faqs",
  //     element: <FAQs />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   {
  //     path: "/pages-pricing",
  //     element: <Pricing />,
  //     type: "authProtected",
  //     layout: localStorage.getItem("layoutType"),
  //   },
  //   // {
  //   //   path: "/ui-alerts",
  //   //   element: <UiAlerts />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-badge",
  //   //   element: <UiBadge />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-breadcrumb",
  //   //   element: <UiBreadcrumb />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-buttons",
  //   //   element: <UiButtons />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-cards",
  //   //   element: <UiCards />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-carousel",
  //   //   element: <UiCarousel />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-dropdowns",
  //   //   element: <UiDropdown />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-grid",
  //   //   element: <UiGrid />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-images",
  //   //   element: <UiImages />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-lightbox",
  //   //   element: <UiLightbox />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-modals",
  //   //   element: <UiModals />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-offcanvas",
  //   //   element: <UiOffcanvas />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-rangeslider",
  //   //   element: <UiRangeSlider />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-sessiontimeout",
  //   //   element: <UiSessionTimeout />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-pagination",
  //   //   element: <UiPagination />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-progressbars",
  //   //   element: <UiProgressBars />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-placeholders",
  //   //   element: <UiPlaceholders />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-tabs-accordions",
  //   //   element: <UiTabs />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-typography",
  //   //   element: <UiTypography />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-toasts",
  //   //   element: <UiToasts />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-video",
  //   //   element: <UiVideo />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-popovers",
  //   //   element: <UiPopovers />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   // {
  //   //   path: "/ui-rating",
  //   //   element: <UiRating />,
  //   //   type: "authProtected",
  //   //   layout: layoutTypes.VERTICAL,
  //   // },
  //   {
  //     path: "/form-elements",
  //     element: <FormElements />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   {
  //     path: "/form-validation",
  //     element: <FormValidations />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   { path: "/form-advanced", element: <FormAdvanced />, type: "authProtected" },
  //   { path: "/form-editor", element: <FormEditors />, type: "authProtected" },
  //   { path: "/form-uploads", element: <FormUpload />, type: "authProtected" },
  //   { path: "/form-editors", element: <FormXeditable />, type: "authProtected" },
  //   { path: "/form-wizard", element: <FormWizard />, type: "authProtected" },
  //   { path: "/form-mask", element: <FormMask />, type: "authProtected" },
  //   { path: "/tables-basic", element: <BasicTable />, type: "authProtected" },
  //   { path: "/tables-listjs", element: <ListJs />, type: "authProtected" },
  //   { path: "/table-datatables", element: <DataTable />, type: "authProtected" },
  //   { path: "/chart-apexcharts", element: <ApexCharts />, type: "authProtected" },
  //   { path: "/chart-chartjscharts", element: <ChartJs />, type: "authProtected" },
  //   {
  //     path: "/chart-floatcharts",
  //     element: <FloatChart />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   {
  //     path: "/chart-jknobcharts",
  //     element: <JknobCharts />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   {
  //     path: "/chart-sparklinecharts",
  //     element: <Sparklinechart />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   { path: "/icon-boxicon", element: <IconBoxicons />, type: "authProtected" },
  //   {
  //     path: "/icons-materialdesign",
  //     element: <IconMaterialdesign />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   {
  //     path: "/icons-fontawesome",
  //     element: <IconFontawesome />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   {
  //     path: "/icon-dripicons",
  //     element: <IconDripicons />,
  //     type: "authProtected",
  //     layout: layoutTypes.VERTICAL,
  //   },
  //   { path: "/maps-vector", element: <VectorMaps />, type: "authProtected" },
  //   { path: "/maps-google", element: <GoogleMap />, type: "authProtected" },

  //   // Public Routes
  //   // { path: "/logout", element: <Logout />, type: "public" },
  //   // { path: "/register", element: <Register />, type: "public" },
  //   { path: "/auth-login", element: <Login1 />, type: "public" },
  //   { path: "/auth-register", element: <Register1 />, type: "public" },
  //   { path: "/auth-recoverpw", element: <RecoverPassword />, type: "public" },
  //   { path: "/auth-lock-screen", element: <LockScreen />, type: "public" },
  //   {
  //     path: "/*",
  //     element: <Error404 />,
  //     type: "public",
  //   },
  //   { path: "/pages-500", element: <Error500 />, type: "public" },
  //   { path: "/pages-maintenance", element: <Maintenance />, type: "public" },
  //   { path: "/pages-comingsoon", element: <ComingSoon />, type: "public" },
];

export default routes;
