import { configureStore } from "@reduxjs/toolkit"
import toDoReducer from "../Components/ToDoList/toDo"

export const store = configureStore({
    reducer: {
        todo_items: toDoReducer
    }
}) 