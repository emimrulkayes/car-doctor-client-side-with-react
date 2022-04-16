import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <Container>

                <p className='text-center'> <small>copyright@{year}</small> </p>

            </Container>
        </>
    );
};

export default Footer;