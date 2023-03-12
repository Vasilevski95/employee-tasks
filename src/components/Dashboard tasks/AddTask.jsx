import React, { useState } from "react";
import Swal from "sweetalert2";
import Priority from "./Priority";
import Status from "./Status";

const AddTask = ({ tasks, setTasks, setIsAddingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("Nikolina - Front-end team lead");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("In progress");
  const [priority, setPriority] = useState("High");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!title || !description || !assignee || !date || !status || !priority) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = tasks.length + 1;
    const newTask = {
      id,
      title,
      description,
      assignee,
      date,
      status,
      priority,
    };

    tasks.push(newTask);
    localStorage.setItem("tasks_data", JSON.stringify(tasks));
    setTasks(tasks);
    setIsAddingTask(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${title} data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAddTask}>
        <h1>Add Task</h1>
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
          <option>Nikolina - Front-end team lead</option>
          <option>Danilo - UI/UX team lead</option>
          <option>Jelena - Product/project manager</option>
          <option>Marko - Full-stack team lead</option>
        </select>

        <label htmlFor="date">Due date</label>
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
          <input className="button" type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="button"
            type="button"
            value="Cancel"
            onClick={() => setIsAddingTask(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
