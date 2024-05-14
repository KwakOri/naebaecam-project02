import { PropTypes } from "prop-types";
import { useState } from "react";
import { Input } from "./Input";
import { makeToDo } from "./function";

const Form = ({ setToDos, toDos }) => {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoBody, setToDoBody] = useState("");
  const template = {
    toDoTitle: "제목을 입력해주세요",
    toDoBody: "내용을 입력해주세요",
  };
  const onSubmit = (event) => {
    makeToDo(event, toDoTitle, toDoBody, setToDos, toDos);
    setToDoTitle("");
    setToDoBody("");
  };
  return (
    <form
      className=" flex flex-col justify-center items-center h-1/3 w-56"
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <Input
        onChange={setToDoTitle}
        value={toDoTitle}
        placeholder={template.toDoTitle}
        inputTitle={"할 일"}
      />
      <Input
        onChange={setToDoBody}
        value={toDoBody}
        placeholder={template.toDoBody}
        inputTitle={"내용"}
      />
      <button className="border-2  border-yellow-400 px-2 py-1 rounded-lg bg-yellow-400 text-white font-bold transition-all relative top-0 hover:-top-0.5 ">
        Add To Do
      </button>
    </form>
  );
};

Form.propTypes = {
  setToDos: PropTypes.func.isRequired,
  toDos: PropTypes.array.isRequired,
};

export { Form };
