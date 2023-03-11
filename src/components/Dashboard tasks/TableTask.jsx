import React from "react";

const Table = ({ tasks, handleEditTask, handleDeleteTask, handleReadTask }) => {
  tasks.forEach((task, i) => {
    task.id = i + 1;
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assignee</th>
            <th>Due date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, i) => (
              <tr key={task.id}>
                <td>{i + 1}.</td>
                <td>{task.title}</td>
                <td className="small-font">{task.description}</td>
                <td>{task.assignee}</td>
                <td>{task.date} </td>
                <td className="text-right">
                  <button
                    style={{ backgroundColor: "lightblue" }}
                    onClick={() => handleReadTask(task.id)}
                    className="button"
                  >
                    Read
                  </button>
                  <button
                    style={{ backgroundColor: "#4caf50" }}
                    onClick={() => handleEditTask(task.id)}
                    className="button"
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "#f44336" }}
                    onClick={() => handleDeleteTask(task.id)}
                    className="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Tasks</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
