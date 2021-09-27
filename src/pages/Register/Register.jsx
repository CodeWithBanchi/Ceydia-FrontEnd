import React from 'react';
import "./Register.css";

const Register = () => {
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
                        <input placeholder="First Name" className="loginInput"/>
                        <input placeholder="Last Name" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input type="password" placeholder="Password" className="loginInput"/>
                        <input type="password" placeholder="Confirm Password" className="loginInput"/>
                        <button className="loginButton"> Register </button>
                        <button className="registerButton">Log in </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

