import React, { useState } from 'react';
import Todos from './components/Todos';
import { addTodo } from './feature/todoSlice';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const [todo, setTodo] = useState({})
  const dispatch = useDispatch()
  const updateState = (e) => {
    setTodo(
      {
        ...todo,
        [e.target.name]: e.target.value
      }
    )
  }
  const submit = (e) => {
    e.preventDefault()
    if (todo.heading){

      dispatch(addTodo(todo))
      console.log(todo)
    }
  }
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div className="App">
      <h1>TODO</h1>

      <>
        {
            todos.map((todo) => (
                <Todos key={todo.id} 
                heading={todo.heading} 
                description={todo.description}
                id={todo.id}
                />
              
          ))
        }
      </>

      <div className='form-div border p-2'>
        <form onSubmit={submit}>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900'>Heading</label>
            <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='heading' name='heading' placeholder='heading' onChange={updateState}></input>
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900'>Description</label>
            <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2' id='description' name='description' placeholder='description' onChange={updateState}></input>
          </div>
          <button className='border rounded-lg bg-green-500 p-2 text-sm mt-2' type='submit'>Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default App;
