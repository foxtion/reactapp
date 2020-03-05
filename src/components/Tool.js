import React, { Component } from 'react'
import { connect } from 'react-redux'
class Tool extends Component {

  render () {
    let nav = [
      { flag: 'all', name: '全部' },
      { flag: 'todo', name: '待办' },
      { flag: 'finish', name: '完成' },
    ]
    return (
      <div>
        <h1>工具</h1>
        <nav>
          {nav.map(item => {
            return <button key={item.flag} style={{ background: this.props.status === item.flag ? 'red' : '#fff' }} onClick={this.props.changeStatusAction.bind(this, item.flag)}>{item.name}</button>
          })}
        </nav>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    status: state.status
  }
}
//将store上的dispath方法传入作为参数
const mapDispatchProps = (dispatch) => {
  console.log(dispatch)
  return {
    changeStatusAction (flag) {
      //告诉store切换状态
      console.log(flag)
      dispatch({
        type: 'changestatus',
        value: flag
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Tool)