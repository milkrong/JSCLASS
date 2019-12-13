import React from 'react';
import { ReactComponent as Close } from './assets/cancel.svg';
import './tag.scss';

const Tag = ({name, handleClick, id}) => {
    return (
        <div className="tag">
            {name}
            <Close className="icon" onClick={() => handleClick(id)} />
        </div>
    )
}

export default Tag;