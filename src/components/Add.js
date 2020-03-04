import React, { Component } from 'react'
import store from '../store'
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
  }
  render () {
    return (
      <div>
        <h1>新增</h1>
        <input type="text" value={this.state.val} onChange={this.changeAction.bind(this)} />
        <button onClick={this.addAction.bind(this)}>新增</button>
      </div>
    )
  }
  changeAction (ev) {
    this.setState({
      val: ev.target.value
    })
  }
  addAction () {
    let value = this.state.val
    if (value === '') {
      alert('内容不能为空')
    }
    else {
      this.setState({ val: '' })
      store.dispatch({
        type: 'add',
        value
      })

    }
  }
}
