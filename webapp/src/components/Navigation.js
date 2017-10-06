//@flow
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { setPosition, getPosition } from '../actions/positionActions';

type State = {
    position: string
}

type Props = {
    setPosition: () => void,
    logout: () => void,
    position: string,
}

class Navigation extends React.Component<Props, {}> {

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
                        <Link to={'/map/' + this.props.position}>Map</Link>
                    </li>
                    <li role="presentation" onClick={() => this.logout()}>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        position: state.position,
    };
};
//TODO Flow
const mapDispatchToProps = (dispatch: () => void) => {
    return {
        setPosition: () => {
            dispatch(setPosition());
        },
        logout: () => {
            dispatch(logout());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);