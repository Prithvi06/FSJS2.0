import React, { useState } from "react";
import { addInprogressTodo, editInProgressTodo } from "../feature/todoSlice";
import { useDispatch } from "react-redux";

import toast, { Toaster } from 'react-hot-toast';

function TodoForm(props){
    
    // const [heading, setHeading] = useState(props.heading)
    // const [description, setDescription] = useState(props.description)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const addToast = () => toast.success('Task add successfully');
    const dispatch = useDispatch()
        
    const updateformState = (e) => {
        if (e.target.name === "heading"){
            props.setHeading(e.target.value)
            setBtnDisabled(false)
        }else if (e.target.name === "description"){
            props.setDescription(e.target.value)
            setBtnDisabled(false)
        }
    }

    const submit = (e) => {
        console.log(e.target[2].innerText)
        e.preventDefault()
        if (e.target[2].innerText === "Add Task" && (props.heading || props.description)){
            dispatch(addInprogressTodo({
                "heading": props.heading,
                "description": props.description
            }))
            props.setHeading("")
            props.setDescription("")
        }else if (e.target[2].innerText === "Update Task" && (props.heading || props.description)){
            dispatch(editInProgressTodo({
                "id":props.taskKey,
                "heading":props.heading,
                "description":props.description
            }))
            props.setHeading("")
            props.setDescription("")
            props.settaskKey()
            props.setbtnName("Add Task")
        }
        props.setformHide(false)
    }

    const cancelForm = (e) => {
        e.preventDefault()
        props.setHeading("");
        props.setDescription("");
        props.setformHide(false)
    }

    return(
        <div className='form-div border border-gray-200 p-2 mt-3'>
            <form onSubmit={submit}>
            <div>
                <label className='block mb-1 text-sm font-medium text-gray-900'>Heading</label>
                <input type='text' value={props.heading}  className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='heading' name='heading' placeholder='Heading' onChange={updateformState}></input>
            </div>
            <div>
                <label className='block mb-1 text-sm font-medium text-gray-900'>Description</label>
                <input type='text' value={props.description}  className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='description' name='description' placeholder='Description' onChange={updateformState}></input>
            </div>
            <div className='flex justify-around'>
            <button className='border rounded-full px-2 py-1 text-sm mt-2 backdrop-blur-sm bg-white/30 ' disabled={btnDisabled} onClick={addToast}>{props.btnName}</button>
            <button className='border rounded-full px-2 py-1 text-sm mt-2 backdrop-blur-sm bg-white/30 ' onClick={cancelForm}>Cancel</button>
            <Toaster
                  position="top-center"
            />
            </div>
            </form>
        </div>
    )
}

export default TodoForm