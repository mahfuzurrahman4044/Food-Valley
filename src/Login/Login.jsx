import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContex } from '../Provider/Provider';
import { Link } from 'react-router-dom';


const Login = () => {
    const [message, setMessage] = useState();
    console.log(message);

    const [error, setError] = useState("");
    console.log(error);

    const {signIn}=useContext(AuthContex);

    const handleLogin=(event)=>{

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setMessage("Logged in successfully");
            setError("");
        })
        .catch(error=>{
            setMessage("");
            setError(error.message);
        })

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
                    </Button> New here? Please <Link to="/registration">Register</Link>
                </Form>
                {
                    message? <div>{message}</div>: <div>{error}</div>
                }
            </Container>
        </div>
    );
};

export default Login;