import React from 'react'

const NavigationBar = ({
                   // first state then props check if order of them matters
               }) => {
    let selectElem
    let inputElem
    let inputElem1
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Music Con</a>
            <a className="btn btn-success" href="/login">Login</a>
            <a className="btn btn-success" href="/profile">Login</a>

        </nav>
    )
}
export default NavigationBar;