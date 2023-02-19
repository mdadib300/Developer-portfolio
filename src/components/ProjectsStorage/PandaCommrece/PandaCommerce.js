import React from 'react';
import panda from '../../../assets/projects/PandaCommerce.png';

const PandaCommerce = () => {
    return (
        <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>2. Panda Commerce</h2>
                <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                    <img src={panda} alt='panda commerce' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0 shadow-xl'></img>
                    <div className='ml-0 lg:ml-10'>
                        <h2>Panda Commerce, an e-commerce landing page made with: HTML, CSS and Bootstrap. Some custom CSS styles are used. The site is fully responsive for mobile, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3">HTML</div>
                            <div class="badge badge-outline mr-3">CSS</div>
                            <div class="badge badge-outline">Bootstrap</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/Panda-commerce/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Panda-commerce' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PandaCommerce;