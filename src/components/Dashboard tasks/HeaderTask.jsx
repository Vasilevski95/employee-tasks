import React from "react";

const HeaderTask = ({ setIsAddingTask }) => {
  return (
    <header>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button
          style={{ backgroundColor: "#f7d464", marginLeft: "20px" }}
          className="button"
          onClick={() => setIsAddingTask(true)}
        >
          Add Task
        </button>
      </div>
    </header>
  );
};

export default HeaderTask;
