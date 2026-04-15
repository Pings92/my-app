import { Component } from "react"
import profileData from "./ProfileData"
//  syntaxe d'un composant de type classe

class Profile extends Component {
    render(){
        return(
            <div>
                <profileData />
            </div>
        )
    }
} 
//  Fin syntaxe d'un composant de type classe

export default Profile