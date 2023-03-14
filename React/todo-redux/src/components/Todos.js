import React from "react";
import { useDispatch } from 'react-redux'
import { removeTodo } from "../feature/todoSlice";
// import { addTodo,removeTodo} from "../feature/todoSlice";

function Todos(props){
    // const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    const remove = (id) => {
        dispatch(removeTodo(id))
    }
    console.log("props.id",props.id)
    if (props.id){
    return(
        <div className="taskCart">
          <h5>{props.heading}</h5>
          <p>{props.description}</p>
          <button onClick={() => {remove(props.id)}} className="remove">Remove</button> 
        </div>
    )}
    else{
    return(
        <></>
    )}
}

export default Todos