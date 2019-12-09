import React from 'react';
import ProblemCard from '../ProblemCard/problemCard';

class ProblemList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render () {
        return (
            <div className="q-list">
                {this.props.questions.map((question) => {
                    return <ProblemCard {...question} handleClick={this.props.handleClick} key={question.id} />
                })}
            </div>
        ) 
    }
}

export default ProblemList;