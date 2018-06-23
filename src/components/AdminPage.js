import React from 'react'
import * as actions from '../actions'

export default class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userid: ''
        };
        this.loadUsers();
    }

    username;

    render() {
        return (
            <div>
                <table style={{width: '100%'}} className="table">
                    <thead>
                    <tr>
                        <th className="col">Username</th>
                        <th className="col">Password</th>
                        <th className="col">Firstname</th>
                        <th className="col">Lastname</th>
                        <th className="col">Type</th>
                        <th className="col">email</th>
                        <th className="col">city</th>
                        <th className="col">Phone</th>
                        <th></th>
                    </tr>
                    </thead>
                    {this.renderUsers()}
                </table>
            </div>
        )
    }

    renderUsers() {
        return this.props.users.map(user => {
            if (this.state.userid === user._id) {
                return (<tr className="table-active p-3">
                    <td><input value={this.props.username}
                               onChange={(Event) => this.username =  Event.target.value}>
                        {user.username}</input>
                    </td>
                    <td>{user.password}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.type}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button className="btn btn-dark" onClick={() => this.UpdateUser(user._id)}>Update</button>
                    </td>
                </tr>)
            }
            else {
                return (<tr>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.type}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button className="btn btn-dark" onClick={() => this.SelectUser(user._id)}>Edit</button>
                    </td>
                </tr>)
            }

        })
    }

    UpdateUser(id) {
        console.log('In update user', this.username);
    }

    SelectUser(id) {
        this.setState({userid: id});
    }

    loadUsers() {
        this.props.getUsers();
    }
}