import React from 'react';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="col-xs-10 col-sm-6 col-md-6">
            <form className="login-form">
                <h3>Please login or create new account</h3>
                <h5>username: "user"</h5>
                <h5>password: "pass"</h5>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input name="username" className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Password" required/>
                </div>
                <input type="submit" name="submit-login" className="btn btn-primary submit-login" value="Login" />
                <input type="button" name="inputregister" className="btn btn-default" value="Sign Up"/>
            </form>
        </div>
        )
    }
}


