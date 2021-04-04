import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';
function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage('The email that you have provided is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`A ${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <Container fluid data-testid='contact-container' id='contact-container' className='pagesParentContainer'>
            <Row className='pageHeader'>
                <h2 data-testid='contact-form-header'>Contact me</h2>
            </Row>
            <Row id='contact-form-row'>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId='formGirdName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder='Enter Name' name='name' onBlur={(event) => handleChange(event)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId='formGridEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' name='email' onBlur={(event) => handleChange(event)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Message</Form.Label>
                        <Form.Control data-testid='message-text-area' as='textarea' placeholder='message' name='message' onBlur={(event) => handleChange(event)} />
                    </Form.Row>
                    <Form.Row>
                        {errorMessage && (
                            <Alert variant='danger' className='errorContainer'>
                                {errorMessage}
                            </Alert>
                        )}
                    </Form.Row>
                    <Button data-testid='submit-button' variant='primary' type='submit' id='submit-contact-button' onClick={(event) => handleSubmit(event)}>
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default Contact;