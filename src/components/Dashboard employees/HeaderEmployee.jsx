import React from "react";

const HeaderEmployee = ({ setIsAddingEmployee }) => {
  return (
    <header className="head">
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button
          style={{ backgroundColor: "#f7d464", marginLeft: "20px" }}
          className="button"
          onClick={() => setIsAddingEmployee(true)}
        >
          Add Employee
        </button>
      </div>
    </header>
  );
};

export default HeaderEmployee;
