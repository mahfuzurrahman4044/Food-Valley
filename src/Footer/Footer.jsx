import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Footer = () => {
    const [message, setMessage] = useState();
    const btnSendMessage = (event) => {
        event.preventDefault();
        setMessage("Thanks for staying with us.");
        event.target.reset();
    };


    return (
        <div>
            <Container>
                <div className="text-center m-2">
                    <h3>
                        Contact Us
                    </h3>
                </div>

                <div className="flex-row d-lg-flex justify-content-around align-items-center ">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="btn border border-1 border-secondary shadow hv p-3 bg-light">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <h5>
                                Head Office
                            </h5>
                            <p>
                                223 Alokar More <br />
                                Rajshahi, Bangladesh
                            </p>
                        </div>



                        <div className="btn border border-1 border-secondary shadow hv p-3 bg-light">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <h5>
                                Call
                            </h5>
                            <p>
                                +88 01350 000000 <br />
                                +88 01850 000000
                            </p>
                        </div>



                        <div className="btn border border-1 border-secondary shadow hv p-3 bg-light">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <h5>
                                Email
                            </h5>
                            <p>
                                foodvalley@gmail.com
                            </p>
                        </div>



                        <div className="btn border border-1 border-secondary shadow hv p-3 bg-light">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <h5>
                                Working Time
                            </h5>
                            <p>
                                Sat-Thu <br /> 06 AM - 11:30 PM
                            </p>
                        </div>
                    </div>




                    <div>
                        <Form onSubmit={btnSendMessage}>
                            <Form.Group className="m-3" controlId="formName">
                                <Form.Label>Enter your name:</Form.Label>
                                <Form.Control type="text" placeholder="Name" required />
                            </Form.Group>

                            <Form.Group className="m-3" controlId="formEmail">
                                <Form.Label>Enter your email:</Form.Label>
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group className="m-3" controlId="formPassword">
                                <Form.Label>Write your message:</Form.Label>
                                <Form.Control type="text" placeholder="Message" />
                            </Form.Group>
                            <Button variant="primary m-3" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <div className='text-success text-center'>{message}</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
