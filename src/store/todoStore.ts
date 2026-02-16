import { atom } from "jotai";
import { generateId } from "../utils/uuid";

export interface Category {
    id: string;
    name: string;
}

export interface ToDo {
    id: string;
    isChecked: boolean;
    text: string;
    categoryId: string;
}

export const category: Category[] = [
    { id: "0", name: "Keine Kategorie" },
    { id: "1", name: "Health" },
    { id: "2", name: "Work" },
    { id: "3", name: "Mental Health" },
    { id: "4", name: "Others" },
]

export const todosAtom = atom<ToDo[]>([]);

export const addTodoAtom = atom(null, (get, set, text: string, categoryId: string) => {
    const id = generateId();
    const todo: ToDo = {
        id,
        text,
        categoryId,
        isChecked: false,
    };

    set(todosAtom, [...get(todosAtom), todo]);
});

export const updateTodoAtom = atom(null, (get, set, updatedTodo: ToDo) => {
    const todos = get(todosAtom);
    const updatedTodos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));

    set(todosAtom, updatedTodos);
});

export const deleteTodoAtom = atom(null, (get, set, id: string) => {
    const todos = get(todosAtom);
    const deleted = todos.filter((todo) => todo.id !== id);
    set(todosAtom, deleted);
});
