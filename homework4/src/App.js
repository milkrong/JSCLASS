import React from 'react';
import { UserList } from './Components/UserList/userList.component';
import { UserDetail } from './Components/UserDetail/userDetail.component';
import { Loading } from './Components/Loading/loading.component';
import { ErrorPanel } from './Components/ErrorPanel/errorPanel.component';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      errMessage: "",
      showDetail: false,
      loading: true,
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
    let main = null;
    let error = null
    if (this.state.loading) {
      main = (
        <div className="col-4 col-m-6 col-s-12">
          <Loading/>
        </div>
      )
    } else {
      main = (
        <div className="col-4 col-m-6 col-s-12">
          <UserList data={this.state.data} handleClick={this.handleClick} />
        </div>
      )
    }

    if (this.state.errMessage.length > 0) {
      error = (
        <div className="col-12">
          <ErrorPanel message={this.state.errMessage} />
        </div>
      )
    } else {
      error = (
        <p></p>
      )
    }
    return (
      <div className="App">
        {error}
        <div className="container justify-center">
          {main}
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
        this.setState({loading: false, data: res.data})
      })
      .catch(err => {
        this.setState({errMessage: "Network Error"})
      })
  }
}

export default App;
