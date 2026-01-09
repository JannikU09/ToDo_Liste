import { todosAtom, addTodoAtom, deleteTodoAtom } from "./store/todoStore";
import { useAtomValue, useSetAtom } from "jotai";


function App() {

  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom)

  const handleAddTodo = () => {
    const neueTodo = document.getElementById("inputFeld") as HTMLInputElement;
    if(neueTodo) {
      const todoText: string = neueTodo.value;
      addTodo(todoText);
    }
  }

  const handleDeleteTodo = () => {
    deleteTodo(1);
  }

  return (
    <div>
      <input type="text" placeholder="Neue ToDo" id="inputFeld" />
      <button type="button" onClick={handleAddTodo}>hinzufügen</button>
      {todos.map((todo) => (
        <>
          <div>{todo.text}</div>
          <div>Id: {todo.id}</div>
          <button type="button" onClick={handleDeleteTodo}>entfernen</button>
        </>
      ))}
    </div>
  )
}

export default App
