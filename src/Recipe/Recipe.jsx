import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import "./Recipe.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from 'react-bootstrap/Card';

const Recipe = () => {
    const recipe = useLoaderData();
    console.log(recipe)

    const { id, pictureLink, name, bio, experience, numLikes, numRecipes, recipes } = recipe;

    return (

        <div>
            <Header></Header>
            <div>
                <Container className='text-center'>
                    <img src={pictureLink} className='image' alt="" />
                    <h2>{name}</h2>
                    <p>{bio}</p>
                    <div>Experience: {experience}</div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>Recipe: {numRecipes}</div>
                        <div>Like: {numLikes}</div>
                    </div>
                </Container>

                <Container className='row m-5'>
                    <div className='col-4'>
                        <Card style={{ width: '18rem' }} className='pb-5'>
                            <Card.Body>
                                <Card.Title>Recipe name: {recipes[0].recipeName}</Card.Title>
                                <Card.Text>Ingredients: {recipes[0].ingredients}</Card.Text>
                                <div className='d-flex justify-content-around align-items-center'>
                                    <div>Ratings: {recipes[0].rating}</div>
                                    <div><Button>Add to favourite</Button></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Recipe name: {recipes[1].recipeName}</Card.Title>
                                <Card.Text>Ingredients: {recipes[1].ingredients}</Card.Text>
                                <div className='d-flex justify-content-around align-items-center'>
                                    <div>Ratings: {recipes[1].rating}</div>
                                    <div><Button>Add to favourite</Button></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-4'>
                        <Card style={{ width: '18rem' }} className='pb-4'>
                            <Card.Body>
                                <Card.Title>Recipe name: {recipes[2].recipeName}</Card.Title>
                                <Card.Text>Ingredients: {recipes[2].ingredients}</Card.Text>
                                <div className='d-flex justify-content-around align-items-center'>
                                    <div>Ratings: {recipes[2].rating}</div>
                                    <div><Button>Add to favourite</Button></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Recipe;