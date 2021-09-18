 import React from 'react'
 import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"
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
                         <PermMedia htmlColor="tomato" className="shareIcon"/>
                         <span className="shareOptionText">Photos/video</span>
                     </div>
                     <div className="shareOption">
                         <Label htmlColor="blue" className="shareIcon"/>
                         <span className="shareOptionText">Tag</span>
                     </div>
                     <div className="shareOption">
                         <Room htmlColor="goldenrod" className="shareIcon"/>
                         <span className="shareOptionText">Location</span>
                     </div>
                     <div className="shareOption">
                         <EmojiEmotions htmlColor="red" className="shareIcon"/>
                         <span className="shareOptionText">Feelings</span>

                     </div>
                 </div>
                 <button className="shareButton">Share</button>
 
             </div>
         </div>
     )
 }
  