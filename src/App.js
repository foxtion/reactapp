import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect,Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Discover from './pages/discover/Discover'
import Setting from './pages/setting/Setting'
export default class App extends Component {
    render () {
        return (
            <Router>
                <div className="app">
                    <nav className="tab-bar">
                        <li className="tab-item">
                            <NavLink to="/home">首页</NavLink>
                        </li>
                        <li className="tab-item">
                            <NavLink to="/discover">发现</NavLink>
                        </li>
                        <li className="tab-item">
                            <NavLink to="/setting">设置</NavLink>
                        </li>
                    </nav>
                    <Switch>
                    <Route path="/" exact render={() => {
                            return <Redirect to="/home" />
                        }} />
                        <Route path="/home" component={Home} />
                        <Route path="/discover" component={Discover} />
                        <Route path="/setting" component={Setting} />
                        <Route  render={() => {
                            return <Redirect to="/home" />
                        }} />
                    </Switch>
                </div>
            </Router>
        )

    }
}
