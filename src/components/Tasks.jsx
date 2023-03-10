import React from "react";
import HeaderTask from "./Dashboard tasks/HeaderTask";
import TableTask from "./Dashboard tasks/TableTask";
import EditTask from "./Dashboard tasks/EditTask";
import AddTask from "./Dashboard tasks/AddTask";
import ReadTask from "./Dashboard tasks/ReadTask";

const Tasks = ({
  isReadingTask,
  setIsReadingTask,
  handleReadTask,
  handleEditTask,
  handleDeleteTask,
  selectedTask,
  isAddingTask,
  setIsAddingTask,
  isEditingTask,
  setIsEditingTask,
  tasks,
  setTasks,
  searchQuery,
  setSearchQuery,
  employees,
}) => {
  return (
    <div className="tasks">
      <div className="container">
        {!isReadingTask && !isAddingTask && !isEditingTask && (
          <>
            <HeaderTask setIsAddingTask={setIsAddingTask} />
            <TableTask
              tasks={tasks}
              handleReadTask={handleReadTask}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              employees={employees}
            />
          </>
        )}
        {isReadingTask && (
          <ReadTask
            selectedTask={selectedTask}
            setIsReadingTask={setIsReadingTask}
          />
        )}
        {isAddingTask && (
          <AddTask
            tasks={tasks}
            setTasks={setTasks}
            setIsAddingTask={setIsAddingTask}
            employees={employees}
          />
        )}
        {isEditingTask && (
          <EditTask
            tasks={tasks}
            selectedTask={selectedTask}
            setTasks={setTasks}
            setIsEditingTask={setIsEditingTask}
            employees={employees}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
