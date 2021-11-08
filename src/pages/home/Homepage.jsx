import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import Sodebar from '../../components/sidebar/Sodebar.jsx'
import Topbar from '../../components/topbar/Topbar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import "./Home.css"

function Homepage() {
    return (
<>
    <Topbar mode="Investor Mode"/>
    <div className="homeContainer">
          <Sodebar/>
          <Feed/>
          <Rightbar/>
    </div>
</>
    );
}

export default Homepage
