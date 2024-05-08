import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(){
        super();
        console.log('constructor');
        this.state = {
            number : 10
        };
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps' , props, state)
        return {
            number : 40
        }
    }


    render() {
        console.log('render')
        return (
        <h5>ClassLifeCycle {this.state.number} {this.state.name}</h5>
        )
    }
}

export default LifeCycle