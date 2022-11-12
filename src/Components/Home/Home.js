import React, { useEffect, useState } from 'react';
import AllRides from '../AllRides/AllRides';
import Header from '../Header/Header';
import ReportSheet from '../ReportSheet/ReportSheet';
import './Home.css';

const Home = () => {
    const [rides, setRide]=useState([]);


    useEffect(()=>{
        fetch('fakeData.JSON')
        .then(res => res.json())
        .then(data => setRide(data))
    },[]);
    
    return (
        <div>
            
             <div className='homeContainer'>
               
              <div>
              <Header></Header>
              <AllRides rides={rides}>

              </AllRides>
               
               </div>
          
               <div>
                 <ReportSheet></ReportSheet>
               </div>
            </div>
        </div>
    );
};

export default Home;