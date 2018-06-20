import React from  'react'
import ReactDOM from "react-dom";
import NavigationBar from "../components/Navigation-Bar";
import Search from "../components/Search";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Login from "../components/Login";
import LoginContainer from "./LoginContainer";
import ProfileContainer from "./ProfileContainer";

export  default class HomeContainer
    extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/"
                           component={NavigationBar}>
                    </Route>
                    <Route path="/search"
                           component={Search}>
                    </Route>
                    <Route path='/login'
                    component={LoginContainer}/>
                    <Route path='/profile'
                           component={ProfileContainer}/>
                </div>
            </Router>

        )
    }
}


