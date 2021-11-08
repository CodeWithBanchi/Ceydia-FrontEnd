import React from 'react';
import "./advisorFeed.css"
import AdvisorsComp from "../AdvisorsComp/AdvisorsComp";

function AdvisorFeed(props) {
    return (
        <div className="advisorContainer">
          <AdvisorsComp/>
            <AdvisorsComp/>
            <AdvisorsComp/>
            <AdvisorsComp/>
            <AdvisorsComp/>

        </div>
    );
}

export default AdvisorFeed;