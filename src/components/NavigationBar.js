import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../actions";

const NavigationBarComponent = ({type,logout}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/" >
                Music Con
            </Link>
            <Link className="navbar-nav" to="/login">Login</Link>
            <Link className="navbar-nav" to="/registration">Registration</Link>
            <Link className="navbar-nav" to="/profile">Profile</Link>
            <Link to='/' onClick={logout()}>Logout</Link>

        </nav>
    )
}
const dispathToPropsMapper = (dispatch) => ({
    logout: (dispatch) => actions.logout(dispatch)
});
const stateToPropsMapper = state => ({
    type:state.userType
});

const NavigationBar = connect(stateToPropsMapper,dispathToPropsMapper)(NavigationBarComponent);
export default NavigationBar;