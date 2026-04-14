// import React, { Component } from 'react'
import React, { useState }from 'react'


const FunctionState = () => {
    const[counter, setCounter] = useState(0)
    
    // const addOne =()=>{
    //     setCounter(counter + 1)
    // }
    // const addOne =()=>{
    // setCounter(prevCounter => prevCounter + 1)
    // }

    return (
        <div>
            <p>Function State</p>
            <p>Compteur: {counter}</p>
            {/* <button onClick={addOne}> State dans Function</button> */}
            <button onClick={()=>setCounter(prevCounter => prevCounter + 1)}> State dans Function</button>
        </div>
    )
}

export default FunctionState