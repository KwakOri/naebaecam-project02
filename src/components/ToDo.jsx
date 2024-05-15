import { PropTypes } from "prop-types";

const ToDo = ({ id, title, body, isDone, setToDos }) => {
  return (
    <div className="w-48 h-32 p-2 mx-4 bg-white border-2 rounded-2xl ">
      <div className="flex justify-between pb-2 text-xs border-b-2 border-black">
        <p className={"flex justify-center items-center text-lg font-black"}>
          {isDone ? "완료" : "진행중"}
        </p>
        <button
          className={"px-2 py-1 border-2 border-black rounded-lg"}
          onClick={() => {
            setToDos((toDos) => {
              return toDos.map((toDo) => {
                if (toDo.id === id) {
                  const newToDo = { ...toDo };
                  newToDo.isDone = !newToDo.isDone;
                  return newToDo;
                }
                return toDo;
              });
            });
          }}
        >
          {isDone ? "취소" : "완료"}
        </button>
        <button
          className={` bg-red-800 text-white px-2 py-1 rounded-lg border-2 border-black`}
          onClick={() => {
            setToDos((toDos) => {
              return toDos.filter((toDo) => {
                if (toDo.id === id) {
                  return false;
                }
                return true;
              });
            });
          }}
        >
          삭제
        </button>
      </div>
      <h3
        className={`text-lg ${
          isDone ? "text-gray-300 line-through" : "no-underline"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-overflow text-sm ${
          isDone ? "text-gray-300 line-through" : "no-underline"
        }`}
      >
        {body}
      </p>
    </div>
  );
};

ToDo.propTypes = {
  setToDos: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export { ToDo };
