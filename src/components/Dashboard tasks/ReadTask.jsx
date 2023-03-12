import React from "react";

const ReadTask = ({ selectedTask, setIsReadingTask }) => {
  const { title, description, assignee, date, status } = selectedTask;

  return (
    <div className="read-employee">
      <h1>Title: {title}</h1>
      <h1>Description: {description}</h1>
      <h1>Assignee: {assignee}</h1>
      <h1>Due date: {date}</h1>
      <h1>Status: {status}</h1>
      <button
        style={{ backgroundColor: "lightblue" }}
        className="button"
        onClick={() => setIsReadingTask(false)}
      >
        Back to tasks
      </button>
    </div>
  );
};

export default ReadTask;
