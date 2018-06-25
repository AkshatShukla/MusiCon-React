import React from 'react'
import '../css/login.css';

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
            phone: this.props.phone,
            description: this.props.description
        };
        this.props.update(user);
    }

    render() {
        return (
            <div className="container">
                <div className="cardRegistration card-container">
                    <form className="form-signin form-inline row m-2">
                        <label htmlFor="username" className=" form-label col-2 ">Username:</label>
                        <input className="col-9 form-control"
                               id="username"
                               value={this.props.username}
                               onChange={(Event) => this.props.TextChanged('username', Event.target.value)}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="firstName" className="form-label col-2">Firstname:</label>
                        <input className="col-9 form-control"
                               id="firstName"
                               value={this.props.firstName}
                               onChange={(Event) => this.props.TextChanged('firstName', Event.target.value)}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="lastName" className="form-label col-2">Lastname:</label>
                        <input className="col-9 form-control"
                               id="lastName"
                               value={this.props.lastName}
                               onChange={(Event) => this.props.TextChanged('lastName', Event.target.value)}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="email" className="form-label col-2">Email:</label>
                        <input className="col-9 form-control"
                               id="email"
                               value={this.props.email}
                               onChange={(Event) => this.props.TextChanged('email', Event.target.value)}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="dob" className="form-label col-2">Date of Birth:</label>
                        <input className="col-9 form-control"
                               id="dob"
                               type='date'
                               value={this.props.dob.substr(0,10)}
                               onChange={(Event) => this.props.TextChanged('dob', Event.target.value)}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="city" className="form-label col-2">City:</label>
                        <input className="col-9 form-control"
                               id="city"
                               value={this.props.city}
                               onChange={(Event) => this.props.TextChanged('city', Event.target.value)}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="phone" className="form-label col-2">Phone Number:</label>
                        <input className="col-9 form-control"
                               id="phone"
                               value={this.props.phone}
                               onChange={(Event) => this.props.TextChanged('phone', Event.target.value)}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="description" className="form-label col-2">Description:</label>
                        <input className="col-9 form-control"
                               id="description"
                               value={this.props.description}
                               onChange={(Event) => this.props.TextChanged('description', Event.target.value)}/>
                    </form>
                    <button onClick={() => this.update()}
                            className='btn btn-success'>Update</button>
                </div>
            </div>
        )
    }
}
