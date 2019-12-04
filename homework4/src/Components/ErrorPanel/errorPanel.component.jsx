import React from 'react';
import './errorPanel.style.css';

export const ErrorPanel = (props) => {
    return (
      <div className="error">
        <p>
          {props.message}
        </p>
      </div>
    )
  }