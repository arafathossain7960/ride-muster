import React, { useEffect, useState } from 'react';
import AllRides from '../AllRides/AllRides';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
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
        <div id='home'>
            
             <div className='homeContainer'>
              <div>
              <Header></Header>
              <AllRides rides={rides}
              ridingTimingHandler={ridingTimingHandler}
              >
              </AllRides>
               
               </div>
          
               <div className='homeReport'>
                 <ReportSheet
                 ridingTime={ridingTime}
                 ></ReportSheet>
               </div>
            </div>
            <Blogs></Blogs>
        </div>
    );
};


export default Home;