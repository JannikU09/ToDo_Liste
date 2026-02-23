import { atom } from "jotai";
import { generateId } from "../utils/uuid";

//Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FolderIcon from '@mui/icons-material/Folder';
import NotInterestedIcon from '@mui/icons-material/NotInterested';



export interface Category {
    id: string;
    label: string;
    icon: any;
}

export interface ToDo {
    id: string;
    isChecked: boolean;
    text: string;
    categoryId: string;
}

export const category: Category[] = [
    { id: "no_category", label: "No Category", icon: NotInterestedIcon },
    { id: "health", label: "Health", icon: FavoriteIcon },
    { id: "work", label: "Work", icon: WorkIcon },
    { id: "mental_health", label: "Mental Health", icon: VolunteerActivismIcon },
    { id: "others", label: "Others", icon: FolderIcon },
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
