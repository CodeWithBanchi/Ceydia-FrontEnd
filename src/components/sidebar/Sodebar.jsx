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
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Spinner from 'react-bootstrap/Spinner'
import { DropdownButton,Dropdown,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Sodebar() {
    return (
        <div className= "sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                       <TrendingUpIcon/>
                       <span className="sidebarListText">
                           Trending Ideas
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <AssistantPhotoIcon />
                       <span className="sidebarListText">
                           Relevant Ideas
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <FavoriteIcon/>
                       <span className="sidebarListText">
                           Favourite Ideas
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <GroupIcon/>
                       <Link className="sidebarListText" to="/advisors">Advisors </Link>
                   </li>
                   <li className="sidebarListItem">
                       <GroupIcon/>
                       <span className="sidebarListText">
                           My Groups
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <AnnouncementIcon/>
                       <span className="sidebarListText">
                           News
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <StorefrontIcon/>
                          <Link className="sidebarListText" to="/supplier"> Item Suppliers </Link>
                   </li>
                   
               </ul>
              <button className="sidebarButton">Show more </button>

              <hr className="sidebarHr"/>
                <Button className="GlowButton" variant="success" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Online Followers
                </Button>
              <ul className="sidebarFriendList">
                  {Users.map(u=>(
                      <CloseFriends key={u.id} user={u}/>
                  ))}

              </ul>
              
            </div>
        </div>
    )
}
 