import { PropTypes } from "prop-types";
import { ToDoList } from "./ToDoList";
import { ToDosTitle } from "./ToDosTitle";

const ToDoSection = ({ toDos, setToDos, isDone, title }) => {
  return (
    <section className="flex flex-col items-start w-full h-1/3">
      <ToDosTitle title={title} />
      <ToDoList setToDos={setToDos} toDos={toDos} isDone={isDone} />
    </section>
  );
};

ToDoSection.propTypes = {
  setToDos: PropTypes.func.isRequired,
  toDos: PropTypes.array.isRequired,
  isDone: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export { ToDoSection };
