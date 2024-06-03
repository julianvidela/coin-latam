import React from 'react';

const Button = ({ text }) => {
    return (
        <button className='relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 hover:scale-105 transition'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                {text}
            </span>
        </button>
    );
};

export default Button;