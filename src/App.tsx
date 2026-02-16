import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { addTodoAtom, deleteTodoAtom, todosAtom, updateTodoAtom, category } from "./store/todoStore";
import "./App.css";

function App() {
  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);

  const [newTodoInput, setNewTodoInput] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const handleAddTodo = () => {
    addTodo(newTodoInput, newCategory);
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
      <p />
      <select id="dropdown" onChange={(event) => setNewCategory(event.target.value)}>
        {category.map((categories) => (
          <option value={categories.name}>{categories.name}</option>
        ))};
      </select>
      <button type="button" onClick={handleAddTodo}>
        Hinzufügen
      </button>
      <p />
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
          <div>Kategorie: {todo.categoryId}</div>
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
            Löschen
          </button>
        </li>
      ))}
      <p />
    </div>
  );
}

export default App;
