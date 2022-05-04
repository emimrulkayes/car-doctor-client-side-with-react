import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container>
            <Row>
                <h2>Please add a service</h2>
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
                </form>
            </Row>
            
        </Container>
    );
};

export default AddService;