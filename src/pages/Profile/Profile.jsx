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
                                   src="/files/prof.png" alt=""/>
                          </div>
                          <div className="profileInfo">
                              <h4 className="profileInfoName">Kasun Gayantha</h4>
                              <span className="profileInfoDesc">I am a student of NSBM green university and I am doing a management information systems
                              degree. I have experience in Software engeneering and information managemnt. I am also a freelancer on upwork. Usually I work on web
                              and software project6s </span>
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