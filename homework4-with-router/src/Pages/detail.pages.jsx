import React from 'react';
import {UserDetail} from '../Components/UserDetail/userDetail.component';
import {Loading} from '../Components/Loading/loading.component';
import axios from 'axios';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail: null
        }
    }

    render() {
        let main = null;
        main = this.state.userDetail ? (
            <div className="details">
                <UserDetail userData = {this.state.userDetail} />
            </div>
        ) : (
            <Loading/>
        )
        return (
            <div className="details">
                {main}
            </div>
        )
    }

    componentDidMount() {
        axios({method: "get", url:`https://api.github.com/users/${this.props.match.params.userId}`})
          .then(res => {
            this.setState({userDetail: res.data})
          })
          .catch(err => {
            console.log(err);
          })
    }
}

export default DetailPage;