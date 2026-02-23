import { useSetAtom } from "jotai";
import { useState } from "react";
import { addTodoAtom, category } from "../../store/todoStore";
import "./addTodo.css";
import AddIcon from '@mui/icons-material/Add';

export const AddTodos = () => {
    const addTodo = useSetAtom(addTodoAtom);

    const [newTodoInput, setNewTodoInput] = useState("");
    const [newCategory, setNewCategory] = useState("no_category");

    const handleAddTodo = () => {
        addTodo(newTodoInput, newCategory);
        setNewTodoInput("");

        //Value für die ausgewählte Kategorie
        setNewCategory("no_category");
        //Die Kategorie, die im Dropdown angezeigt wird.
        const selectElement = document.getElementById("dropdown") as HTMLSelectElement;
        selectElement.selectedIndex = 0;
    };

    return (
        <div className="addTodo">
            {/* Input für eine Neue ToDo */}
            <input
                className="input"
                value={newTodoInput}
                type="text"
                placeholder="Neue ToDo"
                id="inputFeld"
                onChange={(event) => setNewTodoInput(event.target.value)}
            />

            <select
                className="dropdown"
                id="dropdown"
                onChange={(event) => setNewCategory(event.target.value)}
            >
                {category.map((categories) => (
                    <option key={categories.id} value={categories.id}>{categories.label}</option>
                ))}
            </select>
            <button className="addButton" type="button" onClick={handleAddTodo}>
                <AddIcon />
            </button>

        </div>
    )
}