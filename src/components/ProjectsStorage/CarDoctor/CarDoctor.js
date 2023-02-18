import React from 'react';
import car from '../../../assets/projects/car-doctor.png';

const CarDoctor = () => {
    return (
        <div className='w-3/4 mx-auto mb-7'>
            <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>6. Car Doctor</h2>
            <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                <img src={car} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0 shadow-xl'></img>
                <div className='ml-0 lg:ml-10'>
                    <h2>Car Doctor, an e-commerce webpage. Made with: HTML, CSS, React, Tailwind CSS and DaisyUI. React Router and some custom css are also used. Fully responsive for mobile, tablet, laptop and desktop.</h2>
                    <div className='mt-5'>
                        <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                        <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                        <div class="badge badge-outline mr-3">React</div>
                        <div class="badge badge-outline mr-3">Tailwind CSS</div>
                        <div class="badge badge-outline">DaisyUI</div>
                    </div>
                    <div className='mt-8'>
                        <a href='https://car-doctor-2023.netlify.app/' target='blank' className='myBtn mr-5'>Live Website</a>
                        <a href='https://github.com/mdadib300/Car-Doctor' target='blank' className='myBtn'>Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDoctor;