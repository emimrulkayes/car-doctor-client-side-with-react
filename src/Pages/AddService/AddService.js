import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        });
    };

    return (
        <Container>
            <Row>
                <Col className='m-auto' sm={12} md={8} lg={5}>
                    <h2>Please add a service</h2>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-3 py-1 px-2' placeholder='Name' {...register("name", {required: true, maxLength: 20})} />
                        <textarea rows="" cols="" className='mb-3 py-1 px-2' placeholder='Description' {...register("description", { required: true })} />
                        <input className='mb-3 py-1 px-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                        <input className='mb-3 py-1 px-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                        
                        <input className='btn bg-info' type="submit" value="Add Service" />
                    </form>
                </Col>
            </Row>
            
        </Container>
    );
};

export default AddService;