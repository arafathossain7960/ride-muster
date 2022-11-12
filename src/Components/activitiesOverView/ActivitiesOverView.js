import React from 'react';
import './ActivitiesOverView.css';

const ActivitiesOverView = ({ridingTime,brakingTime }) => {
    return (
        <div className='activitiesOverView'>
            <h4>Activities Over view</h4>
              <p>Riding Time : {ridingTime}</p>
            
            <p>Total brake time : {brakingTime}</p>
        </div>
    );
};

export default ActivitiesOverView;