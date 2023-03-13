import React, { useState } from 'react';
import Todos from './components/AddTask';
import { addTodo } from './feature/todoSlice';
import { Dispatch } from 'react';

function App() {

  const [todo, setTodo] = useState({})
  const dispatch = Dispatch()
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
    dispatch(addTodo(todo))
    console.log(todo)
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <Todos></Todos>
      <div>
        <form onSubmit={submit}>
          <label>Heading</label>
          <input type='text' id='heading' name='heading' placeholder='heading' onChange={updateState}></input>
          <label>Description</label>
          <input type='text' id='description' name='description' placeholder='description' onChange={updateState}></input>
          <button type='submit'>Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default App;
