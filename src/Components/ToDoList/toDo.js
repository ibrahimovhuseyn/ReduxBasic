import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    list: [
        {
            id: 1,
            text: "Go to Academy",
            isCompleted: false
        },
        {
            id: 2,
            text: "Learn REDUX",
            isCompleted: false
        }
    ]
}

export const toDoSlice = createSlice({

    name: 'toDoItem',
    initialState,
    reducers: {
        additem: (state, action) => {
            state.list = [...state.list, action.payload]
        },
        removeItem: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        completeWork: (state, action) => { 
            const selectedItem = state.list.find(item => item.id === action.payload)
            selectedItem.isCompleted = true
        }
    }
})

export const { additem, removeItem, completeWork } = toDoSlice.actions
export default toDoSlice.reducer