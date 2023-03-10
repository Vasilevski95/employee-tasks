import React from "react";
import HeaderTask from "./Dashboard tasks/HeaderTask";
import TableTask from "./Dashboard tasks/TableTask";
import EditTask from "./Dashboard tasks/EditTask";
import AddTask from "./Dashboard tasks/AddTask";

const Tasks = ({
  handleEditTask,
  handleDeleteTask,
  selectedTask,
  isAddingTask,
  setIsAddingTask,
  isEditingTask,
  setIsEditingTask,
  tasks,
  setTasks,
}) => {
  return (
    <div className="tasks">
      <div className="container">
        {!isAddingTask && !isEditingTask && (
          <>
            <HeaderTask setIsAddingTask={setIsAddingTask} />
            <TableTask
              tasks={tasks}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          </>
        )}
        {isAddingTask && (
          <AddTask
            tasks={tasks}
            setTasks={setTasks}
            setIsAddingTask={setIsAddingTask}
          />
        )}
        {isEditingTask && (
          <EditTask
            tasks={tasks}
            selectedTask={selectedTask}
            setTasks={setTasks}
            setIsEditingTask={setIsEditingTask}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
