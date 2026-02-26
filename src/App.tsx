import { category, todosAtom } from "./store/todoStore";
import { AddTodos } from "./components/addTodo/addTodo";
import { ToDoList } from "./components/todoList/todoList";
import { useAtomValue } from "jotai";
import "@fontsource-variable/caveat";
import "./App.css";

function App() {
  const todos = useAtomValue(todosAtom);

  const date = new Date();
  const formattedDate = date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div>
      <div className="headline">
        <div className="headlineText">Tasks</div>
        &nbsp;
        <div className="headlineDate">{formattedDate}</div>
      </div>

      {/* Kategorien - Kacheln */}
      <div className="cards">
        {category.map((categories) => {
          const countOccurrences = todos.filter(todo => todo.categoryId === categories.id).length;
          return (
            <div className={categories.id} key={categories.id}>
              <div className="card" >
                <div className="icon">
                  <categories.icon />
                </div>
                &nbsp;
                <div className="positionText">
                  <div className="count">{countOccurrences}</div>
                  &nbsp;
                  <div className="text">{categories.label}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <hr style={{ border: "1px solid #dedede" }} />
      <AddTodos />
      <hr style={{ border: "1px solid #dedede" }} />
      <ToDoList />
    </div>
  );
}

export default App;
