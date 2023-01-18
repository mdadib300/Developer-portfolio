import React from 'react';
import image1 from '../../assets/services/code.png';
import image2 from '../../assets/services/code-block.png';
import image3 from '../../assets/services/laptop.png';

const Services = () => {
    return (
        <div className='mx-3 lg:mx-40 text-white md:hidden lg:block'>
            <h1 className="text-4xl font-semibold text-center my-10 lg:my-20">Services 🤝</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 text-secondary'>
                <div className='bg-primary mx-auto w-[270px] h-[240px] rounded-md p-10 shadow-md hover:shadow-xl pt-[110px]'>
                    <img src={image1} className='w-10' alt='Figma to HTML'></img>
                    <h5 className='text-xl font-semibold'>Figma<br />to HTML</h5>
                </div>
                <div className='bg-primary mx-auto w-[270px] h-[240px] rounded-md p-10 pt-[110px] shadow-md hover:shadow-xl'>
                    <img src={image3} className='w-10' alt='Front - End Web Development'></img>
                    <h5 className='text-xl font-semibold'>Front-end<br />Development</h5>
                </div>
                <div className='bg-primary mx-auto w-[270px] h-[240px] rounded-md p-10 pt-[110px] shadow-md hover:shadow-xl'>
                    <img src={image2
                    } className='w-10' alt='React.JS Development'></img>
                    <h5 className='text-xl font-semibold'>React.js<br />Development</h5>
                </div>
            </div>
        </div>
    );
};

export default Services;