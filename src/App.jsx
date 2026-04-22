import { useState, useCallback, useEffect } from 'react'
import './App.css'
// import Todo from './components/Todo'
// import ClassCount from './components/ClassCount'
// import FunctionCount from './components/FunctionCount'
import CountReducer from './components/CountReducer'
import { UserContext, ColorContext } from './components/MyContext'
import Profile from './components/Profile'
import Button from './components/Button'
import Progress from './components/Progress'
import ClickSayHello from './components/ClickSayHello'
import MyContact from './components/MyContact'

function App() {

  const [user, setUser] = useState (
      { name: "Lisa",
        age: 8,}            
  );    

  const [count1, setCount1] =useState({value: 0, btnColor: 'success', increment: 25});
  const [count2, setCount2] =useState({value: 0, btnColor: 'danger', increment: 20});

  const incrementCount1 = useCallback((val) => {
    console.log("je suis dans increment 1")
    count1.value < 100 && setCount1({...count1, value: count1.value + val });
  }, [count1]);

    const incrementCount2 = useCallback((val) => {
    console.log("je suis dans increment 2")
    count2.value < 100 && setCount2({...count2, value: count2.value + val });
  }, [count2]);

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
        {/* <Progress text = "Count1" count = { count1.value } bgColor = { count1.btnColor } />
        <Button handleClick={incrementCount1} btnColor={count1.btnColor} increment={count1.increment} > Count 1</Button>
        <Progress text = "Count2" count = { count2.value } bgColor = { count2.btnColor }/>
        <Button handleClick={incrementCount2} btnColor={count2.btnColor} increment={count2.increment} > Count 2</Button> */}
        <MyContact/>
        <ClickSayHello/>
      </div>
      

    </>
  )
}

export default App
