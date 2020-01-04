import React, { Component } from 'react'
import './style.css'
let message = 'hello world'
let dom = (
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
)
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'hello react!',
            cName:'yellow',
            cName2:'green',
            active:true
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>{message}</h1>
                <h1>{dom}</h1>
                <h1 className="box" title={this.state.title}></h1>
                <div className={'box '+this.state.cName +' '+this.state.cName2+' '+(this.state.active?'active':'')}></div>
                <div style={{
                    background:'pink',
                    width:'50px',
                    height:'50px',
                    margin:'10px 0 0 0'
                }}></div>
            </div>
        )
    }
}
