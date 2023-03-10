import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Project</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/top5">Top 5</Link>
        </li>
      </ul>
    </nav>
  );
};

//With navigation user can navigate through the pages

export default Nav;
