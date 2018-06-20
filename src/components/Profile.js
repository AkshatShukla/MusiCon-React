import React from 'react'

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        var inputElemusername,
            inputElemFirstName,
            inputElemLastName,
            inputElemEmail,
            inputElemDOB,
            inputElemAddress;
    }

    render() {
        return (
            <div>

                <form className="form-inline">
                    <label htmlFor="username">Username:</label>
                    &nbsp;
                    <input className="col-8"
                           id="username"
                           onChange={(Event) => this.props.TextChanged('username', Event.target.value)}
                           />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="firstName">Firstname:</label>
                    &nbsp;
                    <input className="col-8"
                           id="firstName"
                           onChange={(Event) => this.props.TextChanged('firstName', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="lastName">Enter Lastname:</label>
                    &nbsp;
                    <input className="col-8"
                           id="lastName"
                           onChange={(Event) => this.props.TextChanged('lastName', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="username">Enter email:</label>
                    &nbsp;
                    <input className="col-8"
                           id="email"
                           onChange={(Event) => this.props.TextChanged('email', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="dob">Enter Date of Birth:</label>
                    &nbsp;
                    <input className="col-8"
                           id="dob"
                           onChange={(Event) => this.props.TextChanged('dob', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="address">Enter Address:</label>
                    &nbsp;
                    <input className="col-8"
                           id="address"
                           onChange={(Event) => this.props.TextChanged('address', Event.target.value)}
                    />
                </form>
                <br/>
                <button onClick={() => this.props.update()}>Update</button>
            </div>
        )
    }
}
