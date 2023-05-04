import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Footer.css";
import logo from '../assets/305932265_498090215657179_760292799344673145_n.jpg'

const Footer = () => {
    const [message, setMessage] = useState();
    const btnSendMessage = (event) => {
        event.preventDefault();
        setMessage("Thanks for staying with us.");
        event.target.reset();
    };


    return (
        <div>
            {/* <Container>
                <div className="text-center m-2">
                    <h3>
                        Contact Us
                    </h3>
                </div>

                <div className="flex-row d-lg-flex justify-content-around align-items-center ">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="btn border border-1 border-secondary shadow hv p-3 bg-light">
                            <div>
                                <img src="../assets/305932265_498090215657179_760292799344673145_n.jpg" alt="" />
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
            </Container> */}



            <div class="bg-dark text-light p-5 flex-row d-lg-flex justify-content-around align-items-start mt-5">

                <div className='text-center'>
                    <img src={logo} alt="" className='img' />
                    <p class="mt-4">
                        Looking for an authentic taste of Bangladesh? <br />
                        Look no further than our restaurant! Our chefs <br />
                        use only the freshest, highest-quality ingredients <br />
                        to create dishes that will transport your taste <br />
                        buds to the bustling streets of Rajshahi.
                    </p>
                </div>


                <div className='text-center'>
                    <h4>
                        Usefull Link
                    </h4>
                    <div>
                        <div class="mt-4">Home</div>
                        <div>About Us</div>
                        <div>Cases</div>
                        <div>Blog</div>
                        <div>Contact</div>
                    </div>
                </div>


                <div className='text-center'>
                    <h4>
                        Contact Now
                    </h4>
                    <p class="mt-4">
                        223 Alokar More <br />
                        Rajshahi, Bangladesh
                    </p>
                    <p>
                        +88 01750 000 000 <br />
                        +88 01850 000 000
                    </p>
                    <p>
                        foodvalley@gmail.com <br />
                        foodvalley@outlook.com
                    </p>
                </div>


                <div>
                    <Form onSubmit={btnSendMessage}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Enter your name:</Form.Label>
                            <Form.Control type="text" placeholder="Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Enter your email:</Form.Label>
                            <Form.Control type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Write your message:</Form.Label>
                            <Form.Control type="text" placeholder="Message" />
                        </Form.Group>
                        <Button variant="primary mb-3" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <div className='text-warning text-center'>{message}</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;