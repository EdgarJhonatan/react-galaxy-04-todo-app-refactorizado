import PropTypes from "prop-types";
import { TaskPropType } from "../propTypes/taskPropType";

/**
 * User type definition
 * @typedef {Object} Props
 * @property {Object} task objeto que trae los datos de la tarea
 * @property {Object} taskSelected tarea seleccionada para editar
 * @property {Function} setTaskSelected asigna tarea seleccionada
 * @property {Function} confirmUpdateTask confirma la actualizacion de la tarea
 */

/**
 * TaskItemEdit
 * Este componente sirve para editar una tarea
 *
 * @param {Props} props objeto con las propiedades del componente
 * */

const TaskItemEdit = ({
   task,
   taskSelected,
   updateTask,
   setTaskSelected,
}) => {
   const confirmUpdateTask = (id) => {
      updateTask(id, { name: taskSelected.name });
      setTaskSelected(undefined);
   };

   return (
      <li>
         <input
            type="text"
            value={taskSelected.name}
            onChange={(e) =>
               setTaskSelected((oldTask) => ({
                  ...oldTask,
                  name: e.target.value,
               }))
            }
         />
         <button onClick={() => confirmUpdateTask(task.id)}>
            Guardar
         </button>
         <button onClick={() => setTaskSelected(undefined)}>
            Cancelar
         </button>
      </li>
   );
};

TaskItemEdit.propTypes = {
   task: TaskPropType,
   taskSelected: TaskPropType,
   setTaskSelected: PropTypes.func.isRequired,
   updateTask: TaskPropType,
};

export default TaskItemEdit;
