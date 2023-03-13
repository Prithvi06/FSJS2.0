import React from "react";
import { useSelector } from 'react-redux'
// import { addTodo,removeTodo} from "../feature/todoSlice";

function Todos(){
    const todos = useSelector((state) => state.todo.todos)
    // const dispatch = useDispatch()

    return(
        <div>
            {
                todos.map((todo) => (
                    <>
                        <h4 key={todo.id}>{todo.heading}</h4>
                        <p>{todo.description}</p>
                    </>
                ))
            }
        </div>
    )
}

export default Todos