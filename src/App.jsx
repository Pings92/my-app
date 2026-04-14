import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <h1 className="text-center"> Todo List</h1>
      <div className='container'>
        <Todo />
      </div>
      

    </>
  )
}

export default App
