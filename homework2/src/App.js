import React, { Component } from 'react';
import { ControlButton } from './components/ControlButton/controlButton.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    };
  }

  handlePlus = () => {
    this.setState({counter: this.state.counter + 1})
  }

  handleMinus =  () => {
    this.setState({counter: this.state.counter > 0 ? this.state.counter - 1 : 0})
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          { this.state.counter }
        </div>
        <div className="control-panel">
          <ControlButton name="plus" handleCounter={this.handlePlus}></ControlButton>
          <ControlButton name="minus" handleCounter={this.handleMinus}></ControlButton>
        </div>
      </div>
    );
  }
}

export default App;
