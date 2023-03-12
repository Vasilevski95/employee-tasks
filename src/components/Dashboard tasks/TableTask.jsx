import React from "react";

const Table = ({
  tasks,
  handleEditTask,
  handleDeleteTask,
  handleReadTask,
  searchQuery,
  setSearchQuery,
}) => {
  tasks.forEach((task, i) => {
    task.id = i + 1;
  });

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contain-table">
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks..."
      />
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assignee</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Priority</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            filteredTasks.map((task, i) => (
              <tr key={task.id}>
                <td>{i + 1}.</td>
                <td>{task.title}</td>
                <td className="small-font">{task.description}</td>
                <td>{task.assignee}</td>
                <td>{task.date}</td>
                <td
                  style={{
                    color:
                      task.status === "Pending"
                        ? "darkorange"
                        : task.status === "In progress"
                        ? "darkblue"
                        : task.status === "Completed"
                        ? "darkgreen"
                        : "darkred",
                  }}
                >
                  {task.status}
                </td>
                <td
                  style={{
                    color:
                      task.priority === "Low"
                        ? "green"
                        : task.priority === "Medium"
                        ? "blue"
                        : "red",
                  }}
                >
                  {task.priority}
                </td>
                <td className="text-right">
                  <button
                    style={{ backgroundColor: "lightblue" }}
                    onClick={() => handleReadTask(task.id)}
                    className="button"
                  >
                    Read
                  </button>
                  <button
                    style={{ backgroundColor: "lightgreen" }}
                    onClick={() => handleEditTask(task.id)}
                    className="button"
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "#ff8164" }}
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
