import React from 'react';
import { UserList } from './Components/UserList/userList.component';
import { UserDetail } from './Components/UserDetail/userDetail.component';
import axios from 'axios';
import './App.css';

const ErrorNotice = (props) => {
  return (
    <div className="error">
      <p>
        {props.errMessage}
      </p>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      errMessage: "",
      showDetail: false,
      userData: {}
    }
  }

  handleClick =  (url) => {
    this.setState({showDetail: true});
    axios({method: "get", url: url})
      .then(res => {
        this.setState({userData: res.data})
      })
      .catch(err => {
        this.setState({errMessage: err})
      })
  }

  render () {
    
    return (
      <div className="App">
        <ErrorNotice 
          className={this.state.errMessage.length > 0 ? "visible" : "invisible"} 
          errMessage={this.state.errMessage}
        />
        <div className="container justify-center">
          <div className="col-4 col-m-6 col-s-12">
            <UserList data={this.state.data} handleClick={this.handleClick} />
          </div>
          <div className="col-8 col-m-6 col-s-12">
            <UserDetail show={this.state.showDetail} userData={this.state.userData} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios({method: "get", url:"https://api.github.com/users?per_page=100"})
      .then(res => {
        this.setState({data: res.data})
      })
      .catch(err => {
        this.setState({errMessage: err})
      })
  }
}

export default App;
