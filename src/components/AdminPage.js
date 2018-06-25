import React from 'react'

export default class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userid: ''
        };
        this.loadUsers();
    }

    username;
    firstName;
    lastName;
    type='Audiophile';
    email;
    city;
    phone;
    password;

    render() {
        return (
            <div>
                <table style={{width: '100%'}} className="table">
                    <thead>
                    <tr>
                        <th className="col" style={{width: '12%'}}>Username</th>
                        <th className="col" style={{width: '7%'}}>Password</th>
                        <th className="col" style={{width: '12%'}}>Firstname</th>
                        <th className="col" style={{width: '12%'}}>Lastname</th>
                        <th className="col" style={{width: '12%'}}>Type</th>
                        <th className="col" style={{width: '14%'}}>email</th>
                        <th className="col" style={{width: '12%'}}>city</th>
                        <th className="col" style={{width: '19%'}}>Phone</th>
                        <th style={{width: '10%'}}></th>
                    </tr>
                    </thead>
                    {this.renderUsers()}
                    <tr className="table-active p-3">
                        <td><input placeholder='Username' style={{width: '100%'}}
                                   onChange={(Event) => this.username = Event.target.value}/>
                        </td>
                        <td><input placeholder='password' style={{width: '100%'}}
                                   onChange={(Event) => this.password = Event.target.value}/></td>
                        <td><input placeholder='firstName' style={{width: '100%'}}
                                   onChange={(Event) => this.firstName = Event.target.value}/></td>
                        <td><input placeholder='lastName' style={{width: '100%'}}
                                   onChange={(Event) => this.lastName = Event.target.value}/></td>
                        <td>
                            <select value={this.type}
                                    onChange={(Event) => this.type = Event.target.value}>
                                <option value="Audiophile">Audiophile</option>
                                <option value="Listener">Listener</option>
                                <option value="Admin">Admin</option>
                                <option value="Concert Manager">Concert Manager</option>
                            </select></td>
                        <td><input placeholder='email'style={{width: '100%'}}
                                   onChange={(Event) => this.email = Event.target.value}/></td>
                        <td><input placeholder='city' style={{width: '100%'}}
                                   onChange={(Event) => this.city = Event.target.value}/></td>
                        <td><input placeholder='phone' style={{width: '100%'}}
                                   onChange={(Event) => this.phone = Event.target.value}/></td>
                        <td>
                            <button type='btn' className="btn btn-dark" type='btn' onClick={() => this.UpdateUser()}>Create</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    renderUsers() {
        return this.props.users.map(user => {
            if (this.state.userid === user._id) {
                this.username = user.username;
                return (<tr className="table-active p-3">
                    <td><input placeholder={this.username} style={{width: '100%'}}
                               onChange={(Event) => this.username = Event.target.value}/>
                        {user.username}
                    </td>
                    <td> </td>
                    <td><input placeholder={this.firstName} style={{width: '100%'}}
                               onChange={(Event) => this.firstName = Event.target.value}/>{user.firstName}</td>
                    <td><input placeholder={this.lastName} style={{width: '100%'}}
                               onChange={(Event) => this.lastName = Event.target.value}/>{user.lastName}</td>
                    <td>
                        <select value={this.type}
                                onChange={(Event) => this.type = Event.target.value}>
                            <option value="Audiophile">Audiophile</option>
                            <option value="Listener">Listener</option>
                            <option value="Admin">Admin</option>
                            <option value="Concert Manager">Concert Manager</option>
                        </select>
                        {user.type}</td>
                    <td><input placeholder={this.email} style={{width: '100%'}}
                               onChange={(Event) => this.email = Event.target.value}/>{user.email}</td>
                    <td><input placeholder={this.city} style={{width: '100%'}}
                               onChange={(Event) => this.city = Event.target.value}/>{user.city}</td>
                    <td><input placeholder={this.phone} style={{width: '100%'}}
                               onChange={(Event) => this.phone = Event.target.value}/>{user.phone}</td>
                    <td>
                        <button type='btn' className="btn btn-dark" type='btn' onClick={() => this.UpdateUser(user._id)}>Update</button>
                    </td>
                </tr>)
            }
            else {
                return (<tr>
                    <td>{user.username}</td>
                    <td>{}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.type}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button type='btn' className="btn btn-dark" type='btn' onClick={() => this.SelectUser(user._id)}>Edit</button>
                        <button type='btn' className="btn btn-danger" type='btn' onClick={() => this.props.deleteUser(user._id)}>Delete</button>
                    </td>
                </tr>)
            }

        })
    }
    deleteUser(id){
        this.props.deleteUser(id);
        this.username='';
        this.firstName='';
        this.lastName='';
        this.type='Audiophile';
        this.email='';
        this.city='';
        this.phone='';
        this.password='';
    }
    UpdateUser(id) {
        var user = {
            _id: id,
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            type: this.type,
            email: this.email,
            city: this.city,
            phone: this.phone,
            password: this.password
        };
        this.props.updateUser(user);
        this.SelectUser('');
    }

    SelectUser(id) {
        this.setState({userid: id});
    }

    loadUsers() {
        this.props.getUsers();
    }
}