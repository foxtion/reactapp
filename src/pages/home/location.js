import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
export default class location extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <div id="location" className="page subpage">
        <header className="nav-bar">
            <div className="nav-btn nav-left-btn" onClick={this.gobackActiom.bind(this)}>
              <span>返回</span>
            </div>
            <h1 className="title">定位</h1>
            <div className="nav-btn nav-right-btn">
              
            </div>
          </header>
      </div>
    )
  }
  gobackActiom(){
    this.props.history.goBack()
  }
}
