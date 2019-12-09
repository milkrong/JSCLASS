import React from 'react';

const ProblemCard = ({id, title, content, handleClick}) => {
    return (
        <div className="problem-card">
            {title}
            {content}
            <button onClick={() => handleClick(id)}>Answer</button>
        </div>
    )
}

export default ProblemCard;