import React from "react";

const Table = ({ tasks, handleEditTask, handleDeleteTask }) => {
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
                    onClick={() => handleDeleteTask(task.id)}
                    className="button-crud"
                  >
                    Read
                  </button>
                  <button
                    onClick={() => handleEditTask(task.id)}
                    className="button-crud"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="button-crud"
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
