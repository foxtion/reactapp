import React, { Component } from 'react'
import store from '../store'
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: store.getState().listData,
      status:store.getState().status
    }
  }
  render () {
    //根据状态过滤列表
    let showList = this.state.listData.filter(item=>{
      return (this.state.status === 'all') ? true : (this.state.status === item.status)
    })
    //展示列表
    let listDOM = showList.map(item=>{
     return <li key={item.id}>
        <span>{item.value}</span>
        {item.status === 'todo' && <button onClick={this.finishAction.bind(this,item.id)}>完成</button>}
      </li>
    })
    return (
      <div>
        <h1>列表</h1>
        <ul>
          {listDOM}
        </ul>
      </div>
    )
  }
  
  finishAction(id){
    console.log(id)
    store.dispatch({
      type:'finish',
      value:id
    })
  }
  componentDidMount () {
    //监听数据变化，将新的数据转化为组件内部的数据
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        status: store.getState().status,
        listData: store.getState().listData
      })
    })
  }
  componentWillUnmount(){
    //移除监听
    this.unSubscribe()
  }
}
