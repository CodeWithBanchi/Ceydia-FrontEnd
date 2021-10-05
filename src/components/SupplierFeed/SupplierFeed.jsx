import React from 'react';
import "./supplierFeed.css";
import {Search} from "@material-ui/icons";
import Button from 'react-bootstrap/Button'
import Product from "../Product/Product";

function SupplierFeed(props) {
    return (
        <div className="wrapper">
          <div className="wrapper1">
            <div className="topPart">
                <div >
                    <span className="feedTitle"> Ceydia Product Supplier Portal </span>
                </div>
                <div className="productSearchbox" >
                    <Search className="searchIcon"/>
                    <input placeholder="Search products now " className="searchInput"/>
                </div>
            </div>
             <div className="row">
                <Product/>
                 <Product/>
                 <Product/>
                 <Product/>

             </div>
          </div>
        </div>
    );
}

export default SupplierFeed;