import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Container, Toast, Spinner } from 'react-bootstrap'; // import Spinner from react-bootstrap
import "./Recipe.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from 'react-bootstrap/Card';

const Recipe = () => {
    const [isLoading, setIsLoading] = useState(true); // add isLoading state
    const recipe = useLoaderData();
    console.log(recipe)

    useEffect(() => {
        setIsLoading(false); // set isLoading to false once data has loaded
    }, [recipe]);

    const { id, pictureLink, name, bio, experience, numLikes, numRecipes, recipes } = recipe;

    const [showToast, setShowToast] = useState(false);
    const [disableButtons, setDisableButtons] = useState(Array(recipes.length).fill(false));

    const handleAddToFavourite = (index) => {
        const newDisableButtons = [...disableButtons];
        newDisableButtons[index] = true;
        setDisableButtons(newDisableButtons);
        setShowToast(true);
    };

    return (
        <div>
            {isLoading ? ( // show spinner if isLoading is true
                <div style={{height: "100vh"}}>
                <Spinner className="d-flex justify-content-center align-items-center" animation="border" variant="primary" />
            </div>
            ) : (
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
                        {recipes.map((recipe, index) => (
                            <div className='col-4' key={index}>
                                <Card style={{ width: '18rem' }} className='pt-3'>
                                    <Card.Body>
                                        <Card.Title>Recipe name: {recipe.recipeName}</Card.Title>
                                        <Card.Text>Ingredients: {recipe.ingredients}</Card.Text>
                                        <div className='d-flex justify-content-around align-items-center'>
                                            <div>Ratings: {recipe.rating}</div>
                                            <div className=''>
                                                <Button disabled={disableButtons[index]} onClick={() => handleAddToFavourite(index)}>
                                                    {disableButtons[index] ? "Added to favorite" : "Add to favorite"}
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Container>

                    <Toast show={showToast} onClose={() => setShowToast(false)}>
                        <Toast.Header>
                            <strong className="mr-auto">Success!</strong>
                        </Toast.Header>
                        <Toast.Body>This recipe has been added to your favorites.</Toast.Body>
                    </Toast>
                </div>
            )}
        </div>
    );
};

export default Recipe;
