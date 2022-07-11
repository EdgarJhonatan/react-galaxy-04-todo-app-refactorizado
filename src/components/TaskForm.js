import { useState } from "react";

export const TaskForm = ({ addTask }) => {
   const [inputTask, setInputTask] = useState("");

   const onSubmit = (e) => {
      e.preventDefault();
      if (!inputTask) return;
      addTask(inputTask);
      setInputTask("");
   };

   return (
      <form onSubmit={onSubmit}>
         <input
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
         />
      </form>
   );
};
