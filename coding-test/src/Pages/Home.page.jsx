import React from 'react';
import ProblemList from '../Components/ProblemList/problemList';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            questions : [],
            errMessage : ''
        }
    }

    handleClick = (problemId) => {
        this.props.history.push(`/${problemId}`);
    }

    render () {
        let page = null;
        if (this.state.errMessage.length > 0) {
            page = <div>{this.state.errMessage}</div>
        } else {
            page = (
                <ProblemList questions = {this.state.questions} handleClick = {this.handleClick} />
            )
        }
        return (
            <div className="home">
                {page}
            </div>
        )
    }

    componentDidMount () {
        axios.get("http://api.haochuan.io/oj/problems")
            .then(res => this.setState({questions: res.data.questions}))
            .catch(err => this.setState({errMessage: err.response.statusText}))
    }
}

export default withRouter(HomePage);