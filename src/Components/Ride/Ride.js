import React from 'react';
import './Ride.css';

const Ride = ({ride, ridingTimingHandler}) => {
    
    const {name, img, benefits, spentTime}=ride;

    return (
        <div className='singleRide'>
            <img src={img} alt="Rider" />
         <div className='rideInfo'>
            <h4>{name}</h4>
            <p>{benefits.slice(0, 30)}</p>
            <p> During :{spentTime} m</p>
         </div>
            <button onClick={()=>ridingTimingHandler(spentTime)}>Join To Ride</button>
        </div>
    );
};

export default Ride;