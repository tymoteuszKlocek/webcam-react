import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { setPosition, getPosition } from '../actions/positionActions';

class Navigation extends React.Component {

    componentWillMount() {
        this.props.setPosition();
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs ">
                    <li role="presentation">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/scanner">Scanner</Link>
                    </li>
                    <li role="presentation">
                        <Link to={"/map/" + this.props.position.position}>Map</Link>
                    </li>
                    <li role="presentation" onClick={() => this.logout()}>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.position,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPosition: () => {
            dispatch(setPosition());
        },
        getPosition: () => {
            dispatch(getPosition());
        },
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);