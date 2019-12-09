import React from 'react';
import './userDetail.style.css';

export const UserDetail = ({userData}) => {
    return (
        <div className="user-detail">
            <h4>Detail</h4>
            <div className="detail-content">
            <ul>
                <li>Name: {userData.name}</li>
                <li>Location: { userData.location }</li>
                <li>Following: { userData.following }</li>
                <li>Follower: { userData.followers }</li>
            </ul>
            </div>
        </div>
    );
}