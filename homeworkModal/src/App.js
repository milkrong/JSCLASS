import React, { Component } from 'react';
import Modal from './modal';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({show:true});
  };

  closeModal = () => {
    this.setState({show:false});
  }

  closeByOutside = () => {
    this.setState({show:false});
  }

  render() {
    const content = <p>Pellentesque habitant morbi tristique senectus et netus et malesuada 
      fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, 
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo. 
      Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, 
      condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum</p>;
    return (
      <div className="App">
        <button 
          className="toggle-button"
          onClick={this.showModal}>
          Toggle
        </button>
        <Modal
          show={this.state.show}
          handleClose={this.closeModal}
          buttonText="Open"
          cancelButtonText="Go Back"
          content={content}
          width={400}
        />
      </div>
    );
  }
}

export default App;
