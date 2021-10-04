import React from 'react';
import Card from 'react-bootstrap/Card'
import './userInfo.css'

function UserInfo(props) {
    return (
        <div>
            <Card className="card" border="danger" style={{ width: '18rem' }}>
                <Card.Header>My about info: </Card.Header>
                <Card.Body>
                    <Card.Title>Student NSBM Green University</Card.Title>
                    <Card.Text  className="cardText">
                      I am doing Management Information Systems degree. Im very pumped for doing new things and I like new businesses and entrepreurship
                        very much. My goal is to become an entrepreur one day and to be a proud Sri Lanakan.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}

export default UserInfo;