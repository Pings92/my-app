import { Component, useReducer } from "react"
// import {  } from "react"

const initialValue = 0;

const reducer = (state, action) =>{
        switch (action) {
            case "AJOUTER":
                return state +1;
            case "ENLEVER":
                return state -1;
            case "REINIT":
                return initialValue;
            default:
                return state            
    }
} 

const CountReducer = () => {
    // const result = useReducer(reducer, initialValue);
    // const newSum = result[0];
    // const dispatch = result[1];
    
    // const [name, setName] = useState("")

    const [newSum, dispatch] = useReducer(reducer, initialValue)
        return (
            <div>
                <h1>Compteur</h1>
                <p>{newSum}</p>
                <hr />
                <button onClick={()=>dispatch("AJOUTER")}> + 1</button>
                <button onClick={()=>dispatch("ENLEVER")}> - 1 </button>
                <button onClick={()=>dispatch("REINIT")}> Réinitialiser </button>
            </div>
        )
        console.log(dispatch)
    } 
// }
export default CountReducer