import { Component } from "react"
import ProfileData from "./ProfileData"
//  syntaxe d'un composant de type classe

class Profile extends Component {
    render(){
        return(
            <div>
                <ProfileData />
            </div>
        )
    }
} 
//  Fin syntaxe d'un composant de type classe

export default Profile