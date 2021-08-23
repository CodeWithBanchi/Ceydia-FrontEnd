 import React from 'react'
 import {PermMedia} from "@material-ui/icons"
 import "./Share.css"
 
 export default function Share() {
     return (
         <div className="share">
             <div className="shareTop">
                <img className="shareImg" src="/files/prof.png" alt=""/>
                 <input placeholder="Whts in your mind"
                  className="shareinput" />
             </div>
             <hr className="shareHr" />
             <div className="shareBottom">
                 <div className="shareOptions">
                     <div className="shareOption">
                         <PermMedia className="shareIcon"/>
                         <span className="shareOptionText">Photo/video</span>
                     </div>
                     <div className="shareOption">
                         <PermMedia className="shareIcon"/>
                         <span className="shareOptionText">Photo/video</span>
                     </div>
                     <div className="shareOption">
                         <PermMedia className="shareIcon"/>
                         <span className="shareOptionText">Photo/video</span>
                     </div>
                 </div>
 
             </div>
         </div>
     )
 }
  