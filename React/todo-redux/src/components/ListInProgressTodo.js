import React from "react";
import { useDispatch } from 'react-redux'
import { removeInProgressTodo } from "../feature/todoSlice";

function ListInProgressTodos(props){
    const dispatch = useDispatch()

    const removeTodo = (id) => {
      dispatch(removeInProgressTodo(id))
    }

    const updateTodo = (id, heading, description) => {
      props.setHeading(heading)
      props.setDescription(description)
      props.setbtnName("Update Task")
      props.setformHide(true)
      props.settaskKey(id)
    }

    if (props.id){
    return(
        <div className="bg-white m-1 p-2 rounded-md">
          <div className="flex justify-between">
            <h5 className="text-violet-600 font-bold">{props.heading}</h5>
            <p className="flex gap-5">
              <span className="text-blue-500  cursor-pointer hover:text-blue-700" 
              onClick={() => {updateTodo(props.id, props.heading, props.description)}}> <i className="fa-solid fa-pen"></i> </span>
              <span className="text-rose-500 float-right cursor-pointer hover:text-rose-700" 
              onClick={()=> removeTodo(props.id)}> <i className="fa-solid fa-trash"></i></span>
            </p>
          </div>
          <p>{props.description}</p>
        </div>
    )}
    else{
    return(
        <></>
    )}
}

export default ListInProgressTodos