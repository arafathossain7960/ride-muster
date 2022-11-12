import React from 'react';
import './AllRides.css';
import Ride from '../Ride/Ride';

const AllRides = ({rides}) => {
    return (
        <div className='allRides'>
             {
                    rides.map(ride => <Ride 
                    ride={ride}
                    key={ride.id}
                    ></Ride>)
                 }
        </div>
    );
};

export default AllRides;