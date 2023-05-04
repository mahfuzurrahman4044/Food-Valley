import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ActiveLink/ActiveLink.css';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "act" : ""} style={{ marginRight: "15px" }}>
            {children}
        </NavLink >
    );
};

export default ActiveLink;