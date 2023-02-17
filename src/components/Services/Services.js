import React from 'react';
import serviceLogo from '../../assets/icons/service.png';
import figToHtml from '../../assets/icons/figma.png';
import frontEnd from '../../assets/icons/frontEnd.png';
import reactJs from '../../assets/icons/reactJs.png';

const Services = () => {
    return (
        <div className='mx-3 lg:mx-40 md:hidden lg:block'>
            <div className='flex items-center justify-center'>
                <h1 className="text-4xl font-semibold my-10 lg:my-20">Services</h1>
                <img src={serviceLogo} className="w-[40px] ml-2" alt='Services'></img>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 text-secondary'>

                <div className='mx-auto w-[270px] h-[240px] rounded-md shadow-xl hover:shadow-2xl flex justify-center flex-col items-center'>
                    <img src={figToHtml} alt='Figma to HTML' className='w-20'></img>
                    <h5 className='text-xl font-semibold'>Figma to HTML</h5>
                </div>

                <div className='mx-auto w-[270px] h-[240px] rounded-md shadow-xl hover:shadow-2xl flex justify-center flex-col items-center'>
                    <img src={frontEnd} alt='Front End Development' className='w-20 mb-2'></img>
                    <h5 className='text-xl font-semibold'>Front-end <br />Development</h5>
                </div>

                <div className='mx-auto w-[270px] h-[240px] rounded-md shadow-xl hover:shadow-2xl flex justify-center flex-col items-center'>
                    <img src={reactJs} alt='React.js development' className='w-20 mb-2'></img>
                    <h5 className='text-xl font-semibold'>React.js Development</h5>
                </div>
            </div>
        </div>
    );
};

export default Services;