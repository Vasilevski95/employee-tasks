import React from "react";
import Header from "./Header";
import Nav from "./Nav";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Header title="Employees app" />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
