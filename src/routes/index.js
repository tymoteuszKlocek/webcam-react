import React               from 'react';  
import { Route, Redirect } from 'react-router-dom'  
import App                 from '../containers/app';  
import Navigation          from '../views/shared/nav';  
import RegistrationsNew    from '../views/registrations/new';  
import SessionsNew         from '../views/sessions/new';  
import Chats               from '../views/chats';  
import * as Actions          from '../actions/sessionActions';

export default function configRoutes() {  
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={App} />
      <Route path="/sign_up" component={RegistrationsNew} />
      <Route path="/sign_in" component={SessionsNew} />
      <AuthenticatedRoute path="/chats" component={Chats} />
    </div>
  );
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    localStorage.getItem('phoenixAuthToken') ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/sign_in',
        state: { from: props.location }
      }}/>
    )
  )}/>
)