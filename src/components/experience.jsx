import React, { useState } from 'react';

const Experience = ({title, time, degree, description }) => {

  return (
    <div className="flex flex-col my-5 ml-40 ">

            
      <div className="flex flex-row justify-between py-5">
        <div>
        <h1 className="text-white text-[20px] font-bold mr-60">{title}</h1>
        <h3 className="text-white text-[18px]">{degree}</h3>
        </div>
        <p className="text-white opacity-70 text-[16px] mr-40">{time}</p>
      </div>
       


      <p className="text-white opacity-70 text-[16px] w-[85%]">{description}</p>

    </div>
  );
}

export default Experience;
