import React, { useState } from 'react';
import ListTodos from './components/ListTodos';
import { addTodo, editTodo, removeAllTodo } from './feature/todoSlice';
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [openForm, setopenForm] = useState(false)
  const [todo, setTodo] = useState({})
  const [disable, setDisable] = useState(true)
  const [editheading, setHeading] = useState("")
  const [editdescrip, setDescription] = useState("")
  const [button, setButton] = useState("Add Task")
  const [todokey, setTodoKey] = useState()
  const addToast = () => toast.success('Task add successfully');
  const updateToast = () => toast('Task update successfully');
  const removeToast = () => toast('Task remove successfully');

  const dispatch = useDispatch()
  const updateState = (e) => {
    if (e.target){
      console.log(e.target.value)
      setDisable(false)
      if (e.target.name === "heading"){
        setHeading(e.target.value)
      }if (e.target.name === "description"){
        setDescription(e.target.value)
      }
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
    e.preventDefault()
    if (e.target.innerText === "Cancel"){
        setDisable(true);
        setTodo({});
    }else if (!disable && e.target.innerText==="Add Task"){
      console.log("task add", todo)
      setDisable(true)
      dispatch(addTodo(todo))
      setTodo({})
      setHeading("")
      setDescription("")
      addToast()
    }else if (!disable && e.target.innerText==="Update Task"){
      let updatetodo = {
        "id": todokey,
        "heading": editheading,
        "description": editdescrip
      }
      dispatch(editTodo(updatetodo));
      setHeading("")
      setDescription("")
      updateToast()
      setButton("Add Task")
    }
    setopenForm(false)
  }
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div className="App">
      <h1 className='text-center text-2xl font-sans font-bold mb-10 text-white'>TODO BOARD</h1>
      <main className='flex flex-wrap justify-around'>
        <div className='mt-2 p-2 basis-1/4 tasks backdrop-blur-sm bg-white/30  rounded-md'>
          <h3 className='font-bold'>Project Todos
          <span className="text-rose-700 float-right cursor-pointer hover:text-rose-900" onClick={()=>{dispatch(removeAllTodo())}}> <i className="fa-solid fa-trash"></i></span>
          </h3>
          <>
            {
              todos.map((todo) => (
                  <ListTodos key={todo.id} 
                  heading={todo.heading} 
                  description={todo.description}
                  id={todo.id}
                  setHeading={setHeading}
                  setDescription={setDescription}
                  setopenForm={setopenForm}
                  setButton={setButton}
                  setTodoKey={setTodoKey}
                  />
              ))
            }
          </>
          <button className='text-white w-[100%] mt-3 hover:text-indigo-800' onClick={()=> {setopenForm(true)}}><b>+</b> Add Task</button>
          {openForm && (
            <div className='form-div border border-gray-200 p-2 mt-3'>
              <form>
                <div>
                  <label className='block mb-1 text-sm font-medium text-gray-900'>Heading</label>
                  <input type='text' value={editheading} className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='heading' name='heading' placeholder='Heading' onChange={updateState}></input>
                </div>
                <div>
                  <label className='block mb-1 text-sm font-medium text-gray-900'>Description</label>
                  <input type='text' value={editdescrip} className='w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='description' name='description' placeholder='Description' onChange={updateState}></input>
                </div>
                <div className='flex justify-around'>
                <button className='border rounded-full px-2 py-1 text-sm mt-2 backdrop-blur-sm bg-white/30 hover:bg-blue-600 hover:text-white' disabled={disable} onClick={submit}>{button}</button>
                <button className='border rounded-full px-2 py-1 text-sm mt-2 backdrop-blur-sm bg-white/30 hover:bg-blue-600 hover:text-white' onClick={submit}>Cancel</button>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                />
                </div>
              </form>
            </div>
          )
          }
        </div>
        <div className='mt-2 p-2 basis-1/4 tasks  backdrop-blur-sm bg-white/30 rounded-md'>
          <h3 className='font-bold'>In-progress
          <span className="text-rose-700 float-right cursor-pointer hover:text-rose-900" onClick={()=>{dispatch(removeAllTodo())}}> <i className="fa-solid fa-trash"></i></span></h3>
          <button className='text-white w-[100%] mt-3 hover:text-indigo-800'><b>+</b> Add Task</button>
        </div>
        <div className='mt-2 p-2 basis-1/4 tasks backdrop-blur-sm bg-white/30 rounded-md'>
          <h3 className='font-bold'>Completed
          <span className="text-rose-700 float-right cursor-pointer hover:text-rose-900" onClick={()=>{dispatch(removeAllTodo())}}> <i className="fa-solid fa-trash"></i></span></h3>
          <button className='text-white w-[100%] mt-3 hover:text-indigo-800'><b>+</b> Add Task</button>
        </div>
      </main>
    </div>
  )
}

export default App;
