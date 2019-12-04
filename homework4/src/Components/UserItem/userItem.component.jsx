import React from 'react';
import './userItem.style.css';

export const UserItem = ({id, login, avatar_url, url, handleClick}) => {
    return (   
        <tr className="clickable" onClick={()=>{handleClick(url)} }>
            <td>{ id } </td>
            <td>{ login }</td>
            <td>
                <img src={ avatar_url } className="avatar" alt=""/>
            </td>
        </tr>
    )
}