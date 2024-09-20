import { useEffect, useState } from "react";
import ToDoRow from "./components/ToDoRow";
import { getAllToDos } from "./actions/todo";
import ToDoForm from "./components/ToDoForm";


function ToDoApp() {
  const [toDos, setToDos] = useState([
    {
        "id": "affc3d84-e579-4087-9048-35ded72962c1",
        "title": "Write a article about building a todo app",
        "isCompleted": true
    },
    {
        "id": "e689448c-0351-421f-8889-a0685341d26a",
        "title": "Publish the article",
        "isCompleted": false
    }
]);

useEffect(() => {
  (async() => {
    const allData = await getAllToDos();
    setToDos(allData.data);
  })()
}, [])

  return (
    <div className="bg-white w-1/4 rounded-md p-4">
      <h2 className="text-2xl font-bold text-center m-b4">To Do App</h2>
      <div className="flex flex-col">
        <ToDoForm />
        {
          toDos.map(todo => (
            <ToDoRow key={todo.id} todo={todo} />
          ))
        }
      </div>
    </div>
  );
}

export default ToDoApp

0