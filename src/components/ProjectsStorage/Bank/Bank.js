import React from 'react';
import bank from '../../../assets/projects/Bank-Transaction.png';

const Bank = () => {
    return (
        <div className='w-3/4 mx-auto mb-7'>
            <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>4. United Bank of Adib - UBA</h2>
            <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                <img src={bank} alt='United bank of Adib' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0 shadow-xl'></img>
                <div className='ml-0 lg:ml-10'>
                    <h2>A webpage for simple bank calculation. Made with: HTML, CSS and JavaScript. This site is fully responsive for mobile, tablet, laptop and desktop. Main objective of this webpage is JavaScript DOM Manipulation.</h2>
                    <div className='mt-5'>
                        <div class="badge badge-outline mr-3">HTML</div>
                        <div class="badge badge-outline mr-3">CSS</div>
                        <div class="badge badge-outline mr-3 hidden md:inline">Tailwind CSS</div>
                        <div class="badge badge-outline">JavaScript</div>
                    </div>
                    <div className='mt-8'>
                        <a href='https://mdadib300.github.io/Bank-Transaction/' target='blank' className='myBtn mr-5'>Live Website</a>
                        <a href='https://github.com/mdadib300/Bank-Transaction' target='blank' className='myBtn'>Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bank;