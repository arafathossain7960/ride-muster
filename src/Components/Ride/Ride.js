import React from 'react';
import './Ride.css';
const Ride = ({ride, ridingTimingHandler}) => {
    const {name, img, benefits, spentTime}=ride;
    return (
        <div>
            <img src={img} alt="Rider" />
            <h4>{name}</h4>
            <p>{benefits.slice(0, 40)}</p>
            <p>{spentTime}</p>
            <button onClick={()=>ridingTimingHandler(spentTime)}>add your ride</button>
        </div>
    );
};

export default Ride;