import { useAtomValue, useSetAtom } from "jotai";
import { category, deleteTodoAtom, todosAtom, updateTodoAtom } from "../../store/todoStore";
import DeleteIcon from "@mui/icons-material/Delete";

import "./todoItem.css";

export const ToDoItem = () => {
  const todos = useAtomValue(todosAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  const updateTodo = useSetAtom(updateTodoAtom);

  return (
    <div className="todoItem">
      {todos.map((todo) => (
        <div key={todo.id}>
          <div className="todoText">
            <input
              className="checkbox"
              type="checkbox"
              id={`${todo.id}`}
              checked={todo.isChecked}
              onChange={() =>
                updateTodo({
                  ...todo,
                  isChecked: !todo.isChecked,
                })
              }
            />
            <div>
              <form>
                <textarea
                  className="updateInput"
                  value={todo.text}
                  onChange={(event) =>
                    updateTodo({
                      ...todo,
                      text: event.target.value,
                    })
                  }
                  style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
                />
              </form>
              <div className={todo.categoryId}>{category.find((categories) => categories.id === todo.categoryId)?.label}</div>
            </div>
            <button className="deleteButton" type="button" onClick={() => deleteTodo(todo.id)} id={`${todo.id}`}>
              <DeleteIcon />
            </button>
          </div>
          <hr style={{ border: "0.75px solid #dedede", width: "92.5vw" }} />
        </div>
      ))}
    </div>
  )
}