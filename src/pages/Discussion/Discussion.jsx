import React from 'react';
import "./discussion.css"
import Topbar from "../../components/topbar/Topbar";
import Sodebar from "../../components/sidebar/Sodebar";
import DiscussComp from "../../components/DiscussComp/DiscussComp";

function Discussion(props) {
    return (
        <>
            <Topbar/>
        <div className="discontainer">
            <div className="Sidebar">
                <Sodebar/>
            </div>
            <div className="rightside">
                <div className="distopic">
                    <h1 className="fontdis">Start a new discussion or ask question here</h1>
                    <DiscussComp/>
                </div>
            </div>


        </div>
        </>
    );
}

export default Discussion;