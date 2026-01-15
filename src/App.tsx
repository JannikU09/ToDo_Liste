import { useState } from "react";
import { todosAtom, addTodoAtom, deleteTodoAtom, updateTodoAtom, type ToDo } from "./store/todoStore";
import { useAtomValue, useSetAtom } from "jotai";


function App() {

  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);
  const [isChecked, setIsChecked] = useState(false);

  const handleAddTodo = () => {

    const newTodo = document.getElementById("inputFeld") as HTMLInputElement;
    if (newTodo) {
      const todoText: string = newTodo.value;
      addTodo(todoText);
      newTodo.value = "";
    }
  };

  const handleUpdateTodo = (event: React.MouseEvent<HTMLElement>, todo: ToDo) => {

    const id = Number((event.target as HTMLElement).id);
    console.log(id);
    const editedTodo = document.getElementById(`updateText-${todo.id}`) as HTMLInputElement;
    const updatedText = editedTodo.value;
    updateTodo({ id, text: updatedText, isChecked });
    editedTodo.value = "";
  };


  const handleDeleteTodo = (event: React.MouseEvent<HTMLElement>) => {

    const id = Number((event.target as HTMLElement).id);
    console.log(id);
    deleteTodo(id);
  };

  const handleCheckedTodo = (event: React.MouseEvent<HTMLElement>, todo: ToDo) => {

    const id = Number((event.target as HTMLElement).id);
    console.log(id);
    setIsChecked(!isChecked);
    updateTodo({ id: todo.id, isChecked: isChecked, text: todo.text });
    console.log(todo);
  };

  return (
    <div>
      <input type="text" placeholder="Neue ToDo" id="inputFeld" />
      <button type="button" onClick={handleAddTodo}>Hinzufügen</button>
      {todos.map((todo) => (

        <li key={todo.id}>
          <div />
          <input type="checkbox" id={`${todo.id}`} onClick={(event) => handleCheckedTodo(event, todo)} />
          <label htmlFor={`${todo.id}`} id="textTodo" style={{ textDecoration: isChecked ? "line-through" : "none" }}>{todo.text}</label>
          <div>Id: {todo.id}</div>
          <div />
          <input type="text" placeholder={todo.text} id={`updateText-${todo.id}`} />
          <button type="button" onClick={(event) => handleUpdateTodo(event, todo)} id={`${todo.id}`}>bearbeiten</button>
          <button type="button" onClick={handleDeleteTodo} id={`${todo.id}`}>löschen</button>
        </li>

      ))}
    </div>
  )
}

export default App;
