import React from 'react';
import "./LegalTerms.css";
import CustomizedTimeline from './timeline';

const TimelineSection = () => {
  return (
    <div className='py-6 bg-red mt-10'>
      <div className='max-w-screen-sm mx-auto px-4'>
        <div className='p-4 mb-6 flex flex-col items-center rounded-lg shadow-lg'>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-purple-700">Nuestro proceso</h2>
          <p className="text-white">La evolución de nuestro trabajo en investigación y desarrollo </p>
        </div>
      </div>
      <div className="ml-4">
        <CustomizedTimeline />
      </div>
    </div>
  )
}

export default TimelineSection;




