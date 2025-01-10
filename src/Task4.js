
import React from "react"


export default class Myfun extends React.Component {
    state = {v:0}
    add=()=>{
        this.setState((state)=>{
            return {v:state.v+1}
        })
    }
    render(){
        return(
            <>
            <h1>state</h1>
            <h3>{this.state.v}</h3>
            <button onClick={this.add}>+</button>
            </>
        )
    }
}