import React from 'react';
import { Container, Row } from 'react-bootstrap';
import notFound from '../../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <img className='img-fluid' src={notFound} alt="error" />
                </Row>
            </Container>
            
        </div>
    );
};

export default NotFound;