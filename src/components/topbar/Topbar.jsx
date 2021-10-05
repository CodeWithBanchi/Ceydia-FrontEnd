import "./topbar.css"
import {Search} from "@material-ui/icons"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';


function Topbar() {
    return (
        <div className="topbarcontainer">
            <div className="topbarLeft"> 
              <Link className="logo" to="/">Ceydia</Link>
            </div>

            <div className="topbarCenter">
                <div className="searchbox" >
                <Search className="searchIcon"/>
                <input placeholder="search now " className="searchInput"/>
                </div>
            </div>

            <div className="topbarRight">

                <span className="topbarLink">Homepage</span>
                <Link className="topbarLink" to="/Profile">Timelinee</Link>
                <div className="topbarIcons">
           <div className="topbariconItem">
               <PersonIcon/>
               <span className="topbariconBadge">1</span>
           </div>
           <div className="topbariconItem">
               <MessageIcon/>
               <span className="topbariconBadge">1</span>
           </div>
           <div className="topbariconItem">
               <NotificationsIcon/>
               <span className="topbariconBadge">1</span>
           </div>
                    <Link className="topbarLink2" to="/Login">LogOut</Link>
           <img src="/files/prof.png" alt="" className="topbarImg" />

           </div>
           </div>
        </div>
    )
}

export default Topbar
