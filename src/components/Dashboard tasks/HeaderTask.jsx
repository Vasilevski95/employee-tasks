import React from "react";

const HeaderTask = ({ setIsAddingTask }) => {
  return (
    <header>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button className="addButton" onClick={() => setIsAddingTask(true)}>
          Add Task
        </button>
      </div>
    </header>
  );
};

export default HeaderTask;
