import React from 'react';

const Services = () => {
    return (
        <div className='mx-3 lg:mx-40 md:hidden lg:block'>
            <h1 className="text-4xl font-semibold text-center my-10 lg:my-20">Services </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 text-secondary'>
                <div className='bg-primary mx-auto w-[270px] h-[240px] rounded-md p-10 shadow-md hover:shadow-xl pt-[110px]'>
                    <h5 className='text-xl font-semibold'>Figma<br />to HTML</h5>
                </div>
                <div className='bg-primary mx-auto w-[270px] h-[240px] rounded-md p-10 pt-[110px] shadow-md hover:shadow-xl'>
                    <h5 className='text-xl font-semibold'>Front-end<br />Development</h5>
                </div>
                <div className='bg-primary mx-auto w-[270px] h-[240px] rounded-md p-10 pt-[110px] shadow-md hover:shadow-xl'>
                    <h5 className='text-xl font-semibold'>React.js<br />Development</h5>
                </div>
            </div>
        </div>
    );
};

export default Services;