import { category } from "./store/todoStore";
import { AddTodos } from "./components/addTodo/addTodo";
import { ToDoList } from "./components/todoList/todoList";
import "./App.css";
import "./components/todoItem/todoItem.css";

function App() {

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
        {category.map((categories) => (
          <div className={categories.id}>
            <div className="card" key={categories.id}>
              <div className="count">0</div>
              &nbsp;
              <div className="text">{categories.label}</div>
            </div>
          </div>
        ))}
      </div>
      <hr style={{ border: "1px solid #dedede" }} />

      <AddTodos />
      <hr style={{ border: "1px solid #dedede" }} />
      <ToDoList />

    </div>
  );
}

export default App;
