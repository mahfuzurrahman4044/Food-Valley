import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    const [message, setMessage] = useState();
    console.log(message);

    const [error, setError] = useState("");
    console.log(error);

    const handleLogin=(event)=>{

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }
    return (
        <div>
            <Container>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email"  required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;