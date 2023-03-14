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
