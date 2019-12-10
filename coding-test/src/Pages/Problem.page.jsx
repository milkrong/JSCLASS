import React from 'react';
import axios from 'axios';

class ProblemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            errMessage: '',
            answer: false,
            result: ''
        };
    }

    handleInput = e => {
        this.setState({answer: e.target.value === "true"});
    }

    handleSubmit = () => {
        axios.post(`http://api.haochuan.io/oj/problems/${this.props.match.params.problemId}/solution`,
            {
                answer: this.state.answer
            },
            {
                headers: {
                  "Content-Type": "application/json"
                }
            }
        )
            .then(res => {
                if (res.data.pass) {
                    this.setState({result: 'Your Answer is Right'});
                } else {
                    this.setState({result: 'Please Check Your Answer'});
                }
            })
            .catch(err => this.setState({errMessage: err.response.statusText}))
    }

    render () {
        let page = null;
        if (this.state.errMessage.length > 0) {
            page = <h1>{this.state.errMessage}</h1>
        } else {
            page = (
                <div>
                    <h2>
                        {this.state.question ? this.state.question.title : "Tiltle"}
                    </h2>
                    <p>
                        {this.state.question ? this.state.question.content: "Content"}
                    </p>
                    <input type="text" placeholder="Type your answer" onChange={this.handleInput}/>
                    <button onClick={this.handleSubmit} >Submit Answer</button>
                    <span>{this.state.result}</span>
                </div>
            )
        }
        return (
            <div className="problem">
                {page}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://api.haochuan.io/oj/problems/${this.props.match.params.problemId}`)
            .then(res => this.setState({question: res.data.question}))
            .catch(err => this.setState({errMessage: err.response.statusText}))
    }
}

export default ProblemPage;