import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import ActiveLink from "../ActiveLink/ActiveLink";
import logo from '../../src/assets/305932265_498090215657179_760292799344673145_n.jpg';
import './Header.css';
import { AuthContex } from '../Provider/Provider';

const Header = () => {
    const {user}=useContext(AuthContex);
    return (
        <div>
            <Container className='my-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='d-flex justify-content-around align-items-center'>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                        {
                            user ? <span>{user.displayName}</span>:<ActiveLink to="login">Login</ActiveLink>
                        }
                        <ActiveLink to="registration">Registration</ActiveLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;