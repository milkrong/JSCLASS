import React from 'react';
import axios from 'axios';
import {UserList} from '../Components/UserList/userList.component';
import {Loading} from '../Components/Loading/loading.component';
import {withRouter} from 'react-router-dom';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            errMessage: "",
            loading: true,
            userData: {}
        }
    }
    
    handleClick =  (username) => {
        this.props.history.push(`/list/${username}`);
    }

    render() {
        let main = null;
        if (this.state.loading) {
            main = (
                <Loading/>
            )
        } else {
            main = (
                <UserList data={this.state.data} handleClick={this.handleClick} />
            )
        }
        return (
            <div className="user-list">
                {main}
            </div>
        )
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

export default withRouter(UserPage);