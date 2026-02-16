import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { addTodoAtom, deleteTodoAtom, todosAtom, updateTodoAtom } from "./store/todoStore";
import "./App.css";

function App() {
  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);

  const [newTodoInput, setNewTodoInput] = useState("");

  const handleAddTodo = () => {
    addTodo(newTodoInput);
    setNewTodoInput("");
  };

  return (
    <div>
      <input
        value={newTodoInput}
        type="text"
        placeholder="Neue ToDo"
        id="inputFeld"
        onChange={(event) => setNewTodoInput(event.target.value)}
      />
      <button type="button" onClick={handleAddTodo}>
        Hinzufügen
      </button>

      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            id={`${todo.id}`}
            onClick={() =>
              updateTodo({
                ...todo,
                isChecked: !todo.isChecked,
              })
            }
          />
          <label
            htmlFor={`${todo.id}`}
            id="textTodo"
            style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
          >
            {todo.text}
          </label>
          <div>Id: {todo.id}</div>

          <form>
            <textarea
              placeholder={todo.text}
              onChange={(event) =>
                updateTodo({
                  ...todo,
                  text: event.target.value,
                })
              }
              className="updateInput"
            />
          </form>
          <button type="button" onClick={() => deleteTodo(todo.id)} id={`${todo.id}`}>
            löschen
          </button>
        </li>
      ))}
    </div>
  );
}

export default App;
