import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Employee from "./components/Employee";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
import Top5 from "./components/Top 5/Top5";
import Swal from "sweetalert2";
import { employeesData } from "./data/employee";
import { tasksData } from "./data/tasks";
import ProjectDescription from "./components/Project description/ProjectDescription";

function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [isEditingEmployee, setIsEditingEmployee] = useState(false);
  const [isReadingEmployee, setIsReadingEmployee] = useState(false);

  const [tasks, setTasks] = useState(tasksData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [isReadingTask, setIsReadingTask] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees_data"));
    if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks_data"));
    if (data !== null && Object.keys(data).length !== 0) setTasks(data);
  }, []);

  //I retreived data from LocalStorage

  const handleReadTask = (id) => {
    const [task] = tasks.filter((task) => task.id === id);

    setSelectedTask(task);
    setIsReadingTask(true);
  };

  const handleReadEmployee = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsReadingEmployee(true);
  };

  //These functions are used to implement read functionality for employees and tasks

  const handleEditEmployee = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditingEmployee(true);
  };

  const handleEditTasks = (id) => {
    const [task] = tasks.filter((task) => task.id === id);

    setSelectedTask(task);
    setIsEditingTask(true);
  };

  //These functions are used to implement edit functionality for employees and tasks

  const handleDeleteEmployee = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(
          (employee) => employee.id !== id
        );
        localStorage.setItem("employees_data", JSON.stringify(employeesCopy));
        setEmployees(employeesCopy);
      }
    });
  };

  const handleDeleteTask = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [task] = tasks.filter((task) => task.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${task.title} task assigned by ${task.assignee} has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const tasksCopy = tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks_data", JSON.stringify(tasksCopy));
        setTasks(tasksCopy);
      }
    });
  };

  //These functions are used to implement delete functionality for employees and tasks

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route>
          <Route index element={<ProjectDescription employees={employees} />} />
        </Route>
        <Route
          path="/employees"
          index
          element={
            <Employee
              isReadingEmployee={isReadingEmployee}
              setIsReadingEmployee={setIsReadingEmployee}
              handleReadEmployee={handleReadEmployee}
              handleEditEmployee={handleEditEmployee}
              handleDeleteEmployee={handleDeleteEmployee}
              employeesData={employeesData}
              selectedEmployee={selectedEmployee}
              setSelectedEmployee={setSelectedEmployee}
              isAddingEmployee={isAddingEmployee}
              setIsAddingEmployee={setIsAddingEmployee}
              isEditingEmployee={isEditingEmployee}
              setIsEditingEmployee={setIsEditingEmployee}
              employees={employees}
              setEmployees={setEmployees}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route path="tasks">
          <Route
            index
            element={
              <Tasks
                isReadingTask={isReadingTask}
                setIsReadingTask={setIsReadingTask}
                handleReadTask={handleReadTask}
                handleEditTask={handleEditTasks}
                handleDeleteTask={handleDeleteTask}
                tasksData={tasksData}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
                isAddingTask={isAddingTask}
                setIsAddingTask={setIsAddingTask}
                isEditingTask={isEditingTask}
                setIsEditingTask={setIsEditingTask}
                tasks={tasks}
                setTasks={setTasks}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
        </Route>
        <Route path="top5">
          <Route index element={<Top5 employees={employees} />} />
        </Route>
      </Route>
    </Routes>
  );

  //This is routing logic for every route
}

export default App;
