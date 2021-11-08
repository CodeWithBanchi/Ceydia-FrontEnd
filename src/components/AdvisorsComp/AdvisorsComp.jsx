import React from 'react';
import "./advisorsComp.css"
import Button from "react-bootstrap/Button";

function AdvisorsComp(props) {
    return (
        <div>
            <div className="advisorwrapper">
                <img className = "image" src="/assets/Advisor/dp.jpg"/>
                <div >
                    <h2 className="advisorName">Mr.Dammika Perera</h2>
                    <h4 className="advisorDesc" >
                        Dhammika Perera (born December 28, 1967) is a Sri Lankan entrepreneur/business magnate and philanthropist, and Chairman/Managing Director of Vallibel One PLC. He is considered to be a very successful investor, which made him one of the richest persons in Sri Lanka. Dhammika is best recognized as an icon of expertise in corporate re-engineering and revival owing to his uncanny ability to choose his investment portfolio across sectors. He owns nearly 23 companies and regarded as a pioneer of Sri Lankan economic growth after the end of Sri Lankan Civil War.
                    </h4>
                    <div className="content">
                        <Button  className="contact"  variant="warning">Ask for advise </Button>{' '}
                        <Button className="contact" variant="success">Read Articles</Button>
                        <Button className="contact"  variant="primary">Introduce Your Business Idea</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvisorsComp;