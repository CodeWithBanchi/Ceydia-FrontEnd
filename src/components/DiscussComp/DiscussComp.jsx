import React from 'react';
import "./discussComp.css"
import {Dropdown} from "react-bootstrap";
import {Label, PermMedia, Room} from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";


function DiscussComp(props) {
    return (
        <div>
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
           {/*-------------------------------------------------------------------*/}
    <div className="share2">
        <div className="shareTop">
            <img className="shareImg" src="/files/img.png" alt=""/>
            <div>
                <h1 className="discstopic">
                    Lets discuss why womens entrepreneurship is low in Sri Lanka..!
                </h1>

            </div>

        </div>
        <h4 className="disDesc">
            According to an Asian Development Bank study (1999), problems faced by women entrepreneurs in Nepal and Sri Lanka are mainly low access to credit and marketing networks, lack of access to land and property, and reduced risk-taking capacity, lack of access to modern technology, lack of personal security and risk... What do you think about this issue?
        </h4>

        <div className="dropContainer">

        </div>



        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <FavoriteIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Interested</span>
                </div>
            </div>



        </div>
      <div className="commentbox">
          <div className="shareDesc">
              <input placeholder="comment "
                     className="shareinput" />
          </div>
          <div>
              <div className="comButton">
                  <button className="shareButton">Add Comment</button>
              </div>
          </div>
      </div>

    </div>
        </div>
    );
}

export default DiscussComp;