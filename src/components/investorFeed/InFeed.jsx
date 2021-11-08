import React from 'react';
import "./inFeed.css"
import IdeaIn from "../ideaOnInvestorFeed/IdeaIn";

function InFeed(props) {
    return (
        <div className="indfeedDiv">
            <IdeaIn/>
            <IdeaIn/>
            <IdeaIn/>
            <IdeaIn/>
            <IdeaIn/>
        </div>
    );
}

export default InFeed;