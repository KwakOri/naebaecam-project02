const makeToDo = (event, toDoTitle, toDoBody, setToDos, toDos) => {
  event.preventDefault();
  const newToDo = {
    id: new Date().getTime(),
    title: toDoTitle,
    body: toDoBody,
    isDone: false,
  };
  setToDos([newToDo, ...toDos]);
  console.log("hello");
  console.log(newToDo);
};

export { makeToDo };
