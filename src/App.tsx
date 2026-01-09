import { todosAtom, addTodoAtom } from "./store/todoStore";
import { useAtomValue, useSetAtom } from "jotai";


function App() {

  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);

  const handleAddTodo = () => {
    addTodo("raus gehen");
  }

  return (
    <div>
      <button type="button" onClick={handleAddTodo}>button</button>
      {todos.map((todo) => (<div>{todo.text}</div>))}
    </div>
  )
}

export default App
