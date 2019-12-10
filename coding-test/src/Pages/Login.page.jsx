import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUserInput = e => {
        this.setState({username: e.target.value});
    }

    handlePassInput = e => {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div className="login">
                <div className="login-form-container">
                    <div className="input-form">
                        <input type="text" name="username" id="1" placeholder="username" onChange={this.handleUserInput} />
                    </div>
                    <div className="input-form">
                        <input type="password" name="password" id="2" placeholder="password" onChange={this.handlePassInput} />
                    </div>
                    <button onClick={() => this.props.loginHandler(this.state.username, this.state.password)}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginPage;