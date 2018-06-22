import React from 'react'

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.props.getProfile();
    }

    update() {
        var user = {
            username: this.props.username,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            dob: this.props.dob,
            city: this.props.city,
            phone: this.props.phone
        };
        this.props.update(user);
    }

    render() {
        return (
            <div>

                <form className="form-inline">
                    <label htmlFor="username">Username:</label>
                    &nbsp;
                    <input className="col-8"
                           id="username"
                           value={this.props.username}
                           onChange={(Event) => this.props.TextChanged('username', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="firstName">Firstname:</label>
                    &nbsp;
                    <input className="col-8"
                           id="firstName"
                           value={this.props.firstName}
                           onChange={(Event) => this.props.TextChanged('firstName', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="lastName">Enter Lastname:</label>
                    &nbsp;
                    <input className="col-8"
                           id="lastName"
                           value={this.props.lastName}
                           onChange={(Event) => this.props.TextChanged('lastName', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="username">Enter email:</label>
                    &nbsp;
                    <input className="col-8"
                           id="email"
                           value={this.props.email}
                           onChange={(Event) => this.props.TextChanged('email', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="dob">Enter Date of Birth:</label>
                    &nbsp;
                    <input className="col-8"
                           id="dob"
                           value={this.props.dob}
                           onChange={(Event) => this.props.TextChanged('dob', Event.target.value)}
                    />
                </form>
                <br/>
                <form className="form-inline">
                    <label htmlFor="address">Enter City:</label>
                    &nbsp;
                    <input className="col-8"
                           id="city"
                           value={this.props.city}
                           onChange={(Event) => this.props.TextChanged('city', Event.target.value)}
                    />
                </form>
                <form className="form-inline">
                    <label htmlFor="address">Enter Phone Number:</label>
                    &nbsp;
                    <input className="col-8"
                           id="city"
                           value={this.props.phone}
                           onChange={(Event) => this.props.TextChanged('phone', Event.target.value)}
                    />
                </form>
                <br/>
                <button onClick={() => this.update()}>Update</button>
            </div>
        )
    }
}
