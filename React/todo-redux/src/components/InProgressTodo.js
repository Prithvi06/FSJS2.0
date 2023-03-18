import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import ListInProgressTodos from "./ListInProgressTodo";

function InProgressTodo(){
    const [heading, setHeading] = useState("")
    const [description, setDescription] = useState("")
    const [formHide, setformHide] = useState(false) 
    const [btnName, setbtnName] = useState("Add Task")
    const [taskKey, settaskKey] = useState()
    const InProgressTodo = useSelector((state) => state.todo.inProgressTodo)

    return(
        <div className='mt-2 p-2 basis-1/4 tasks  backdrop-blur-sm bg-white/30 rounded-md'>
            <h3 className='font-bold'>In-progress
            <span className="text-rose-700 float-right cursor-pointer hover:text-rose-900"> <i className="fa-solid fa-trash"></i></span></h3>

            {
                InProgressTodo.map((todo) => (
                  <ListInProgressTodos key={todo.id} 
                  heading={todo.heading} 
                  description={todo.description}
                  id={todo.id}
                  setformHide={setformHide}
                  setHeading={setHeading}
                  setDescription={setDescription}
                  setbtnName={setbtnName}
                  settaskKey={settaskKey}
                  />
                ))
            }
            
            <button className='text-white w-[100%] mt-3 hover:text-indigo-800' onClick={()=> setformHide(true)}><b>+</b> Add Task</button>

            {formHide &&
                <TodoForm 
                    setformHide={setformHide}
                    heading={heading}
                    description={description}
                    setHeading={setHeading}
                    setDescription={setDescription}
                    btnName={btnName}
                    setbtnName={setbtnName}
                    taskKey={taskKey}
                    settaskKey={settaskKey}
                />}
        </div>
    )
}

export default InProgressTodo