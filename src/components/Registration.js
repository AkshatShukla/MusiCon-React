import React from 'react'

const Registration = ({userType, textChanged, selectUserType, registerManager, registerUser}) => {
    let inputElem;
    let inputElem1;
    let inputElem2;
    let inputElem3;
    let selectElement;

    const register = () => {
        if(userType === 'Concert Manager'){
            registerManager(inputElem.value, inputElem1.value, inputElem2.value, selectElement.value, inputElem3.value)
        }
        else
            registerUser(inputElem.value, inputElem1.value, inputElem2.value, selectElement.value);
    };

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
                <label htmlFor="password">Enter Password:</label>
                &nbsp;
                <input className="col-8"
                       id="password"
                       onChange={() => textChanged('password', inputElem1.value)}
                       ref={node => inputElem1 = node}/>
            </form>
            <br/>

            <form className="form-inline">
                <label htmlFor="verifyPassword">Verify Password:</label>
                &nbsp;
                <input className="col-8"
                       id="verifyPassword"
                       onChange={() => textChanged('verifyPassword', inputElem2.value)}
                       ref={node => inputElem2 = node}/>
            </form>

            <select onChange={() => selectUserType(selectElement.value)}
                    ref={node => selectElement = node}>
                <option>Listener</option>
                <option>Audiophile</option>
                <option>Concert Manager</option>
            </select>
            <br/>

            {userType === 'Concert Manager' && <div>
                <form className="form-inline">
                    <label htmlFor="eventLocation">Enter Event Location:</label>
                    &nbsp;
                    <input className="col-8"
                           id="eventLocation"
                           onChange={() => textChanged('eventLocation', inputElem3.value)}
                           ref={node => inputElem3 = node}/>
                </form>
            </div>}


            <button onClick={() => {register()}}>Register</button>
        </div>
    )
}

export default Registration;