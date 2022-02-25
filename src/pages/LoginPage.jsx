import React, { Component } from "react";
import Cookies from 'js-cookie';

export default class Login extends Component {

    render() {
        return (
            <div className="container">
                <form action="/" onSubmit={(event)=>{
                if(event.target.email.value === 'sanketmote01@gmail.com' && event.target.password.value === 'Sanket@123'){
                    Cookies.set("user", event.target.email.value, { expires: 1 / 24 });
                    window.location.href = '/';
                } else {
                    alert('Wrong credentials');
                }
            }}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
        );
    }
}