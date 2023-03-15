import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'


const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("action.payload", action.payload);
            const todo = {
                id: nanoid(),
                heading: action.payload.heading,
                description: action.payload.description
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer