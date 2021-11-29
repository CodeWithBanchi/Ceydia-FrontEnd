import React from 'react';
import "./Login.css";
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Ceydia</h3>
                    <span className="loginDesc">
                        Make your dream idea  real
                    </span>
                </div>
                <div className="loginright">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput"/>
                        <input type="password" placeholder="Password" className="loginInput"/>
                        <div className="registerButton">
                            <div className="textcontatinr">
                                <Link className="buttntext" to="home"> Login </Link>
                            </div>
                        </div>
                        <span className="loginForgot">Forgot Password </span>
                        <div className="registerButton">
                           <div className="textcontatinr">
                               <Link className="buttntext" to="/register"> Register </Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

