import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store/store';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        requireAuth() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)

function requireAuth() {
    let state = store.getState();

    if ((!!state.session.token && state.session.token !== '') || sessionStorage.getItem('token') !== '') {
        return true;
    } else {
        return false;
    }
}

export default PrivateRoute;