import React from "react";
import Header from "./Header";
import Nav from "./Nav";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="Layout">
      <Header title="EMPLOYEES AND TASKS MANAGER" />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

//Layout that is visible on all of the pages, with outlet that determines on which route you are currently at

export default Layout;
