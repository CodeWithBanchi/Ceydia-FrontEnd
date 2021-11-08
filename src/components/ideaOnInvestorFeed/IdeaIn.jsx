import React from 'react';
import "./ideaIn.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import SaveIcon from '@material-ui/icons/Save';

function IdeaIn(props) {

    return (
        <div>
            <div className="inIdeaWrapper">
                <div className="intopic">
                    <span>I have an Idea to start a software company</span>
                </div>
                <div className="inCenter">
                    <div className="inImage">
                        <img className="inimagePhoto"  src="/assets/post/1.jpeg"/>
                    </div>
                    <div className="inPara">
                        <p>I am a software engeneering student from NSBm green university of sri lanka. I have a good understandig about software development and web development.
                            And I have completed a software engeneer internship in ABCD company</p>
                    </div>

                </div>
                <div className="bottomOption">
                   <div className="op1">
                       <FavoriteIcon htmlColor="red"  />
                       <span className="opLable">Interested</span>
                   </div>
                    <div className="op1">
                        <SaveIcon/>
                        <span className="opLable">Save For Later</span>
                    </div>
                    <div className="op1">
                        <MessageIcon/>
                        <span className="opLable">Send Message</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IdeaIn;