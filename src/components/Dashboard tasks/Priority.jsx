import React from "react";

const Priority = ({ priority, setPriority }) => {
  return (
    <>
      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        type="text"
        name="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </>
  );
};

export default Priority;
