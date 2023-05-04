import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Example of how to simulate loading data
    setTimeout(() => {
        setIsLoading(false);
    }, 100);

    return (
        <div>
            {isLoading ? (
                <Container className="d-flex justify-content-center align-items-center vh-100">
                    <Container className="d-flex justify-content-center">
                        <Spinner animation="border" variant="primary" />
                    </Container>
                </Container>
            ) : (
                <Container>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What are the differences between uncontrolled and controlled components?</Accordion.Header>
                            <Accordion.Body>
                                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
                            <Accordion.Body>
                                To validate React props using PropTypes, you first need to import the PropTypes library. Then, you can define the PropTypes for your component, specifying the type of each prop and whether it is required or not. There are several different PropTypes you can use, including string, number, bool, array, object, and more. You can also use the shape function to define the PropTypes for an object. By validating your props with PropTypes, you can catch errors early and ensure that your component is being used correctly.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is the difference between node.js and express.js?</Accordion.Header>
                            <Accordion.Body>
                                Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                            <Accordion.Body>
                                Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            )}
        </div>
    );
};

export default Blog;
