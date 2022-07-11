import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskItemEdit from "./TaskItemEdit";

const TaskList = ({ tasks, updateTask, removeTask }) => {
   const [taskSelected, setTaskSelected] = useState();

   return (
      <ul>
         {tasks.map((task) =>
            task.id === taskSelected?.id ? (
               <TaskItemEdit
                  key={task.id}
                  task={task}
                  taskSelected={taskSelected}
                  updateTask={updateTask}
                  setTaskSelected={setTaskSelected}
               />
            ) : (
               <TaskItem
                  key={task.id}
                  task={task}
                  updateTask={updateTask}
                  removeTask={removeTask}
                  setTaskSelected={setTaskSelected}
               />
            )
         )}
      </ul>
   );
};

export default TaskList;
