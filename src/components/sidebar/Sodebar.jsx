import React from 'react'
import "./sidebar.css"
import { RssFeed } from "@material-ui/icons"

export default function Sodebar() {
    return (
        <div className= "sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                       <RssFeed/>
                       <span className="sidebarListText">
                           Rss Feeds 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <RssFeed/>
                       <span className="sidebarListText">
                           Rss Feeds 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <RssFeed/>
                       <span className="sidebarListText">
                           Rss Feeds 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <RssFeed/>
                       <span className="sidebarListText">
                           Rss Feeds 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <RssFeed/>
                       <span className="sidebarListText">
                           Rss Feeds 
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <RssFeed/>
                       <span className="sidebarListText">
                           Rss Feeds 
                       </span>
                   </li>
                   
               </ul>
            </div>
        </div>
    )
}
 