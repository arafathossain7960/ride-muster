import React, { useState } from 'react';
import { getMinute, setMinute } from '../../helpers/localStrorage';
import ActivitiesOverView from '../activitiesOverView/ActivitiesOverView';
import Brake from '../Brake/Brake';
import CompleteActivities from '../CompleteActivaties/CompleteActivities';
import Profile from '../Profile/Profile';
import './ReportSheet.css';

const ReportSheet = ({ ridingTime}) => {
// getItem from local storage
 const initialMinute =  getMinute('brakeTime');
let [brakingTime, setBrakingTime]=useState(initialMinute || 0);

    const brakedTimeHandler =(e)=>{
       const brakeMinute = parseInt(e.target.value);
       
       // set item to local storage
       setMinute('brakeTime', brakeMinute);
       const initialMinute =  getMinute('brakeTime');
       setBrakingTime(initialMinute);

    }
    

    return (
        <div className='reportSheet'>
            <Profile></Profile>
            <Brake brakedTimeHandler={brakedTimeHandler}></Brake>
          <ActivitiesOverView 
          ridingTime={ridingTime}
          brakingTime={brakingTime}
          ></ActivitiesOverView>
            <CompleteActivities></CompleteActivities>
        </div>
    );
};

export default ReportSheet;