import React from "react";

class CounterClass extends React.Component {
    constructor(){
        super()
        this.state = {
            saludo: 'Me cago en la ura'
        }
        
    }

        componentDidMount (){
            this.setState({saludo: 'HOLA'})
        }

        componentDidUpdate () {
            console.log ('Se re-renderizo')
        }

        handleOnClick= ()=>{
            this.setState ({saludo: 'Anthony programa'})
        }

    render (){
        return (
            <div>
                <h1>{this.state.saludo}</h1>
                <button onClick={this.handleOnClick}>Chance</button>
            </div>
        )
    }
}

export default CounterClass;