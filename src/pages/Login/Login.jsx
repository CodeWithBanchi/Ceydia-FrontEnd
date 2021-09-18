import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MoodFix</h3>
                    <span className="loginDesc">
                        Make your dream idea  real
                    </span>
                </div>
                <div className="loginright">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput"/>
                        <input type="password" placeholder="Password" className="loginInput"/>
                        <button className="loginButton">Log In </button>
                        <span className="loginForgot">Forgot Password </span>
                        <button className="registerButton">Create an account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

