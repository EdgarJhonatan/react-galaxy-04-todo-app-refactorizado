import React from "react";

const TaskItem = ({
   task,
   updateTask,
   removeTask,
   setTaskSelected,
}) => {
   const toogleComplete = (id, complete) => {
      updateTask(id, { complete });
   };

   return (
      <li>
         <input
            type="checkbox"
            checked={task.complete}
            onChange={(e) =>
               toogleComplete(task.id, e.target.checked)
            }
         />
         <span>{task.name}</span>
         <button onClick={() => setTaskSelected(task)}>Editar</button>
         <button onClick={() => removeTask(task.id)}>Eliminar</button>
      </li>
   );
};

export default TaskItem;
