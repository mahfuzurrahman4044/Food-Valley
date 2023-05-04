import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Spinner } from 'react-bootstrap';
import img1 from '../assets/imgonline-com-ua-resize-0xa6iexTlI.jpg';
import img2 from "../assets/imgonline-com-ua-resize-CtQ3uupuwc8mMicm.jpg";
import img3 from "../assets/imgonline-com-ua-resize-vMCefWbGfv.jpg";
import Chef from '../Chef/Chef';

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
        </div>
    );
};

export default Home;
