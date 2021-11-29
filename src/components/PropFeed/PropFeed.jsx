import React from 'react';
import "./propFeed.css"
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import AssignmentIcon from '@material-ui/icons/Assignment';

function PropFeed(props) {
    return (
        <div className="propfeedContainer">
            <h3 className="yourprop">Your Proposals</h3>
            <div className="mainPropBox">
                <div className="propbox">
                    <div className="propItem">
                        <AssignmentIcon/>
                        <span className="propname">Software company proposal</span>
                    </div>
                </div>
                <div className="propbox">
                    <div className="propItem">
                        <AssignmentIcon/>
                        <span className="propname">e-business proposal</span>
                    </div>
                </div>
                <div className="propbox">
                    <div className="propItem">
                        <AssignmentIcon/>
                        <span className="propname">Cinnamon Export proposal</span>
                    </div>
                </div>

            </div>
            <h1 className="createNew">Create a new business proposal</h1>
            <div className="bpropContainer">
                <div className="oneItem">

                    <div className="itemInput">
                        <input placeholder="Proposal Topic"className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Abstract" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Introduction" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Problem Research" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Solution" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="SWOT analysis" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="PESTEL analysis" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Capital and cost management" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Stakeholder management" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Asset management" className="itemInput2"/>
                    </div>
                </div>
                <div className="oneItem">
                    <div className="itemInput">
                        <input placeholder="Conclution" className="itemInput2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropFeed;