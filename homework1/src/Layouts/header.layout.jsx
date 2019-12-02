import React from 'react';
import './header.style.css';

export const Header = (props) => {
    return (
        <div className="header">
            <h1>
            { props.name }
            </h1>
        </div>
    );
}