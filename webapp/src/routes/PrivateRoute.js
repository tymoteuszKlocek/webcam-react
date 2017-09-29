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
    //TODO can I use this like that?
    let state = store.getState();

    if ((!!state.session.token && state.session.token !== '') || sessionStorage.getItem('token') !== '') {
        console.log('auth ok');
        return true;
    } else {
        console.log('no Authorisation!');
        return false;
    }
}

export default PrivateRoute;