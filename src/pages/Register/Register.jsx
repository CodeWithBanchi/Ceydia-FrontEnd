import React from 'react';
import "./register.css";
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className="loginR">
            <div className="loginwrapperR">
                <div className="loginLeftR">
                    <h3 className="loginLogoR">Ceydia</h3>
                    <span className="loginDescR">
                        Amazing people of Sri Lanka have amazing ideas. Ceydia is the platform for the amazing Sri Lankans to share their amazing Business ideas.
                    </span>
                </div>
                <div className="loginrightR">
                    <h1 className="reNow">Register Now</h1>
                    <div className="loginBoxR">
                        <input placeholder="First Name" className="loginInput"/>
                        <input placeholder="Last Name" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <input type="date" placeholder="Birthday" className="loginInput"/>
                        <input placeholder="Experience" className="loginInput"/>
                        <div className="registerButtonR">
                            <div className="textcontatinrR">
                                <Link className="buttntextR" to="home"> Register </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

