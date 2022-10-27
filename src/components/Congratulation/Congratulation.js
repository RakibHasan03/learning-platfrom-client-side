import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../Images/88860-success-animation.json'
const Congratulation = () => {
    return (
        <div>
          
            <Lottie animationData={reader} loop={true} className='w-96 mx-auto'/>
        </div>
    );
};

export default Congratulation;