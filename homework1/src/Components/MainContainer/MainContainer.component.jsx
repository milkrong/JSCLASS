import React from 'react';
import { Icon } from '../Icon/icon.component';
import './MainContainer.style.css';

export const MainContainer = () => {
    return (
        <div className="main-container">
            <table>
                <tr>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                </tr>
                <tr>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                </tr>
                <tr>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                </tr>
                <tr>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                    <td><Icon></Icon></td>
                </tr>
            </table>
        </div>
    );
}