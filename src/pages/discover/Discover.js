import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Search from './Search'
export default class Discover extends Component {
  render() {
    return (
      <>
      <div id="discover" className="page">
        <header className="nav-bar">
            <div className="nav-btn nav-left-btn">
             
            </div>
            <h1 className="title">发现</h1>
            <div className="nav-btn nav-right-btn">
              <Link to="/discover/search">搜索</Link>
            </div>
          </header>
      </div>
      <Route path="/discover/search" component={Search} />
      </>
    )
  }
}
