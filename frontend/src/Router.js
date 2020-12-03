import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import NotFound from './components/404/NotFound'
import Home from './pages/Home'
import Profile from './pages/Profile'
import MyWorks from './pages/MyWorks'
import GlobalStyle from './components/GlobalStyle'
import NavBar from './components/NavBar'
import HeaderNav from './components/HeaderNav'


const RouterApp = () => {
    return (
        <Router>
            <GlobalStyle />
            <HeaderNav />
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/myworks" component={MyWorks} />
                <Route componentt={NotFound} />
            </Switch>
        </Router>
    )
}

export default RouterApp