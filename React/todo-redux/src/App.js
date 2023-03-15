import React, { useState } from 'react';
import ListTodos from './components/ListTodos';
import { addTodo } from './feature/todoSlice';
import { useSelector, useDispatch } from 'react-redux'
// import TaskForm from './components/TaskForm';

function App() {
  const [openForm, setopenForm] = useState(false)
  const [todo, setTodo] = useState({})
  const [disable, setDisable] = useState(true)
  const dispatch = useDispatch()
  const updateState = (e) => {
    if (e.target.value){
      setDisable(false)
    }else{
      setDisable(true)
    }
    setTodo(
      {
        ...todo,
        [e.target.name]: e.target.value
      }
    )
  }
  const submit = (e) => {
    if (!disable){
      e.preventDefault()
      setDisable(true)
      dispatch(addTodo(todo))
      console.log(todo)
      setTodo({})
    }
    setopenForm(false)
  }
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div className="App">
      <h1 className='text-center text-2xl font-sans font-bold mb-10 text-white'>TODO BOARD</h1>
      <main className='flex flex-wrap gap-x-28'>
        <div className='p-2 basis-1/4 tasks backdrop-blur-sm bg-white/30  rounded-md'>
          <h3 className='font-bold'>Project Todos</h3>
          <>
            {
              todos.map((todo) => (
                  <ListTodos key={todo.id} 
                  heading={todo.heading} 
                  description={todo.description}
                  id={todo.id}/>
              ))
            }
          </>
          <button className='text-white w-[100%] mt-3' onClick={()=> {setopenForm(true)}}>+ Add Task</button>
          {openForm && (
            <div className='form-div border border-gray-200 p-2 mt-3'>
              <form onSubmit={submit}>
                <div>
                  <label className='block mb-1 text-sm font-medium text-gray-900'>Heading</label>
                  <input type='text' className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='heading' name='heading' placeholder='Heading' onChange={updateState}></input>
                </div>
                <div>
                  <label className='block mb-1 text-sm font-medium text-gray-900'>Description</label>
                  <input type='text' className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='description' name='description' placeholder='Description' onChange={updateState}></input>
                </div>
                <div className='flex space-between'>
                <button className='border rounded-full px-2 py-1 text-sm mt-2 backdrop-blur-sm bg-white/30' disabled={disable}>Add Task</button>
                <button className='border rounded-full px-2 py-1 text-sm mt-2 backdrop-blur-sm bg-white/30'>Cancel</button>
                </div>
              </form>
            </div>
          )
          }
        </div>
        <div className='p-2 basis-1/4 tasks  backdrop-blur-sm bg-white/30 rounded-md'>
          <h3 className='font-bold'>In-progress</h3>
          <button className='text-white w-[100%] mt-3'>+ Add Task</button>
        </div>
        <div className='p-2 basis-1/4 tasks backdrop-blur-sm bg-white/30 rounded-md'>
          <h3 className='font-bold'>Completed</h3>
          <button className='text-white w-[100%] mt-3'>+ Add Task</button>
        </div>
      </main>
    </div>
  )
}

export default App;
