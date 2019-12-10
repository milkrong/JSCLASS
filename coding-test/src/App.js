import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Homepage from './Pages/Home.page';
import ProblemPage from './Pages/Problem.page';
import LoginPage from './Pages/Login.page';
import axios from 'axios';
import './App.css';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticate: false
    }
  }

  loginHandler = (username, password) => {
    let body = {
        username: username,
        password: password
    }

    console.log(body)

    axios.post('http://api.haochuan.io/login', body)
        .then(res => {
          this.setState({authenticate: true});
          this.props.history.push("/")
        })
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Switch>
            <PrivateRoute exact authenticated={this.state.authenticate} path="/" component={Homepage}/>
            <Route  
                path="/login"
                render={() => (
                  <LoginPage loginHandler={this.loginHandler} />
                )}  />
            <PrivateRoute authenticated={this.state.authenticate} path="/:problemId" component={ProblemPage}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App);
