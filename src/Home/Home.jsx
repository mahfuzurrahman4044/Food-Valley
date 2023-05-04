import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import img1 from '../assets/imgonline-com-ua-resize-0xa6iexTlI.jpg';
import img2 from "../assets/imgonline-com-ua-resize-CtQ3uupuwc8mMicm.jpg";
import img3 from "../assets/imgonline-com-ua-resize-vMCefWbGfv.jpg";
import Chef from '../Chef/Chef';
import img4 from "../assets/download.png";
import img5 from "../assets/download (1).png";
import img6 from "../assets/1200px-Number_3_in_yellow_rounded_square.svg.png";
import "./Home.css";

import client1 from "../assets/istockphoto-1270067126-612x612.jpg";
import client2 from "../assets/istockphoto-1317784594-612x612.jpg";
import client3 from "../assets/gettyimages-1285156699-612x612.jpg";

const Home = () => {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // add state variable

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/chef")
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setIsLoading(false); // set isLoading to false after data has been fetched
            });
    }, []);

    return (
        <div>
            <Container className='p-5'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-1"
                            src={img1}
                            alt="First slide"
                        // style={imageStyle}
                        />
                        <Carousel.Caption>
                            <h1 className='text-primary pb-3'>Top rated chef of Bangladesh</h1>
                            <p className='text-warning fs-5'>Introducing the culinary masters behind the flavors that make our restaurant so unforgettable! Our talented chefs pour their passion and expertise into every dish, infusing each one with the rich spices and traditional flavors of Bangladesh. From mouthwatering curries to savory kebabs, their dedication to their craft ensures every bite is an experience to savor. Come taste the artistry of our chefs today, and discover the true taste of Bangladesh at our restaurant.</p>  </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-1"
                            src={img2}
                            alt="Second slide"
                        // style={imageStyle}
                        />

                        <Carousel.Caption>
                            <h1 className='text-primary pb-3'>Pure deshi food</h1>
                            <p className='text-warning fs-5'>Looking for an authentic taste of Bangladesh? Look no further than our restaurant! Our chefs use only the freshest, highest-quality ingredients to create dishes that will transport your taste buds to the bustling streets of Dhaka. From fragrant biryanis to succulent tandoori chicken, our menu is a celebration of the rich, diverse flavors of Bangladesh. Come savor the culinary delights of our restaurant and experience the true taste of Bangladesh today</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-1"
                            src={img3}
                            alt="Third slide"
                        // style={imageStyle}
                        />

                        <Carousel.Caption>
                            <h1 className='text-primary pb-3'>Good customer review</h1>
                            <p className='text-warning fs-5'>Don't just take our word for it - hear what our satisfied customers have to say! Our restaurant has been delighting taste buds and earning rave reviews from food critics and foodies alike. Our dishes have been described as a culinary journey through Bangladesh, with every bite a revelation of bold, complex flavors. But don't just take their word for it - come experience it for yourself! Our chefs are waiting to take you on a journey of taste and discovery that you won't forget. Come taste the magic at our restaurant today</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className='m-5'>
                    <h2 className='text-center'>Our Services</h2>

                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                            <img className='number my-3' src={img4} alt="" />
                            <h3>Real Test</h3>
                            <p>Looking for an authentic taste of Bangladesh? <br />
                                Look no further than our restaurant! Our chefs <br />
                                use only the freshest, highest-quality ingredients <br />
                                to create dishes that will transport your taste <br />
                                buds to the bustling streets of Rajshahi.
                            </p>
                            <Button>More</Button>
                        </div>

                        <div>
                            <img className='number my-3' src={img5} alt="" />
                            <h3>Best Chef</h3>
                            <p>Introducing the culinary masters behind the <br />
                                flavors that make our restaurant so unforgettable! <br />
                                Our talented chefs pour their passion and expertise <br />
                                into every dish, infusing each one with the rich <br />
                                spices and traditional flavors of Bangladesh.
                            </p>
                            <Button>More</Button>
                        </div>

                        <div>
                            <img className='number my-3' src={img6} alt="" />
                            <h3>Best Recipe</h3>
                            <p>At our restaurant, we take pride in serving <br />
                                the most delicious and flavorful dishes. From our <br />
                                appetizers to our entrees, each recipe is carefully <br />
                                crafted using only the freshest and highest quality <br />
                                ingredients. Our chefs are passionate.
                            </p>
                            <Button>More</Button>
                        </div>
                    </div>

                </div>
            </Container>


            {/* conditional rendering of spinner */}
            {isLoading ?
                <Container className="d-flex justify-content-center">
                    <Spinner animation="border" variant="primary" />
                </Container>
                :
                <Container className='row ms-5 ps-5'>
                    {
                        chefs.map(chef => <div className='col-3 mb-3'><Chef key={chef.id} chef={chef}></Chef></div>)
                    }
                </Container>
            }



            <div className='m-5'>
                <h2 className='text-center'>Client Review</h2>
                <div className='d-flex justify-content-around align-items-center mt-5'>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="pic" variant="top" src={client1} />
                            <Card.Body>
                                <Card.Title>Rahul Patel</Card.Title>
                                <Card.Text>
                                Absolutely loved the food at this restaurant! The flavors were amazing and everything was so fresh. The Sizzling Beef Fajitas were a standout - I'll definitely be back for more.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="pic" variant="top" src={client2} />
                            <Card.Body>
                                <Card.Title>Jerimee De Silva</Card.Title>
                                <Card.Text>
                                I've been coming to this restaurant for years and the food never disappoints. The Chicken Tikka Masala is my go-to dish, and it's always perfectly spiced and cooked to perfection. Highly recommend.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="pic" variant="top" src={client3} />
                            <Card.Body>
                                <Card.Title>Sam Mark</Card.Title>
                                <Card.Text>
                                I had the pleasure of trying the seafood paella and it was absolutely incredible. The mix of flavors and textures was spot on - I couldn't get enough. This restaurant is definitely to visit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
