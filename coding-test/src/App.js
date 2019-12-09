import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Home.page';
import ProblemPage from './Pages/Problem.page';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/:problemId" component={ProblemPage}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
