import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Mine from './Mine'
export default class Setting extends Component {
  render() {
    return (
      <>
      <div id="setting" className="page">
         <header className="nav-bar">
            <div className="nav-btn nav-left-btn">
              
            </div>
            <h1 className="title">设置</h1>
            <div className="nav-btn nav-right-btn">
              <Link to="/setting/mine">我的</Link>
            </div>
          </header>
      </div>
      <Route path="/setting/mine" component={Mine} />
      </>
    )
  }
}
