import React from 'react';
import { UserItem } from '../UserItem/userItem.component';

import './userList.style.css';

export const UserList = ({data, handleClick}) => {
    return (
        <div className="user-list">
            <h4>User List</h4>
            <div className="scroll-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((user, index) => {
                        return <UserItem 
                                id={user.id} 
                                login={user.login} 
                                avatar_url={user.avatar_url} 
                                url = {user.url}
                                handleClick={handleClick} 
                                key={user.id}/>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}