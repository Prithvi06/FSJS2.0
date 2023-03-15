// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../feature/todoSlice";

// function TaskForm(){
//     const [todo, setTodo] = useState({})
//     const dispatch = useDispatch()
//     const updateState = (e) => {
//         setTodo(
//         {
//             ...todo,
//             [e.target.name]: e.target.value
//         }
//         )
//     }
//     const submit = (e) => {
//         e.preventDefault()
//         if (todo.heading){

//         dispatch(addTodo(todo))
//         console.log(todo)
//         }
//     }
//     return(
//         <div className='form-div border border-gray-200 p-2 mt-3'>
//             <form onSubmit={submit}>
//               <div>
//                 <label className='block mb-1 text-sm font-medium text-gray-900'>Heading</label>
//                 <input type='text' className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='heading' name='heading' placeholder='Heading' onChange={updateState}></input>
//               </div>
//               <div>
//                 <label className='block mb-1 text-sm font-medium text-gray-900'>Description</label>
//                 <input type='text' className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='description' name='description' placeholder='Description' onChange={updateState}></input>
//               </div>
//               <button className='border rounded-full px-2 py-1 text-sm mt-2 backdrop-blur-sm bg-white/30' type='submit'>Add Task</button>
//             </form>
//         </div>
//     )
// }
// export default TaskForm