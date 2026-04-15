import React, { Component } from 'react';
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';

const Todo =() => {
        const [warning, setWarning] = useState(false);

        const [todos, setTodos] = useState ([
            {id: 1, todo: 'Acheter du lait'},            
            {id: 2, todo: 'Acheter du pain'}
        ])    
        
        const addNewTodo = (newTodo) => {
            const newid = uuidv4();
            if (newTodo !== '') {
                warning && setWarning(false)

                setTodos([...todos, {
                    id: newid,
                    todo: newTodo
                }])
            } else{
                setWarning(true)
            }
        }
        

        const warningMsg = warning && <div className='alert alert-danger' role='alert'>Veuillez indiquer une tâche</div>
        
        const myTodos = todos.map (todo =>{
            return(
                <li className="list-group-item" key={todo.id}>{todo.todo}</li>
            )
        });
   
    return (
        <div>
            {warningMsg}
            <ul>{myTodos}</ul>
            <AddTodoForm addNewTodoProps={addNewTodo}/>
            {/* props={fonction} */}
        </div>
    )
 }

export default Todo
