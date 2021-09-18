import React from 'react'
import "./rightbar.css"
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import {Users} from "../../dummyData"
import Online from "../Online/Online";

export default function Rightbar({profile}) {

    const HomeRightBar = () =>{
        return(
            <>
                <div className="birthdayContainer">
                    <CardGiftcardIcon className="birthdayImg"/>
                    <span className="birthdaytext">
                        <b>Kasun</b> and <b>3 friends</b> have birthday today</span>
                </div>
                <img src="/files/prof.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle"> Online Friends </h4>
                <ul className="friendList">

                    {Users.map((u) => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }
   const ProfileRightBar = () => {
        return (
            <>
              <h4 className="rightbarTitle"> User Information </h4>
                <div className="rightbarInfo">
                    <div  className="rightbarInfoItem">
                        <span className="rightbarInfoKey"> City : </span>
                        <span className="rightbarInfoValue"> New York  </span>
                    </div>
                    <div  className="rightbarInfoItem">
                        <span className="rightbarInfoKey"> Job :  </span>
                        <span className="rightbarInfoValue"> SW Engenner  </span>
                    </div>
                    <div  className="rightbarInfoItem">
                        <span className="rightbarInfoKey"> Relationship :  </span>
                        <span className="rightbarInfoValue"> Single </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends </h4>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/1.jpeg"/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/2.jpeg"/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/3.jpeg"/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/4.jpeg"/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/6.jpeg"/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/5.jpeg"/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/1.jpeg"/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
            </>
        )
   }
    return (
        <div classame= "rightbar">
            <div className="rightbarWrapper">
                 <ProfileRightBar/>
            </div>
        </div>
    )
}
