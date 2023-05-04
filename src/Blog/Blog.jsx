import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

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
                    <h2 className='text-center'>Blog</h2>
                    {/* Your blog content goes here */}
                </Container>
            )}
        </div>
    );
};

export default Blog;
