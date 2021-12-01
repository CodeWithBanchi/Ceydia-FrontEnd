import React from 'react';
import "./groupFeed.css"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

function GroupFeed(props) {
    return (
        <div className="gfeed">
            <h1 className="gtopic"> Ceydia Groups </h1>
              <div className="grpOption">
                  <div className="creategrp">
                      <AddCircleOutlineIcon htmlColor="white"/>
                      <span  className="crtTextgrp">Create a new  Group</span>
                  </div>
              <div className="srchCont">
                  <InputGroup className="mb-3">
                      <Button variant="outline-secondary" id="button-addon1">
                        Search Group
                      </Button>
                      <FormControl
                          aria-label="Example text with button addon"
                          aria-describedby="basic-addon1"
                      />
                  </InputGroup>
              </div>

              </div>

            <div className="gcontainer">
                <div className="gbox">
                    <img className="grpImg" src="/assets/group/1.png"/>
                    <div className="grpTitle">
                        <span>Software Engineers Club </span>
                        <h4 className="grpdecs">This is a group of software engenners in Sri Lanka. You can share your business ideas related to the software engeneering
                        and IT feild. </h4>
                    </div>
                    <div className="join">
                      <div className="joinContent">
                          <AddCircleOutlineIcon/>
                          <span className="joingrp">Join Group</span>
                      </div>
                    </div>
                    <span className="member">5235+ Members</span>
                </div>

                <div className="gbox">
                    <img className="grpImg" src="/assets/group/2.jpg"/>
                    <div className="grpTitle">
                        <span>Automobile Talks and Ideas </span>
                        <h4 className="grpdecs"> In this group you can discuss about the business ideas related to the automobile industry. If you are interested in automobile this is the place
                 </h4>
                    </div>
                    <div className="join">
                        <div className="joinContent">
                            <AddCircleOutlineIcon/>
                            <span className="joingrp">Join Group</span>
                        </div>
                    </div>
                    <span className="member">5235+ Members</span>
                </div>


                <div className="gbox">
                    <img className="grpImg" src="/assets/group/3.jpg"/>
                    <div className="grpTitle">
                        <span>Hotel and Tourism</span>
                        <h4 className="grpdecs"> If you are a person who interested in hotel and tourisome industry this is the place for you to talk with the expersts and share your ideas
                           </h4>
                    </div>
                    <div className="join">
                        <div className="joinContent">
                            <AddCircleOutlineIcon/>
                            <span className="joingrp">Join Group</span>
                        </div>
                    </div>
                    <span className="member">5235+ Members</span>
                </div>
            </div>
        </div>
    );
}

export default GroupFeed;