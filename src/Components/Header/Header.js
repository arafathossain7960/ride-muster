import React from 'react';
import './Header.css';
import img from '../../images/logo.jpg'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <h3><img id='logo' src={img} alt="" /></h3>
                <h2>Ride Muster</h2>
            </div>
        </div>
    );
};

export default Header;