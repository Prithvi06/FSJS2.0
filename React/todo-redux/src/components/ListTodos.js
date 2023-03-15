import React from "react";
import { useDispatch } from 'react-redux'
import { removeTodo } from "../feature/todoSlice";
// import { addTodo,removeTodo} from "../feature/todoSlice";

function ListTodos(props){
    // const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    const remove = (id) => {
        dispatch(removeTodo(id))
    }
    if (props.id){
    return(
        <div className="bg-white m-1 p-2 rounded-md">
          <p>
            <b className="text-violet-600">{props.heading}</b>
            <span className="text-rose-600 float-right cursor-pointer hover:text-rose-700" onClick={() => {remove(props.id)}}> <b>X</b></span>
          </p>
          <p>{props.description}</p>
        </div>
    )}
    else{
    return(
        <></>
    )}
}

export default ListTodos