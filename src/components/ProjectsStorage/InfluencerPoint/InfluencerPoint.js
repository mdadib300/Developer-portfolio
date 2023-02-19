import React from 'react';
import influencer from '../../../assets/projects/Influencer-Point.png';

const InfluencerPoint = () => {
    return (
        <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>3. Influencer Point</h2>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                    <img src={influencer} alt='Influencer point' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0 shadow-xl'></img>
                    <div className='mr-0 lg:mr-10'>
                        <h2>Influencer point, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3, Tailwind CSS, DaisyUI. This webpage is fully responsive for mobile phone, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                            <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                            <div class="badge badge-outline mr-3">Tailwind CSS</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/Influencer-Point/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Influencer-Point' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default InfluencerPoint;