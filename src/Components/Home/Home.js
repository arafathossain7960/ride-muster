import React, { useEffect, useState } from 'react';
import AllRides from '../AllRides/AllRides';
import Header from '../Header/Header';
import ReportSheet from '../ReportSheet/ReportSheet';
import './Home.css';

const Home = () => {
    const [rides, setRide]=useState([]);
    const [ridingTime, setRidingTime]=useState(0);

    useEffect(()=>{
        fetch('fakeData.JSON')
        .then(res => res.json())
        .then(data => setRide(data))
    },[]);
    
    // Ride timing handler
    const ridingTimingHandler =(minutes)=>{
        const newRidingTime = ridingTime + minutes;
        setRidingTime(newRidingTime)

    } 

    return (
        <div>
            
             <div className='homeContainer'>
               
              <div>
              <Header></Header>
              <AllRides rides={rides}
              ridingTimingHandler={ridingTimingHandler}
              >

              </AllRides>
               
               </div>
          
               <div>
                 <ReportSheet
                 ridingTime={ridingTime}
                 ></ReportSheet>
               </div>
            </div>
        </div>
    );
};

export default Home;