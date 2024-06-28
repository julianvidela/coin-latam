import React from 'react';
import "./LegalTerms.css";
import CustomizedTimeline from './timeline';

const TimelineSection = () => {
  return (
    <div className='h-[40rem] mt-8 z-10'>
      <div className='max-w-screen-sm mx-auto px-4'>
        <div className='p-4 mb-6 flex flex-col items-center rounded-lg shadow-lg gap-2'>
          <h2 className="text-lg lg:text-xl xl:text-[30px] font-light text-white">Todo nuestro <span className='text-[--color-text-blue]'>proceso</span> </h2>
          <p className="text-[var(--color-text-gray)]">La evolución de nuestro trabajo en investigación y desarrollo </p>
        </div>
      </div>
      <div className="ml-4">
        <CustomizedTimeline />
      </div>
    </div>
  )
}

export default TimelineSection;




