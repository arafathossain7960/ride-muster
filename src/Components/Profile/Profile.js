import React from 'react';
import './Profile.css';
import img from '../../images/profile.png';

const Profile = () => {
    return (
        <div className='profile'>
            <img src={img} alt="" />

          <div className="info">
          <h3>Mir Sadiq Khan</h3>
            <p>Cycling muster</p>
          </div>
        </div>
    );
};

export default Profile;