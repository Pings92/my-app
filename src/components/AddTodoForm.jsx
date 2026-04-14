// import './App.css'
import React, { Component } from 'react'
import { useState } from 'react'

const AddTodoForm = ({addNewTodo}) => {
    //Pour Jerem interrogation pour la ligne du dessous. Cette phrase je ne la comprends pas
    const [addTodo, setAddTodo] = useState('')

    // addNewTodo(addTodo)

    // console.log(addTodo)

    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodo(addTodo)
        setAddTodo('')
    }

    return(
        <form className="mt-4" onSubmit={handleTodo} > 
            <div className='card card-body'>
                <div className='form-group'>
                    <label>Ajouter Todo</label>
                    <input className='form-control' value={addTodo} type="text" onChange={(e) => setAddTodo(e.target.value)} />
                    <input type="submit" value="Mon bouton" className="btn btn-success mt-4" />
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm