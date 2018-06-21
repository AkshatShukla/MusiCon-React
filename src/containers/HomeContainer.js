import React from  'react'
import ReactDOM from "react-dom";
import NavigationBar from "../components/Navigation-Bar";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Login from "../components/Login";
import LoginContainer from "./LoginContainer";
import ProfileContainer from "./ProfileContainer";
import SearchContainer from "./SearchContainer";
import RegistrationContainer from "./RegistrationContainer";

export default class HomeContainer
    extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/"
                           component={NavigationBar}/>
                    <Route path="/"
                           component={SearchContainer}/>
                    <Route path='/login'
                    component={LoginContainer}/>
                    <Route path='/registration'
                           component={RegistrationContainer}/>
                    <Route path='/profile'
                           component={ProfileContainer}/>
                </div>
            </Router>

        )
    }
}


