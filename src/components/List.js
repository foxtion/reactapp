import React, { Component } from 'react'
import { connect } from 'react-redux'
 class List extends Component {
  render () {
    console.log('render list')
    //根据状态过滤列表
    let {listData,status,finishAction} = this.props
    let showList = listData.filter(item=>{
      return (status === 'all') ? true : (status === item.status)
    })
    //展示列表
    let listDOM = showList.map(item=>{
     return <li key={item.id}>
        <span>{item.value}</span>
        {item.status === 'todo' && <button onClick={finishAction.bind(this,item.id)}>完成</button>}
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
}

const mapStateToProps = (state)=>{
  return {
    status:state.status,
    listData:state.listData
  }
}

const mapDispathToProps = (dispatch)=>{
  return {
    finishAction(id){
      console.log(id)
      dispatch({
        type:'finish',
        value:id
      })
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(List)