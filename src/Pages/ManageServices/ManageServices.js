import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Confirm delete?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, { method: 'DELETE', })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            });
        };
    };

    return (
        <Container>
            <Row>
                <h2 className='my-4'>Manage Services</h2>
                {
                    services.map(service => 
                        <div className='d-flex mt-4' key={service._id}>
                            <h5> {service.name} </h5> 
                            <Button onClick={() => handleDelete(service._id)} className='btn btn-delete ms-4'>Delete</Button>
                        </div>
                    )
                }
            </Row>

        </Container>
    );
};

export default ManageServices;