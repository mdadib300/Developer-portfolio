import React from 'react';
import parlour from '../../../assets/projects/Jerins-parlour.png';

const JerinParlour = () => {
    return (
        <div className='w-3/4 mx-auto mb-7'>
            <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>5. Jerin's Parlour</h2>
            <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                <img src={parlour} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0 shadow-xl'></img>
                <div className='mr-0 lg:mr-10'>
                    <h2>Jerin's Parlour, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3, React, Bootstrap, React-Bootstrap. React Router and Bootstrap icons are also used. This webpage is fully responsive for mobile phone, tablet, laptop and desktop.</h2>
                    <div className='mt-5'>
                        <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                        <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                        <div class="badge badge-outline mr-3">React</div>
                        <div class="badge badge-outline mr-3">Bootstrap</div>
                        <div class="badge badge-outline hidden md:inline">React-Bootstrap</div>
                    </div>
                    <div className='mt-8'>
                        <a href='https://jerin-s-parlour-2023.netlify.app/' target='blank' className='myBtn mr-5'>Live Website</a>
                        <a href='https://github.com/mdadib300/Jerin-s-parlour' target='blank' className='myBtn'>Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JerinParlour;