import React from 'react';
import Button from "react-bootstrap/Button";
import "./product.css";

function Product(props) {
    return (
        <div>
            <div className="productwrapper">
                <img className = "image1" src="/assets/product/1.jpg"/>
                <div >
                    <h4 className="productTitle1">3D Printing Strings / Wholesale / High quality material</h4>
                    <h4 className="productDesc1" >
                        These 3D Pen PLA Filaments include 12 colors：Black,White,Red,Blue,Green,Yellow,Space Gray,Purple,Pink,Orange,Royal Gold and Chocolate.It's the best choice for you to create all 3D Printing and 3D Art.
                        These 3D Pen PLA Filaments can provide maximum smooth performance and ensures no bubbles, no plugging, no oily residues or breaks, no clogging printing.It can also keep producing bright lines and colors.
                    </h4>
                    <div className="content1">
                             <span className="price">
                             Rs.250 / 1 pcs
                         </span>
                        <Button  className="contact"  variant="outline-danger">Buy Now </Button>{' '}
                        <Button className="contact" variant="success">Contact Supplier</Button>
                        <Button className="contact"  variant="primary">Share</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;