import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContex } from '../Provider/Provider';
import { Link } from 'react-router-dom';


const Registration = () => {
    const [message, setMessage] = useState();
    console.log(message);

    const [error, setError] = useState("");
    console.log(error);

    const { createUser } = useContext(AuthContex);


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // console.log(name, email, password, confirmPassword);

        setError("");

        if (password != confirmPassword) {
            setError("Password doesn't match")
            return;
        }
        else if (password.length < 6) {
            setError("Your password must be more than 6 character")
            return
        }
        else {
            setMessage("Account has been craeted successfully.")
        }

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                setMessage("Account has been craeted successfully");
                setError("");

            })
            .catch(error => {
                setMessage("");
                setError(error.message);
            })
    }
    return (
        <div>
            <Container>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Enter your image:</Form.Label>
                        <Form.Control type="url" name='image' placeholder="Image" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your email:</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Email" required />
                        <Form.Text className="text-muted">
                            Never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter your password:</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm your password:</Form.Label>
                        <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button> Already have an account? Please <Link to="/login">Login</Link>

                </Form>
                {
                    message ? <h4 className='text-center'>{message}</h4> : <h4 className='text-center'>{error}</h4>
                }
            </Container>

        </div>
    );
};

export default Registration;