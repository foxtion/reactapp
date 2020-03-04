import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Tool from './components/Tool'
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <Add/>
                <List/>
                <Tool/>
            </div>
        )
    }
}
