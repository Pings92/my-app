// import './App.css'
import React, { Component } from 'react'
import { useState } from 'react'

const AddTodoForm = ({addNewTodoProps}) => {
    //Pour Jerem interrogation pour la ligne du dessous. Cette phrase je ne la comprends pas
    const [addTodo, setAddTodo] = useState('')

    // addNewTodo(addTodo)

    // console.log(addTodo)

    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodoProps(addTodo);
        setAddTodo('')
    }

    return(
        <form className="mt-4" onSubmit={handleTodo} > 
            <div className='card card-body'>
                <div className='form-group'>
                    <label className='text txt-info'>Ajouter une tâche</label>
                    <input className='form-control' value={addTodo} placeholder='Ex: Regarder Malcom, Faire la vaisselle, ...' type="text" onChange={(e) => setAddTodo(e.target.value)} />
                    <input type="submit" value="Mon bouton" className="btn btn-success mt-4" />
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm