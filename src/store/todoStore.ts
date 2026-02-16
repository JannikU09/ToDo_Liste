import { atom } from "jotai";
import { generateId } from "../utils/uuid";

export interface ToDo {
  id: string;
  isChecked: boolean;
  text: string;
}

export const todosAtom = atom<ToDo[]>([]);

export const addTodoAtom = atom(null, (get, set, text: string) => {
  const id = generateId();
  const todo: ToDo = {
    id,
    text,
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
