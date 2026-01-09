import { atom } from "jotai";

export interface ToDo {
    id: string;
    isChecked: boolean;
    text: string;
}

export const todosAtom = atom<ToDo[]>([]);

export const addTodoAtom = atom(
    null,
    (get, set, text: string) => {
        const todo: ToDo = {
            id: "1",
            text,
            isChecked: false,
        };
        set(todosAtom, [...get(todosAtom), todo])
    }
)
