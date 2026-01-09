import { atom } from "jotai";

export interface ToDo {
    id: number;
    isChecked: boolean;
    text: string;
}

export const todosAtom = atom<ToDo[]>([]);

export const addTodoAtom = atom(
    null,
    (get, set, text: string) => {

        const todoListe = get(todosAtom);
        const neueId = todoListe.length + 1;

        const todo: ToDo = {
            id: neueId,
            text,
            isChecked: false,
        };

        set(todosAtom, [...get(todosAtom), todo])
    }


);

export const updateTodoAtom = atom(

);


export const deleteTodoAtom = atom(
    null,
    (get, set, id: number) => {
        const todos = get(todosAtom);
        const deleted = todos.filter(todo => todo.id !== id);
        set(todosAtom, deleted);
    }
);
