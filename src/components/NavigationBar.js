import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../actions";

const NavigationBarComponent = ({type, logout, loggedIn}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/">
                <button type='btn' className="btn btn-outline-light"><h1>MusiCon</h1></button>
            </Link>
            <form className="form-inline">
                <div hidden={ loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/login">
                        <button type='btn' className="btn btn-dark">Login</button>
                    </Link>
                </div>
                <div hidden={ loggedIn }>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/registration">
                        <button type='btn' className="btn btn-dark">Registration</button>
                    </Link>
                </div>
                <div hidden={type === undefined || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/profile">
                        <button type='btn' className="btn btn-dark">Profile</button>
                    </Link>
                </div>
                <div hidden={type !== 'Listener' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page">
                        <button type='btn' className="btn btn-dark">My Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Listener' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/explore">
                        <button type='btn' className="btn btn-dark">Explore</button>
                    </Link>
                </div>
                <div hidden={type !== 'Audiophile'|| !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page-audiophile">
                        <button type='btn' className="btn btn-dark">Audiophile Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Admin' }>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/all-liked-album">
                        <button type='btn' className="btn btn-dark">All Liked Album</button>
                    </Link>
                </div>
                <div hidden={type !== 'Admin'}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/all-recommended-album">
                        <button type='btn' className="btn btn-dark">All Recommended Album</button>
                    </Link>
                </div>
                <div hidden={type !== 'Admin'}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/all-recommended-track">
                        <button type='btn' className="btn btn-dark">All Recommended Track</button>
                    </Link>
                </div>
                <div hidden={type !== 'Admin'}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/all-liked-track">
                        <button type='btn' className="btn btn-dark">All Liked Track</button>
                    </Link>
                </div>
                <div hidden={type !== 'Admin'}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/admin-page">
                        <button type='btn' className="btn btn-dark">Admin Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Concert Manager'|| !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page-manager">
                        <button type='btn' className="btn btn-dark">Concert Manager Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Listener'|| !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/playlist">
                        <button type='btn' className="btn btn-dark">PlayList</button>
                    </Link>
                </div>
                <div hidden={!loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to='/' onClick={() => logout()}>
                        <button type='btn' className="btn btn-dark">Logout</button>
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
    type: state.userType,
    loggedIn: state.loggedIn
});

const NavigationBar = connect(stateToPropsMapper, dispatchToPropsMapper)(NavigationBarComponent);
export default NavigationBar;