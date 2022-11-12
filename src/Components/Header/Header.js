import React from 'react';
import './Header.css';
import img from '../../images/logo.jpg'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img id='logo' src={img} alt="" />
                <h1>Ride Muster</h1>
            </div>
        
        </div>
    );
};

export default Header;