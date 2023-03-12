import React, { useState } from "react";
import Swal from "sweetalert2";
import Priority from "./Priority";
import Status from "./Status";

const EditTask = ({ tasks, selectedTask, setTasks, setIsEditingTask }) => {
  const id = selectedTask.id;

  const [title, setTitle] = useState(selectedTask.title);
  const [description, setDescription] = useState(selectedTask.description);
  const [assignee, setAssignee] = useState(selectedTask.assignee);
  const [date, setDate] = useState(selectedTask.date);
  const [status, setStatus] = useState(selectedTask.status);
  const [priority, setPriority] = useState(selectedTask.priority);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!title || !description || !assignee || !date || !status || !priority) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const task = {
      id,
      title,
      description,
      assignee,
      date,
      status,
      priority,
    };

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks.splice(i, 1, task);
        break;
      }
    }

    localStorage.setItem("tasks_data", JSON.stringify(tasks));
    setTasks(tasks);
    setIsEditingTask(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${task.title} task assigned by ${task.assignee} has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Task</h1>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="assignee">Assignee</label>
        <select
          id="assignee"
          type="text"
          name="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option>Nikolina - Front-end team lead </option>
          <option>Danilo - UI/UX team lead </option>
          <option>Jelena - Product/project manager</option>
          <option>Marko - Full-stack team lead</option>
        </select>

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          min="2023-03-13"
          max="2023-05-20"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Status status={status} setStatus={setStatus} />
        <Priority priority={priority} setPriority={setPriority} />
        <div style={{ marginTop: "30px" }}>
          <button
            style={{ backgroundColor: "lightgreen" }}
            type="submit"
            className="button"
            value="Update"
          >
            Update
          </button>
          <button
            style={{ marginLeft: "12px", backgroundColor: "#ff8164" }}
            className="button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditingTask(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
