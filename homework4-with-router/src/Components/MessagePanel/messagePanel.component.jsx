import React from 'react';
import './messagePanel.style.css';

export const MessagePanel = (props) => {
    return (
      <div className="error">
        <p>
          {props.message}
        </p>
      </div>
    )
  }