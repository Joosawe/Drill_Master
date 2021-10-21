import React from 'react';
import  {Link} from 'react-router-dom';
import {stack as Menu} from 'react-burger-menu';
import './sidebar.css';

export default props =>
{
    return (
       
        <Menu {...props}>
            <Link to = "/" className = 'menu-item'> Home</Link>
            <Link to = "/Services" className = 'menu-item'> Services</Link>
            <Link to = "/ContactUs" className = 'menu-item'> Contact Us</Link>
            <Link to = "/Experttips" className = 'menu-item'> Expert Tips</Link>
            <Link to = "/products" className = 'menu-item'>Products</Link>
            <Link to = "/Login" className = 'menu-item'> Log in</Link>
            <Link to = "/signup" className = 'menu-item'> Sign Up</Link>
        </Menu>
        
    );
}
