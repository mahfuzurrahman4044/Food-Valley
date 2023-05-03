import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Chef.css";

const Chef = ({ chef }) => {
    const { pictureLink, name, bio, experience, numLikes, numRecipes } = chef;
    return (
        <div>
            <div className='col-3 text-center'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='img' variant="top" src={pictureLink} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div>Experience: {experience}</div>
                        <div> Number of recipe: {numRecipes}</div>
                        <div className='d-flex justify-content-center align-items-center mt-1'>
                            <div>Likes: {numLikes}</div>
                            <Button variant="primary">Details</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Chef;