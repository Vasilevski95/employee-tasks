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
import Missing from "./components/Missing/Missing";

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

  /*handleReadTask(id): This function takes an id parameter and filters the tasks array to find a task with a matching id.
   It then sets the selected task to the first matching task, and sets the isReadingTask state to true.
   This is used to implement the functionality to read/view a task.
   */

  const handleReadEmployee = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsReadingEmployee(true);
  };

  /* handleReadEmployee(id): This function takes an id parameter and filters the employees array to find an employee with a matching id.
  It then sets the selected employee to the first matching employee, and sets the isReadingEmployee state to true.
  This is used to implement the functionality to read/view an employee.
   */

  const handleEditEmployee = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditingEmployee(true);
  };

  /* handleEditEmployee(id): This function takes an id parameter and filters the employees array to find an employee with a matching id.
  It then sets the selected employee to the first matching employee, and sets the isEditingEmployee state to true.
  This is used to implement the functionality to edit an existing employee.
   */

  const handleEditTasks = (id) => {
    const [task] = tasks.filter((task) => task.id === id);

    setSelectedTask(task);
    setIsEditingTask(true);
  };

  /*handleEditTasks(id): This function takes an id parameter and filters the tasks array to find a task with a matching id.
  It then sets the selected task to the first matching task, and sets the isEditingTask state to true.
  This is used to implement the functionality to edit an existing task. */

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
          text: `${employee.name} data has been deleted.`,
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

  /*handleDeleteEmployee(id): This function takes an id parameter and filters the employees array to find an employee with a matching id.
  It then prompts the user with a confirmation dialog to confirm the deletion of the selected employee.
  If the user confirms the deletion, it removes the employee from the employees array, updates the localStorage with the updated array,
  and sets the employees state to the updated array. This is used to implement the functionality to delete an existing employee. */

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

  /*handleDeleteTask(id): This function takes an id parameter and filters the tasks array to find a task with a matching id.
  It then prompts the user with a confirmation dialog to confirm the deletion of the selected task. If the user confirms the deletion,
  it removes the task from the tasks array, updates the localStorage with the updated array, and sets the tasks state to the updated array.
  This is used to implement the functionality to delete an existing task. */

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
                employees={employees}
              />
            }
          />
        </Route>
        <Route path="top5">
          <Route index element={<Top5 employees={employees} />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );

  //This is routing logic for every route
}

export default App;
