import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Location from './location'
import Weather from './Weather'
import Detail from './Detail'
export default class Home extends Component {
  render () {
    let listDOM = ( ()=>{
      let dom = []
      for ( let index = 1;index<100;index++) {
        dom.push(
         <li className="item" key={index} onClick={this.goDetailAction.bind(this,index)} >{index}</li>
        )
      }
      return dom
    })()
    return (
      <>
        <div id="home" className="page">
          <header className="nav-bar">
            <div className="nav-btn nav-left-btn">
              <Link to="/home/location">定位</Link>
            </div>
            <h1 className="title">首页</h1>
            <div className="nav-btn nav-right-btn">
              <Link to="/home/weather">天气</Link>
            </div>
          </header>
          <div className="content">
            <ul className="list" >
              {listDOM}
            </ul>
          </div>
        </div>
        <Route path="/home/location" component={Location} />
        <Route path="/home/weather" component={Weather} />
        <Route path="/home/detail" component={Detail} />
      </>
    )
  }
  goDetailAction(index){
    //this.props.history.push(`/home/detail/${index}/hello`)
    this.props.history.push({pathname:`/home/detail`,state:{id:index,name:'hello'}})

  }
}
