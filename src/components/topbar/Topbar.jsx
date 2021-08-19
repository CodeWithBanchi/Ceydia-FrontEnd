import "./topbar.css"
import {Search} from "@material-ui/icons"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';

function Topbar() {
    return (
        <div className="topbarcontainer">
            <div className="topbarLeft"> 
                 <span className="logo">Moodfix</span>
            </div>

            <div className="topbarCenter">
                <span className="searchbox">Searchbox</span>
                <Search/>
                <input placeholder="search now " className="searchInput"></input>

            </div>

            <div className="topbarRight">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
           </div>
           <div className="topbarIcons"></div>
           <div className="topbariconItem">
               <PersonIcon/>
               <span className="topbariconBadge">1</span>
               <MessageIcon/>
               <span className="messageionBadge">2</span>

           </div>
        </div>
    )
}

export default Topbar
