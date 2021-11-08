import React from 'react';
import "./inOption.css"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Toast from 'react-bootstrap/Toast'

function InOptions(props) {
    return (
        <div className="inOptiondiv">
            <span className="opTopic">Investor Options</span>
            <div className="srchOp">
                <InputGroup className="mb-3">
                    <FormControl aria-label="Text input with dropdown button" />
                    <SplitButton
                        variant="outline-secondary"
                        title="Search"
                        id="segmented-button-dropdown-2"
                        alignRight
                    >
                        <Dropdown.Item href="#">Food industry</Dropdown.Item>
                        <Dropdown.Item href="#">IT industry</Dropdown.Item>
                        <Dropdown.Item href="#">Textile industry</Dropdown.Item>
                        <Dropdown.Item href="#">Import / Export </Dropdown.Item>
                        <Dropdown.Item href="#">Cinema industry</Dropdown.Item>
                        <Dropdown.Item href="#">Education industry</Dropdown.Item>
                        <Dropdown.Item href="#">Medical industry</Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item href="#">All industries </Dropdown.Item>
                    </SplitButton>
                </InputGroup>
            </div>
            <div className="qPacket">
              <div className="qpackContent">
                  <AddCircleOutlineIcon/>
                  <span>  Create a new question packet</span>
              </div>
                <div className="whatis">
                    <span className="word">What is a question packet ? </span>
                </div>
            </div>
            <div className="packContainer">
                <h3 className="drangnDroptext">Drag an drop a question packet a idea </h3>
            <div className="packet">
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Question Packet 01</strong>
                        <small className="text-muted">3 weeks ago</small>
                    </Toast.Header>
                    <Toast.Body>General questions to idea holders </Toast.Body>
                </Toast>
            </div>
                <div className="packet">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Question Packet 02</strong>
                            <small className="text-muted"> 5 days ago</small>
                        </Toast.Header>
                        <Toast.Body>Specific questions to idea holders </Toast.Body>
                    </Toast>
                </div>
                <div className="packet">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Question Packet 03</strong>
                            <small className="text-muted">2 weeks ago</small>
                        </Toast.Header>
                        <Toast.Body>It related project questions </Toast.Body>
                    </Toast>
                </div>


            </div>
        </div>
    );
}

export default InOptions;