import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import {Link} from 'react-router-dom';
import Sodebar from "../../components/sidebar/Sodebar";
import SupplierFeed from "../../components/SupplierFeed/SupplierFeed";
import './Supplier.css';

function Supplier() {
    return (
        <>
        <Topbar/>
        <div className="supWrapper">
            <Sodebar/>
            <SupplierFeed/>
        </div>
        </>
    );
}

export default Supplier;