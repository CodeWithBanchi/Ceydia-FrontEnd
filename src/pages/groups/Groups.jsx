import React from 'react';
import "./groups.css"
import Topbar from "../../components/topbar/Topbar";
import Sodebar from "../../components/sidebar/Sodebar";
import GroupFeed from "../../components/groupFeed/GroupFeed";

function Groups(props) {
    return (
        <>
            <Topbar/>
        <div className="groupMainDiv">
            <Sodebar/>
            <GroupFeed/>
        </div>
        </>
    );
}

export default Groups;