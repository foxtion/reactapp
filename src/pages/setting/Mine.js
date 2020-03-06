import React, { Component } from 'react'

export default class Mine extends Component {
  render() {
    return (
      <div id="mine" className="page subpage">
         <header className="nav-bar">
            <div className="nav-btn nav-left-btn" onClick={this.gobackActiom.bind(this)}>
              <span>返回</span>
            </div>
            <h1 className="title">我的设置</h1>
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
