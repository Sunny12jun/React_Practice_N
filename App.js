//https://github.com/chetannada/Namaste-React
/**
 * https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter
 * https://reactrouter.com/en/main/start/overview   (Recommnded waqy of Doing Router )
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Body";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Body /> */}
      <Footer />
    </>
  );
};
const AppRoutes = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    errorElement: <Error />,
    children: [
      {
        element: <Body />,
        path: "/",
      },
      {
        element: <About />,
        path: "/About",
      },
      {
        element: <ContactUs />,
        path: "/ContactUs",
      },
      {
        element: <ResturantMenu />,
        path: "/ResturantMenu/:id",
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
