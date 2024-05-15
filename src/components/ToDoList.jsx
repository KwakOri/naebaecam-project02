import { PropTypes } from "prop-types";
import { ToDo } from "./ToDo";

const ToDoList = ({ setToDos, toDos, isDone }) => {
  return (
    <ul className="flex items-center justify-start flex-1 w-full overflow-x-scroll">
      {toDos
        .filter((toDo) => {
          return toDo.isDone === isDone;
        })
        .map((toDo) => {
          const { id, title, body, isDone } = toDo;
          return (
            <li key={id}>
              <ToDo
                id={id}
                title={title}
                body={body}
                isDone={isDone}
                setToDos={setToDos}
              />
            </li>
          );
        })}
    </ul>
  );
};

ToDoList.propTypes = {
  setToDos: PropTypes.func.isRequired,
  toDos: PropTypes.array.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export { ToDoList };
