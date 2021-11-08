import React from 'react';
import "./investorMode.css"
import Topbar from "../../components/topbar/Topbar";
import "./investorMode.css"
import InFeed from "../../components/investorFeed/InFeed";
import InOptions from "../../components/investorOptions/InOptions";

function InvestorMode(props) {
    return (
        <>
            <Topbar mode="Idea Mode"/>
        <div>
            <div className="inverstorNotifi">
                <span class="topNotifi">Investor Mode has been turned on </span>
            </div>
            <div className="mainIndiv">
            <InFeed/>
            <InOptions/>
            </div>
        </div>
        </>
    );
}

export default InvestorMode;