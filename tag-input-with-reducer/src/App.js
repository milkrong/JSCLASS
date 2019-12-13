import React from 'react';
import { connect } from 'react-redux';
import { addTag } from './redux/tag.actions';
import TagList from './tagList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({name: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const {name} = this.state;
    this.props.addTag(name)
    this.setState({name:''});
  }

  render () {
    return (
      <div className="app">
        <h3>Creat Your Tag</h3>
        <div className="tag-input">
          <TagList />
          <form onSubmit={this.handleSubmit} className="input-form">
            <input type="text" value={this.state.name} onChange={this.handleChange} className="input"/>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTag: name => dispatch(addTag(name))
  };
}

export default connect(null, mapDispatchToProps)(App);
