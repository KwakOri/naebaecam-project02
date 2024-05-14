/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form } from "./components/Form";
import { ToDoSection } from "./components/ToDoSection";

const App = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <article className=" flex flex-col items-center max-w-[1200px] min-w-[800px] h-[700px] border-2 border-black p-4 rounded-3xl">
      <Form setToDos={setToDos} toDos={toDos} />
      <ToDoSection
        title="진행중인 목록"
        isDone={false}
        setToDos={setToDos}
        toDos={toDos}
      />
      <ToDoSection
        title="완료된 목록"
        isDone={true}
        setToDos={setToDos}
        toDos={toDos}
      />
    </article>
  );
};

export default App;
