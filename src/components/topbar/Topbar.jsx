import "./topbar.css"
import {Search} from "@material-ui/icons"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';


function Topbar(props) {
    return (
        <div className="topbarcontainer">
            <div className="topbarLeft"> 
              <div className="logoCont">
                  <Link className="logo" to="/home">Ceydia</Link>
              </div>
            </div>

            <div className="topbarCenter">
                <div className="searchbox" >
                <Search className="searchIcon"/>
                <input placeholder="search now " className="searchInput"/>
                </div>
            </div>

            <div className="topbarRight">

                <div className="inmode">
                    <Link className="topbarLink1" to="/investor_mode">{props.mode}</Link>
                </div>
                <Link to="/home" className="topbarLink">Homepage</Link>
                <Link className="topbarLink" to="/Profile">Profile</Link>

                <div className="topbarIcons">

           <div className="topbariconItem">
               <MessageIcon/>
               <span className="topbariconBadge">1</span>
           </div>
           <div className="topbariconItem">
               <NotificationsIcon/>
               <span className="topbariconBadge">1</span>
           </div>
                    <div className="topbariconItem">
                        <PersonIcon/>
                        <span className="topbariconBadge">10</span>
                    </div>

           <img src="/files/prof.png" alt="" className="topbarImg" />

           </div>
           </div>
        </div>
    )
}

export default Topbar
