import React from 'react';
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sodebar from "../../components/sidebar/Sodebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
    return (
        <>
            <Topbar mode="Investor Mode"/>
            <div className="profile">
                <Sodebar/>
                  <dive className="profileRight">
                      <dive className="profileRightTop">
                          <div className="profileCover">
                              <img className="profileCoverIMG"
                                   src="assets/post/3.jpeg" alt=""/>
                              <img className="profileUserIMG"
                                   src="assets/person/7.jpeg" alt=""/>
                          </div>
                          <div className="profileInfo">
                              <h4 className="profileInfoName">Kasun Gayantha</h4>
                              <span className="profileInfoDesc">hello boys this is the start</span>
                          </div>

                      </dive>
                      <dive className="profileRightBottom">
                          <Feed/>
                          <Rightbar profile/>
                      </dive>
                  </dive>


            </div>
        </>
    );
};

export default Profile;