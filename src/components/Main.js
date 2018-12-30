import React from 'react';
import LandingPage from './LandingPage'
import Contact from './Contact'
import Projects from './Projects'
import {Switch, Route} from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
    </Switch>
)

export default Main
