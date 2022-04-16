import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <Container>
            <h1 className='title'>Services </h1>
            <Row>
                {
                    services.map(service => 
                        <Service
                            key={service.id}
                            service = {service}
                        ></Service>
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;