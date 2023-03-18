import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'


const initialState = {
    todos: [],
    inProgressTodo: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
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
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                return todo.id === action.payload.id ? {...todo, heading: action.payload.heading, description: action.payload.description} : todo
            })
        },
        removeAllTodo: (state, action) => {
            state.todos = []
        },
        addInprogressTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                heading: action.payload.heading,
                description: action.payload.description
            }
            state.inProgressTodo.push(todo)
        },
        removeInProgressTodo: (state, action) => {
            state.inProgressTodo = state.inProgressTodo.filter((todo) => todo.id !== action.payload)
        },
        editInProgressTodo: (state, action) => {
            state.inProgressTodo = state.inProgressTodo.map((todo) => {
                return todo.id === action.payload.id ? {...todo, heading:action.payload.heading,
                description:action.payload.description} : todo
            })
        }
    },
})

export const { addTodo, removeTodo, editTodo, removeAllTodo, addInprogressTodo, removeInProgressTodo, editInProgressTodo } = todoSlice.actions
export default todoSlice.reducer