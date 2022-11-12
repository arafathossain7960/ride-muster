import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { POSITION } from 'react-toastify/dist/utils';
const CompleteActivities = () => {
    
const handleToast =()=>{
    toast.success("Activities complete!!!",{
        position:"top-center",
        
    });
    
}

    return (
        <div>
              <button onClick={handleToast}>Complete Riding</button>
              <ToastContainer />
        </div>
    );
};

export default CompleteActivities;