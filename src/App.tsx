import { todosAtom, addTodoAtom } from "./store/todoStore";
import { useAtomValue, useSetAtom } from "jotai";


function App() {

  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);

  const handleAddTodo = () => {
    const neueTodo = document.getElementById("inputFeld") as HTMLInputElement;
    if(neueTodo) {
      const todoText: string = neueTodo.value;
      addTodo(todoText);
    }
  }

  return (
    <div>
      <input type="text" placeholder="test" id="inputFeld" />
      <button type="button" onClick={handleAddTodo}>hinzufügen</button>
      {todos.map((todo) => (
        <>
          <div>{todo.text}</div>
          <div>Id: {todo.id}</div>
        </>
      ))}
    </div>
  )
}

export default App
