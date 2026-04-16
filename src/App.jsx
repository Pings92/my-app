import { useState, useCallback } from 'react'
import './App.css'
// import Todo from './components/Todo'
// import ClassCount from './components/ClassCount'
// import FunctionCount from './components/FunctionCount'
import CountReducer from './components/CountReducer'
import { UserContext, ColorContext } from './components/MyContext'
import Profile from './components/Profile'
import Button from './components/Button'
import Progress from './components/Progress'

function App() {

  const [user, setUser] = useState (
      { name: "Lisa",
        age: 8,}            
  );    

  const [count1, setCount1] =useState({value: 0, btnColor: 'succes', increment: 25});
  const [count2, setCount2] =useState({value: 0, btnColor: 'danger', increment: 20});

  return (
    <>
      {/* <h1 className="text-center"> Todo List</h1> */}
      <div className='container'>
        {/* <Todo /> */}
        {/* <ClassCount/> */}
        {/* <FunctionCount/>         */}
        {/* <UserContext.Provider value= {user}> */}
          {/* <ColorContext.Provider value = {"red"} > */}
            {/* <Profile /> */}
          {/* </ColorContext.Provider> */}
        {/* </UserContext.Provider> */}
        {/* <Count /> */}
        {/* <CountReducer /> */}
        <Progress count = { count1.value } bgColor = { count1.btnColor } />
        <Button> Count 1</Button>
        <Progress count = { count2.value } bgColor = { count2.btnColor }/>
        <Button> Count 2</Button>
      </div>
      

    </>
  )
}

export default App
