import React from 'react';
import demo from "../../assets/demo.png";

const Summary = () => {
  return (
    <>
    <div id="summary" className='p-10 bg-gray-900 text-center'>
      <h2 className='font-extrabold text-4xl text-white leading-tight'>Gain Clarity and Insight into Testing Coverage</h2>
      <p className='text-white mt-4 text-lg'>Track Your Testing Efforts for Every Feature with Our Web App!</p>
      <div className='gif-container w-2/3 md:w-1/2 mx-auto'>
        <img src={demo} alt='GIF' className='w-full h-auto' />
    </div>  
    </div>
    <div className='bg-bg1 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed'></div>
    </>
  )
};

export default Summary;