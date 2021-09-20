import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../screens/home'
import About from '../screens/about'
import Nav from '../components/nav'
import Student from '../screens/students';
import StudentDetail from '../screens/student-detail'

function Routes() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Student">
                    <Student />
                </Route>
                <Route path="/student-detail/:rollNumber">
                    <StudentDetail />
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;