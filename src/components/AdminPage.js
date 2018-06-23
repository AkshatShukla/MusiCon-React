import React from 'react'
import * as actions from '../actions'

export default class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.loadUsers();
    }

    render() {
        return (
            <div>
                <table style={{width:'100%'}} className="table">
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
                    </tr>
                    </thead>
                    {this.renderUsers()}
                </table>
            </div>
        )
    }

    renderUsers() {
        return this.props.users.map(user => (
            <tr>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.type}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.phone}</td>
            </tr>
        ))
    }

    loadUsers() {
        this.props.getUsers();
    }
}