import React from "react";

const Status = ({ status, setStatus }) => {
  return (
    <>
      <label htmlFor="status">Status</label>
      <select
        id="status"
        type="text"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>In progress</option>
        <option>Completed</option>
        <option>Overdue</option>
      </select>
    </>
  );
};

export default Status;
