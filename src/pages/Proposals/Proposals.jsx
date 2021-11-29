import React from 'react';
import "./proposals.css"
import Topbar from "../../components/topbar/Topbar";
import Sodebar from "../../components/sidebar/Sodebar";
import PropFeed from "../../components/PropFeed/PropFeed";
function Proposals(props) {
    return (
        <>
            <Topbar/>
        <div className="proposalContainer">
            <Sodebar/>
            <PropFeed/>
        </div>
        </>
    );
}

export default Proposals;