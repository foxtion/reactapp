import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div id="detail" className="page subpage">
        <header className="nav-bar">
          <div className="nav-btn nav-left-btn" onClick={this.gobackActiom.bind(this)}>
            <span>返回</span>
          </div>
          <h1 className="title">详情</h1>
          <div className="nav-btn nav-right-btn">

          </div>
        </header>
        <div className="content">
          <h1>id:{this.props.location.state.id}</h1>
          <h1>name:{this.props.location.state.name}</h1>
        </div>
      </div>
    )
  }
  gobackActiom () {
    this.props.history.goBack()
  }
}
