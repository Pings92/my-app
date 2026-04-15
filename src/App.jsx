import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import ClassCount from './components/ClassCount'
import FunctionCount from './components/FunctionCount'

function App() {

  const [user, setUser] = useState ([
      {Name: Lisa, Age: 8},            
  ])    

  return (
    <>
      <h1 className="text-center"> Todo List</h1>
      <div className='container'>
        {/* <Todo /> */}
        {/* <ClassCount/> */}
        {/* <FunctionCount/>         */}
        <Profile/>
      </div>
      

    </>
  )
}

export default App
