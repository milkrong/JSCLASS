import React from 'react';
import './App.css';
import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import {MessagePanel} from './Components/MessagePanel/messagePanel.component';
import HomePage from './Pages/home.pages';
import UserPage from './Pages/user.page';
import LoginPage from './Pages/login.page';
import DetailPage from './Pages/detail.pages';

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
      authenticated: false,
      message: null
    }
  }

  loginHandler = (username, password) => {
    if (username === "username" && password === "password"){
      this.setState({ authenticated: true });
      this.props.history.push("/list");
      this.setState({message: "Logged In SuccessFully"});
    } else {
      this.setState({message: "Invalid Input"});
    }
  };

  render () {
    return (
      <div className="app">
        <div className="col-3">
          <div className="nav-bar">
            <Link to="/" className="link">Home</Link>
            <Link to="/list" className="link">User List</Link>
          </div>
        </div>
        <div className="col-7">
          <div className="main-container">
            <MessagePanel message={this.state.message} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <PrivateRoute
                exact
                path="/list"
                authenticated={this.state.authenticated}
                component={UserPage}
              />
              <PrivateRoute
                path="/list/:userId"
                authenticated={this.state.authenticated}
                component={DetailPage}
              />
              <Route 
                exact 
                path="/login"
                render={() => (
                  <LoginPage loginHandler={this.loginHandler} />
                )}  />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(App);
