import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (

        <Col xs={12} sm={6} md={6} lg={4} >
            <Card className='service-card mb-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text>
                        <p> {description} </p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Price {price} </small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;