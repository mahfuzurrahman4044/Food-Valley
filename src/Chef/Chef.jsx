import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Chef.css";
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, pictureLink, name, bio, experience, numLikes, numRecipes } = chef;
    return (
        <div>
            <div className='col-3 text-center'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='pic' variant="top" src={pictureLink} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div>Experience: {experience}</div>
                        <div> Number of recipe: {numRecipes}</div>
                        <div className='d-flex justify-content-center align-items-center mt-1'>
                            <div>Likes: {numLikes}</div>
                            <Button variant="primary"><Link to={`/recipe/${id}`}>Details</Link></Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Chef;