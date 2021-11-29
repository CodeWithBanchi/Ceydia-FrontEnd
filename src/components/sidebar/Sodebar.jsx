import React from 'react'
import "./sidebar.css"
import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import {Users} from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import AssignmentIcon from '@material-ui/icons/Assignment';
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
                       <FormatSizeIcon/>
                       <Link className="sidebarListText" to="/discussion">Discussions</Link>
                   </li>
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
                       <MessageIcon/>
                       <span className="sidebarListText">
                           Messages
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <AssignmentIcon/>
                       <Link className="sidebarListText" to="/proposals">Business Proposals </Link>
                   </li>
                   <li className="sidebarListItem">
                       <GroupIcon/>
                       <Link className="sidebarListText" to="/advisors">Advisors </Link>
                   </li>
                   <li className="sidebarListItem">
                       <GroupIcon/>
                       <Link className="sidebarListText" to="/groups">My Groups </Link>
                   </li>
                   <li className="sidebarListItem">
                       <AnnouncementIcon/>
                       <span className="sidebarListText">
                           Popular Investors
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
 