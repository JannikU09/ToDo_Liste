import { useAtomValue, useSetAtom } from "jotai";
import { category, deleteTodoAtom, todosAtom, updateTodoAtom } from "../../store/todoStore";
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
              type="checkbox"
              id={`${todo.id}`}
              onClick={() =>
                updateTodo({
                  ...todo,
                  isChecked: !todo.isChecked,
                })
              }
            />
            <div>
              <div
                id="textTodo"
                style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
              >
                {todo.text}
              </div>
              <div className={todo.categoryId}>{category.find((categories) => categories.id === todo.categoryId)?.label}</div>
            </div>
          </div>

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
          <hr style={{ border: "0.75px solid #dedede" }} />
        </div>
      ))}
    </div>
  )
}