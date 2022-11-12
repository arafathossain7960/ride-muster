import React from 'react';
import './Brake.css';

const Brake = ({brakedTimeHandler}) => {
    return (
        <div className='brakeBtn'>
            <span>Take your brake</span>
              <div>
                <button onClick={brakedTimeHandler} value="20">20</button>
                <button onClick={brakedTimeHandler} value="30">30</button>
                <button onClick={brakedTimeHandler} value="15">15</button>
                <button onClick={brakedTimeHandler} value="25">25</button>
            </div>
        </div>
    );
};

export default Brake;