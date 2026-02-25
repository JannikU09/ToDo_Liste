import { type ToDo } from "../store/todoStore";

const storageKey = "Todos";

export const todoStorage = {
    load(): ToDo[] {
        const todos = localStorage.getItem(storageKey);

        return todos ? JSON.parse(todos) : [];
    },

    add(todo: ToDo[]): void {
        localStorage.setItem(storageKey, JSON.stringify(todo));
    },

    update(updatedTodo: ToDo) {
        const todos = localStorage.getItem(storageKey);
        const parsed: ToDo[] = todos ? JSON.parse(todos) : [];
        const updatedTodos = parsed.map((parse) => parse.id === updatedTodo.id ? updatedTodo : parse);
        localStorage.setItem(storageKey, JSON.stringify(updatedTodos));

        return updatedTodos;
    },

    delete(id: string) {
        const todos = localStorage.getItem(storageKey);
        const parsed: ToDo[] = todos ? JSON.parse(todos) : [];
        const deleted = parsed.filter((parse) => parse.id !== id);
        localStorage.setItem(storageKey, JSON.stringify(deleted));

        return deleted;
    },
};
