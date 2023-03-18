import React from "react";
import { useDispatch } from 'react-redux'
import { removeTodo, addInprogressTodo } from "../feature/todoSlice";

function ListTodos(props){
    const dispatch = useDispatch()

    const remove = (id) => {
      dispatch(removeTodo(id))
    }

    const updateTodo = (id, heading, description) => {
      props.setHeading(heading)
      props.setDescription(description)
      props.setButton("Update Task")
      props.setopenForm(true)
      props.setTodoKey(id)
    }

    const movetoInprogressTodo = (id, heading, description) => {
      dispatch(addInprogressTodo({
        "id": id,
        "heading": props.heading,
        "description": props.description
    }))
    }

    if (props.id){
    return(
        <div className="bg-white m-1 p-2 rounded-md">
          <div className="flex justify-between">
            <h5 className="text-violet-600 font-bold">{props.heading}</h5>
            <p className="flex gap-5">
              <span className="text-blue-500  cursor-pointer hover:text-blue-700" onClick={() => {updateTodo(props.id, props.heading, props.description)}}> <i className="fa-solid fa-pen"></i> </span>
              <span className="text-rose-500 float-right cursor-pointer hover:text-rose-700" onClick={() => {remove(props.id)}}> <i className="fa-solid fa-trash"></i></span>
              <span className="text-blue-500  cursor-pointer hover:text-blue-700" 
              onClick={() => {movetoInprogressTodo(props.id, props.heading, props.description)}}> <i class="fa-solid fa-share"></i> </span>
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

export default ListTodos