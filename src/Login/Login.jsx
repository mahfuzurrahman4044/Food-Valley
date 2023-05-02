import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContex } from '../Provider/Provider';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './Login.css';


const Login = () => {
    const [message, setMessage] = useState();
    // console.log(message);

    const [error, setError] = useState("");
    // console.log(error);

    const { signInWithEmail, signInWithGoogle, signInWithGithub } = useContext(AuthContex);

    const handleLogin = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        event.target.reset();
        
        // console.log(email, password);

        signInWithEmail(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setMessage("Logged in successfully");
                setError("");
            })
            .catch(error => {
                setMessage("");
                setError(error.message);
            })

    }


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setMessage("Logged in successfully");
                setError("");
            })
            .catch(error => {
                setMessage("");
                setError(error.message);
            })
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubLogin = () => {
        signInWithGithub(githubProvider)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);
                setMessage("Logged in successfully");
                setError("");
            })
            .catch(error => {
                setMessage("");
                setError(error.message);
            })
    }



    return (
        <div>
            <Container className='mb-5'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
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
                    message ? <h4 className='text-center'>{message}</h4> : <h4 className='text-center'>{error}</h4>
                }
            </Container>




            <Container className='m-1 google'>
                <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
            </Container>
            <Container className='m-1 ms-6 github'>
                <Button onClick={handleGithubLogin}>Sign in with Github</Button>
            </Container>

        </div>
    );
};

export default Login;