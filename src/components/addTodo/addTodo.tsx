import { useSetAtom } from "jotai";
import { useState } from "react";
import { addTodoAtom, category } from "../../store/todoStore";
import "./addTodo.css";

export const AddTodos = () => {
    const addTodo = useSetAtom(addTodoAtom);

    const [newTodoInput, setNewTodoInput] = useState("");
    const [newCategory, setNewCategory] = useState("");

    const handleAddTodo = () => {
        addTodo(newTodoInput, newCategory);
        setNewTodoInput("")
    };

    return (
        <div className="addTodo">
            {/* Input für eine Neue ToDo */}
            <input
                value={newTodoInput}
                type="text"
                placeholder="Neue ToDo"
                id="inputFeld"
                onChange={(event) => setNewTodoInput(event.target.value)}
            />
            
            <select id="dropdown" onChange={(event) => setNewCategory(event.target.value)}>
                <option value="" disabled selected hidden>Bitte wählen...</option>
                {category.map((categories) => (
                    <option key={categories.id} value={categories.id}>{categories.label}</option>
                ))}
            </select>
            <button type="button" onClick={handleAddTodo}>
                Hinzufügen
            </button>

        </div>
    )

}