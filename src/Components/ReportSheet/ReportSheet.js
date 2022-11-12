import React, { useState } from 'react';
import { getMinute, setMinute } from '../../helpers/localStrorage';
import CompleteActivities from '../CompleteActivaties/CompleteActivities';
import './ReportSheet.css';
const ReportSheet = ({ ridingTime}) => {
    const initialMinute =  getMinute('brakeTime');
    // console.log(initialMinute)
let [brakingTime, setBrakingTime]=useState(initialMinute || 0);

    const brakedTimeHandler =(e)=>{
       const brakeMinute = parseInt(e.target.value);
       setMinute('brakeTime', brakeMinute);
       const initialMinute =  getMinute('brakeTime');
       setBrakingTime(initialMinute);


   
    }
    
    //  localStorage.getItem('brakingTime');

    return (
        <div>
            <div>
                <button onClick={brakedTimeHandler} value="20">20</button>
                <button onClick={brakedTimeHandler} value="30">30</button>
                <button onClick={brakedTimeHandler} value="15">15</button>
                <button onClick={brakedTimeHandler} value="25">25</button>
            </div>
            <h1>Riding Time : {ridingTime}</h1>
            <h3>this is a cart sheet</h3>
            <h5>Total brake time : {brakingTime}</h5>
            <CompleteActivities></CompleteActivities>
        </div>
    );
};

export default ReportSheet;