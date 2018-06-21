import React from 'react'

const NavigationBar = ({
                   // first state then props check if order of them matters
               }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">MusiCon</a>
            <a className="btn btn-success" href="/login">Login</a>
            <a className="btn btn-success" href="/registration">Registration</a>
            <a className="btn btn-success" href="/profile">Profile</a>

        </nav>
    )
}
export default NavigationBar;