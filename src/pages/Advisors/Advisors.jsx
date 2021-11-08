import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sodebar from "../../components/sidebar/Sodebar";
import AdvisorFeed from "../../components/advisorFeed/AdvisorFeed";
import "./advisors.css"

function Advisors(props) {
    return (
        <>
            <Topbar/>
            <div className="adFeed">
            <Sodebar/>
            <AdvisorFeed/>

        </div>

        </>
    );
}

export default Advisors;