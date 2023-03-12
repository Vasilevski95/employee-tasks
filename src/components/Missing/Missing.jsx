import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="missing">
      <h1>Page Not Found</h1>
      <h1>Missing route</h1>
      <p>
        <Link to="/">Back to the employees app</Link>
      </p>
    </main>
  );
};

export default Missing;
