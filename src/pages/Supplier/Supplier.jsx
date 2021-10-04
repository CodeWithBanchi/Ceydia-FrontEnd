import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import {Link} from 'react-router-dom';
import Sodebar from "../../components/sidebar/Sodebar";

function Supplier() {
    return (
        <div>
            <Topbar/>
            <Sodebar/>
        </div>
    );
}

export default Supplier;