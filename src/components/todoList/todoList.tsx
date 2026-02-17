import { ToDoItem } from "../todoItem/todoItem"
import "./todoList.css"

export const ToDoList = () => {
    return(
        <div className="todoList">
            <ToDoItem/>
        </div>
    )
}