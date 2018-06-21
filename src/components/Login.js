import React from 'react'

export default class Login extends React.Component{
    // let inputElem;
    // let inputElem1;
    username='';
    password='';
    constructor(props){
        super(props);

    }
    login(username,password){
        this.props.login(username,password).then(response => {
            if(response.status===500){
                alert("Wrong username or password")
            }
            else{
                this.props.updateStateWithUserNameAndType(username,response.json().type);
                this.props.history.push('/profile')
            }
        })
    }
    render() {
        return (
            <div>

                <form className="form-inline">
                    <label htmlFor="username">Enter username:</label>
                    &nbsp;
                    <input className="col-8"
                           id="username"
                           onChange={(e) => this.username= e.target.value}
                           />
                </form>
                <br/>

                <form className="form-inline">
                    <label htmlFor="password">Enter Password:</label>
                    &nbsp;
                    <input className="col-8"
                           id="password"
                           onChange={(e) => this.password= e.target.value}
                           />
                </form>

                <button onClick={() => this.login(this.username, this.value)}
                >Login</button>
            </div>
        )
    }
}