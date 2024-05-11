import React, { Component } from 'react'

export class ClassLifeCycle extends Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            number: 10
        };
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state)
        // return {
        //     number : 40
        // }
        return {}
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(preProps, preState) {
        console.log('getSnapshotBeforeUpdate', preProps, preState)
        return "dfgdfg"
    }

    componentDidUpdate(preProps, preState, snapshot) {
        console.log('componentDidUpdate', preProps, preState, snapshot)
    }

    render() {
        console.log('render')
        return (
            <>
                <h5>ClassLifeCycle {this.state.number}</h5>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>Click</button>
            </>
        )
    }
}

export default ClassLifeCycle