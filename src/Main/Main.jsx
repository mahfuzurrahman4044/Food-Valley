import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const navigation=useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state==="loading" && <Spinner animation="border" variant="primary"></Spinner>}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;