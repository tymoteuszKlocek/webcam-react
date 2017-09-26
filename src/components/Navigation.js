import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li role="presentation">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/scanner">Scanner</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/map">Map</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;