import React, { useState } from "react";
import { todosAtom, addTodoAtom, deleteTodoAtom, updateTodoAtom, type ToDo } from "./store/todoStore";
import { useAtomValue, useSetAtom } from "jotai";
import "./App.css"


function App() {

  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);
  const [inputUpdate, setInputUpdate] = useState("");

  const handleAddTodo = () => {

    const newTodo = document.getElementById("inputFeld") as HTMLInputElement;
    if (newTodo) {
      const todoText: string = newTodo.value;
      addTodo(todoText);
      newTodo.value = "";
    }
  };


  const handleChangeUpdate = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    setInputUpdate(event.target.value);
  };

  const handleSubmitUpdate = (event: React.KeyboardEvent<HTMLFormElement>, todo: ToDo) => {

    if (event.key === "Enter" && inputUpdate !== "") {

      event.preventDefault();
      setInputUpdate("");

      updateTodo({
        ...todo,
        text: inputUpdate
      });
    };
  };


  const handleDeleteTodo = (event: React.MouseEvent<HTMLElement>) => {

    const id = Number((event.target as HTMLElement).id);
    console.log(id);
    deleteTodo(id);
  };

  const handleCheckedTodo = (event: React.MouseEvent<HTMLElement>, todo: ToDo) => {

    const id = Number((event.target as HTMLElement).id);
    console.log(id);
    updateTodo({
      ...todo,
      isChecked: !todo.isChecked,
    });
    console.log(todo);
  };

  return (
    <div>
      <input type="text" placeholder="Neue ToDo" id="inputFeld" />
      <button type="button" onClick={handleAddTodo}>Hinzufügen</button>
      {todos.map((todo) => (

        <li key={todo.id}>
          <input type="checkbox" id={`${todo.id}`} onClick={(event) => handleCheckedTodo(event, todo)} />
          <label htmlFor={`${todo.id}`} id="textTodo" style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}>{todo.text}</label>
          <div>Id: {todo.id}</div>

          <form onKeyDown={(event) => handleSubmitUpdate(event, todo)}>

            <textarea
              value={inputUpdate}
              placeholder={todo.text}
              onChange={handleChangeUpdate}
              className="updateInput"
            />
          </form>
          <button type="button" onClick={handleDeleteTodo} id={`${todo.id}`}>löschen</button>
        </li>
      ))}
    </div>
  )
}

export default App;
