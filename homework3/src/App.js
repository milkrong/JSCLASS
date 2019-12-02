import React, {Component} from 'react';
import { ControlButton } from './Components/controlButton.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      isStart: false
    };
  }

  handleCounter = () => {
    this.setState({
      isStart: !this.state.isStart
    });
    if(this.state.isStart){
      clearInterval(this.myInterval);
    } else {
      this.myInterval = setInterval(() => this.setState({
        timer: this.state.timer + 1
      }), 100);
    }
    
  }

  handleReset = () => {
    this.setState({
      timer: 0,
      isStart: false
    });
    clearInterval(this.myInterval);
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          { this.state.timer }
        </div>
        <div className="control-panel">
          <ControlButton name={this.state.isStart ? "STOP" : "START"} handleEvent={this.handleCounter}></ControlButton>
          <ControlButton name="RESET" handleEvent={this.handleReset}></ControlButton>
        </div>
      </div>
    )
  }
}

export default App;
