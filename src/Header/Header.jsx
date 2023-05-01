import React from 'react';
import logo from '../assets/download.png'
import './Header.css';
import { Container, NavLink } from 'react-bootstrap';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    return (
        <Container className='my-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="blog">Blog</ActiveLink>
                    <ActiveLink to="login">Login</ActiveLink>
                    <ActiveLink to="registration">Registration</ActiveLink>
                </div>
            </div>
        </Container>
    );
};

export default Header;