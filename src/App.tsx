import { useState } from "react";
import { todosAtom, addTodoAtom, deleteTodoAtom, updateTodoAtom } from "./store/todoStore";
import { useAtomValue, useSetAtom } from "jotai";


function App() {

  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);
  const [isChecked, setIsChecked] = useState(false);

  const handleAddTodo = () => {
    const neueTodo = document.getElementById("inputFeld") as HTMLInputElement;
    if (neueTodo) {
      const todoText: string = neueTodo.value;
      addTodo(todoText);
    }
  };

  const handleUpdateTodo = (event: React.MouseEvent<HTMLElement>) => {
    const bearbeiteteTodo = document.getElementById("updateText") as HTMLInputElement;
    todos.map((todo) => todo.text = bearbeiteteTodo.value)
    const upgedatedTodo: string = bearbeiteteTodo.value;
    const target = event.target as Element;
    const id = target.id;
    updateTodo(upgedatedTodo, parseInt(id));
  };


  const handleDeleteTodo = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as Element;
    const id = target.id;
    console.log(id);
    deleteTodo(parseInt(id));
  };

  const handleCheckedTodo = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <input type="text" placeholder="Neue ToDo" id="inputFeld" />
      <button type="button" onClick={handleAddTodo}>Hinzufügen</button>
      {todos.map((todo) => (
        <>
          <div />
          <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleCheckedTodo} />
          <label htmlFor="checkbox" id="textTodo" style={{ textDecoration: isChecked ? "line-through" : "none" }}>{todo.text}</label>
          <div>Id: {todo.id}</div>
          <div />
          <input type="text" placeholder={todo.text} id="updateText" />
          <button type="button" onClick={handleUpdateTodo}>bearbeiten</button>
          <button type="button" onClick={handleDeleteTodo} id={`${todo.id}`}>löschen</button>
        </>
      ))}
    </div>
  )
}

export default App;
