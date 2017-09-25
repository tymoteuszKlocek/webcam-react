import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
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
                </ul>
            </div>
        )
    }
}

export default Header;