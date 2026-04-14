import React, { Component } from 'react'
import { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import { v4 as uuidv4 } from 'uuid'

const Todo =() => {

        const [todos, setTodos] = useState ([
            {id: 1, todo: 'Acheter du lait'},            
            {id: 2, todo: 'Acheter du pain'}
        ])    
        
        const addNewTodo = (newTodo) => {
            const newid = uuidv4();
                setTodos([...todos, {
                    id: newid,
                    todo: newTodo
                }])
        }


        const myTodos = todos.map (todo =>{
            return(
                <li className="list-group-item" key={todo.id}>{todo.todo}</li>
            )
        })
   
    return (
        <div>
            <ul>{myTodos}</ul>
            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    )
 }

export default Todo
