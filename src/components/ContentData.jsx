import { UserContext, ColorContext } from "./MyContext"
import React, { useContext } from "react"

//Nouvelle méthode en rappelant les context dans des constantes, évite qu'on rappelle des arrows fonction à foison (hooks)
// const user = useContext(UserContext)
// const color = useContext(ColorContext)

// const myArray = [1,2,3,4]
// const reducer = (accum, curval) => accum + curval
// myArray.reduce(reducer, 5)

//  syntaxe d'un composant de type function
const ContentData= () => {

    return(
        //Début Original
        // <UserContext.Consumer>
        //         {
        //             user=>{
        //                 return (
        //                     <ColorContext.Consumer>
        //                     {
        //                         color => {
        //                             return (
        // Fin début original            

                                        <div style={{color:color}}>
                                            <ul >
                                                <li> Nom:{user.name} </li>
                                                <li> Age:{user.age}  </li>
                                            </ul>
                                        </div>
        //Suite Original
        //                             )
        //                         }
        //                     }
        //                     </ColorContext.Consumer>
        //                 )
        //             }
        //         }
        // </UserContext.Consumer>
        //Fin suite Original


        )
}
//  fin syntaxe composant de type function
export default ContentData