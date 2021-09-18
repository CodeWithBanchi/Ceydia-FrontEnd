import React from 'react'
import "./sidebar.css"
import { RssFeed } from "@material-ui/icons"
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {Users} from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";

export default function Sodebar() {
    return (
        <div className= "sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                       <RssFeed/>
                       <span className="sidebarListText">
                           News Feed 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <ChatIcon/>
                       <span className="sidebarListText">
                           Chats 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <GroupIcon/>
                       <span className="sidebarListText">
                           Groups 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <EventAvailableIcon/>
                       <span className="sidebarListText">
                           Events
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <AnnouncementIcon/>
                       <span className="sidebarListText">
                           News
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <SportsEsportsIcon/>
                       <span className="sidebarListText">
                           Games 
                       </span>
                   </li>
                   
               </ul>
              <button className="sidebarButton">Show more </button>
              <hr className="sidebarHr"/>
              <ul className="sidebarFriendList">
                  {Users.map(u=>(
                      <CloseFriends key={u.id} user={u}/>
                  ))}

              </ul>
              
            </div>
        </div>
    )
}
 