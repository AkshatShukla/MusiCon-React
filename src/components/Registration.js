import React from 'react'

const Registration = ({userType, textChanged, selectUserType, registerManager, registerUser}) => {
    let inputElem;
    let inputElem1;
    let inputElem2;
    let inputElem3;
    let selectElement;

    const register = () => {
        if (userType === 'Concert Manager') {
            registerManager(inputElem.value, inputElem1.value, inputElem2.value, selectElement.value, inputElem3.value)
        }
        else
            registerUser(inputElem.value, inputElem1.value, inputElem2.value, selectElement.value);
    };

    return (
        <div className="container">
            <div className="cardRegistration card-container">
                <form className="form-signin form-inline row m-2">
                    <label htmlFor="username form-label"  className="col-3 ">Enter Username:</label>
                    <input className="col-8"
                           id="username"
                           onChange={() => textChanged('username', inputElem.value)}
                           ref={node => inputElem = node}/>
                </form>
                <form className="form-signin form-inline m-2">
                    <label htmlFor="password"  className="col-3 ">Enter Password:</label>

                    <input className="col-8"
                           id="password"
                           onChange={() => textChanged('password', inputElem1.value)}
                           ref={node => inputElem1 = node}/>
                </form>
                <form className="form-signin form-inline m-2">
                    <label htmlFor="verifyPassword"  className="col-3 ">Verify Password:</label>

                    <input className="col-8"
                           id="verifyPassword"
                           onChange={() => textChanged('verifyPassword', inputElem2.value)}
                           ref={node => inputElem2 = node}/>
                </form>
                <form className="form-signin form-inline m-2">
                    <label className="col-3 ">Enter User Type:</label>

                    <select onChange={() => selectUserType(selectElement.value)}
                            ref={node => selectElement = node}>
                        <option>Listener</option>
                        <option>Audiophile</option>
                        <option>Concert Manager</option>
                    </select>
                </form>

                {userType === 'Concert Manager' && <div>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="eventLocation" className='col-3'>Enter Event Location:</label>
                        &nbsp;
                        <input className="col-8"
                               id="eventLocation"
                               onChange={() => textChanged('eventLocation', inputElem3.value)}
                               ref={node => inputElem3 = node}/>
                    </form>
                </div>}

                <form className="form-signin form-inline m-2">

                    <button onClick={() => {register()}} className='btn btn-primary btn-block col-12'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Registration;