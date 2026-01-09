import { todosAtom, addTodoAtom, deleteTodoAtom, updateTodoAtom } from "./store/todoStore";
import { useAtomValue, useSetAtom } from "jotai";


function App() {

  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);

  const handleAddTodo = () => {
    const neueTodo = document.getElementById("inputFeld") as HTMLInputElement;
    if (neueTodo) {
      const todoText: string = neueTodo.value;
      addTodo(todoText);
    }
  }

  const handleUpdateTodo = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const id = target.id;
    updateTodo(parseInt(id))
  }

  const handleDeleteTodo = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const id = target.id;
    deleteTodo(parseInt(id));
  };

  return (
    <div>
      <input type="text" placeholder="Neue ToDo" id="inputFeld" />
      <button type="button" onClick={handleAddTodo}>hinzufügen</button>
      {todos.map((todo) => (
        <>
          <div>Id: {todo.id}</div>
          <div>{todo.text}</div>
          <input type="text" placeholder="bearbeiten" />
          <button type="button" onClick={handleUpdateTodo} id={`${todo.id}`}>bearbeiten</button>
          <button type="button" onClick={handleDeleteTodo} id={`${todo.id}`}>entfernen</button>
        </>
      ))}
    </div>
  )
}

export default App
