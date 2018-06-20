import React from 'react'

const Login = ({textChanged, login}) => {
    let inputElem;
    let inputElem1;
    return (
        <div>

            <form className="form-inline">
                <label htmlFor="username">Enter username:</label>
                &nbsp;
                <input className="col-8"
                       id="username"
                       onChange={() => textChanged('username', inputElem.value)}
                       ref={node => inputElem = node}/>
            </form>
            <br/>

            <form className="form-inline">
                <label htmlFor="password">Enter username:</label>
                &nbsp;
                <input className="col-8"
                       id="password"
                       onChange={() => textChanged('password', inputElem1.value)}
                       ref={node => inputElem1 = node}/>
            </form>

            <button onClick={() => login(inputElem.value, inputElem1.value)}>Login</button>
        </div>
    )
}
export default Login;