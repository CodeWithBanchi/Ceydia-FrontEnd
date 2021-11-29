import React from 'react';
import "./discussComp.css"
import {Dropdown} from "react-bootstrap";
import {Label, PermMedia, Room} from "@material-ui/icons";
import AddBoxIcon from "@material-ui/icons/AddBox";

function DiscussComp(props) {
    return (
        <div className="share1">
            <div className="shareTop">
                <img className="shareImg" src="/files/prof.png" alt=""/>
                <div className="shareIdea">
                    <input placeholder="Discussion Topic "
                           className="shareinput" />
                </div>
            </div>
            <div className="shareDesc">
                <input placeholder="Description "
                       className="shareinput" />
            </div>

            <div className="dropContainer">

            </div>

            <hr className="shareHr" />

            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Add Photos/video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag People</span>
                    </div>

                </div>
                <button className="shareButton">Share</button>

            </div>
        </div>
    );
}

export default DiscussComp;