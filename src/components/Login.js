import React from 'react'
import '../css/login.css'

export default class Login extends React.Component {
    username = '';
    password = '';

    login(username, password) {
        this.props.login(username, password).then(response => {
            if (response.status === 500) {
                alert("Wrong username or password")
            }
            else {
                response.json()
                    .then(r2 => {
                        this.props.updateStateWithUserNameAndType(username, r2.type);
                        this.props.getPlaylist();
                        this.props.getEvents();
                    })
                    .then(() => {
                        if (this.props.userType === 'Audiophile') {
                            this.props.history.push('/my-page-audiophile');
                        } else if (this.props.userType === 'Listener') {
                            this.props.history.push('/my-page');
                        } else if (this.props.userType === 'Concert Manager') {
                            this.props.history.push('/my-page-manager');
                        } else if (this.props.userType === 'Admin') {
                            this.props.history.push('/admin-page')
                        }
                    });

            }
        })
    }

    render() {
        return (
            <div className="container ">
                <div className="card card-container">
                    {/*<p id="profile-name" className="profile-name-card"></p>*/}
                    <form className="form-signin">
                        <input id="inputEmail" className="form-control" placeholder="Username"
                               required autoFocus
                               onChange={(e) => this.username = e.target.value}/>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required
                               onChange={(e) => this.password = e.target.value}/>
                    </form>
                        <button type='btn' className="btn btn-lg btn-primary btn-block btn-signin"
                                onClick={() => this.login(this.username, this.password)}>
                            Sign in
                        </button>

                </div>
            </div>
        )
    }
}