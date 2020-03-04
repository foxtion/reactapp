import React, { Component } from 'react'
import store from '../store'
export default class Tool extends Component {
  constructor(props){
    super(props);
    this.state={
      status:store.getState().status
    }
  }
  render() {
    let nav = [
      {flag:'all',name:'全部'},
      {flag:'todo',name:'待办'},
      {flag:'finish',name:'完成'},
    ]
    return (
      <div>
        <h1>工具</h1>
        <nav>
          {nav.map(item=>{
           return <button key={item.flag} style={{background:this.state.status === item.flag?'red':'#fff'}} onClick={this.changeStatusAction.bind(this,item.flag)}>{item.name}</button>
          })}
        </nav>
      </div>
    )
  }

  changeStatusAction(flag){
    //告诉store切换状态
    console.log(flag)
    store.dispatch({
      type:'changestatus',
      value:flag
    })
  }


  componentDidMount(){
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        status:store.getState().status
      })
    })
  }

  componentWillUnmount(){
    this.unSubscribe()
  }
}
