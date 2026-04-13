import React, { Component } from 'react'

class ClassState extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }
    // addOne =() => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }    
    addOne =() => {
        this.setState(prevState =>{
            return{
                counter: prevState.counter + 1
            }
        })
    }
    render() {
        return (
            <div>
                <p>Voici venu le temps des rires et des chants, lalalala ..., c'est tous les jours le printemps, c'est le pays joyeux, des enfants heureux</p>
                <p>Compteur: {this.state.counter}</p>
                <button onClick={this.addOne}>Ajouter 1</button>
            </div>
        )
    }
}


export default ClassState