import React from 'react';
import './controlButton.style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus, faMinus);

export const ControlButton = ({name, handleCounter}) => {
    return (
        <div className="control-button">
            <button onClick={handleCounter}>
                <FontAwesomeIcon className="button-icon" icon={name}></FontAwesomeIcon>
            </button>
        </div>
    );
}