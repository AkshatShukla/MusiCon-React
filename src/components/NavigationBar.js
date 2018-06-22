import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../actions";

const NavigationBarComponent = ({type, logout}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/">
                <button className="btn btn-outline-light"><h1>MusiCon</h1></button>
            </Link>
            <form className="form-inline">
                <div hidden={type !== undefined}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/login">
                        <button className="btn btn-dark">Login</button>
                    </Link>
                </div>
                <div hidden={type !== undefined}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/registration">
                        <button className="btn btn-dark">Registration</button>
                    </Link>
                </div>
                <div hidden={type === undefined}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/profile">
                        <button className="btn btn-dark">Profile</button>
                    </Link>
                </div>
                <div hidden={type === undefined}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page">
                        <button className="btn btn-dark">My Page</button>
                    </Link>
                </div>
                <div hidden={type === undefined}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/admin-page">
                        <button className="btn btn-dark">Admin Page</button>
                    </Link>
                </div>
                <div hidden={type === undefined}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to='/' onClick={() => logout()}>
                        <button className="btn btn-dark">Logout</button>
                    </Link>
                </div>
            </form>
        </nav>
    )
};
const dispatchToPropsMapper = dispatch => ({
    logout: () => actions.logout(dispatch)
});
const stateToPropsMapper = state => ({
    type: state.userType
});

const NavigationBar = connect(stateToPropsMapper, dispatchToPropsMapper)(NavigationBarComponent);
export default NavigationBar;