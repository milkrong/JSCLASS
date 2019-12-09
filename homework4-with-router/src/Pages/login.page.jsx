import React from 'react';
import './login.style.css';

class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.states = {
            inputUser: '',
            inputPass: ''
        }
    }

    handleUser = e => {
        this.setState({inputUser: e.target.value})
    }

    handlePass = e => {
        this.setState({inputPass: e.target.value})
    }

    render() {
        return (
            <div className="login">
                <div className="login-form-container">
                    <div className="input-form">
                        <input type="text" name="username" id="1" placeholder="username" onChange={this.handleUser} />
                    </div>
                    <div className="input-form">
                        <input type="password" name="password" id="2" placeholder="password" onChange={this.handlePass} />
                    </div>
                    <button onClick={() => this.props.loginHandler(this.state.inputUser, this.state.inputPass)}>Login</button>
                </div>
            </div>
        )
    }
} 

export default LoginPage;