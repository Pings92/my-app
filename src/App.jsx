import { useState } from 'react'
import './App.css'
// import Todo from './components/Todo'
// import ClassCount from './components/ClassCount'
// import FunctionCount from './components/FunctionCount'
import { UserContext, ColorContext } from './components/MyContext'
import Profile from './components/Profile'

function App() {

  const [user, setUser] = useState (
      { name: "Lisa",
        age: 8,}            
  )    

  return (
    <>
      {/* <h1 className="text-center"> Todo List</h1> */}
      <div className='container'>
        {/* <Todo /> */}
        {/* <ClassCount/> */}
        {/* <FunctionCount/>         */}
        <UserContext.Provider value= {user}>
          <ColorContext.Provider value = {"red"} >
            <Profile />
          </ColorContext.Provider>
        </UserContext.Provider>

      </div>
      

    </>
  )
}

export default App
