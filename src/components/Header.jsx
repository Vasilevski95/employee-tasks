import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import useWindowSize from "./Hook/useWindowSize";
import "./Header.css";

const Header = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 1024 ? (
        <FaTabletAlt />
      ) : width < 1440 ? (
        <FaLaptop />
      ) : (
        <FiMonitor />
      )}
    </header>
  );
};

export default Header;
