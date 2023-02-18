import React from 'react';
import testimonial from '../../assets/icons/testimonials.png';
import star from '../../assets/icons/star.png';
import client1 from '../../assets/testimonials/blank.jpg';
import client2 from '../../assets/testimonials/rafi.jpg';
import client3 from '../../assets/testimonials/shuvo.jpg';

const Testimonials = () => {
    return (
        <div className='m-3'>

            <div className='flex items-center justify-center'>
                <h1 className="text-4xl font-semibold text-center my-10 lg:my-20">Testimonials</h1>
                <img src={testimonial} alt='Testimonials' className='w-[40px] ml-2'></img>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-secondary'>

                <div className="w-80 mx-auto shadow-xl rounded-md">
                    <div className='flex items-center'>
                        <div className="w-20 mx-7 mt-5 mask mask-hexagon">
                            <img alt='happy client' src={client1} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Amit Kumar</h2>
                            <h2 className="text-xl font-bold">India</h2>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className='font-semibold'>Mr. Adib's work is awesome. He designed and developed my E-commerce website and it was just awesome! And, he charges a reasonable price for his excellent work.
                            I am giving 5 stars to him for all his good qualities.
                        </p>
                        <div className='flex items-center'>
                            <h1 className="text-xl font-bold">Ratings:</h1>
                            <div>
                                <img src={star} alt='Rating' className='w-6 inline ml-2'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-80 mx-auto shadow-xl rounded-md">
                    <div className='flex items-center'>
                        <div className="w-20 mx-7 mt-5 mask mask-hexagon">
                            <img alt='happy client' src={client2} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Ariful Rafi</h2>
                            <h2 className="text-xl font-bold">Bangladesh</h2>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className='font-semibold'>Excellent! working with Adib was great. Thanks to his knowledge and determination. Our website looks great and functions are really updated. I can highly recommend Adib as a standard front - end web developer.</p>
                        <div className='flex items-center'>
                            <h1 className="text-xl font-bold">Ratings:</h1>
                            <div>
                                <img src={star} alt='Rating' className='w-6 inline ml-2'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-80 mx-auto shadow-xl rounded-md block md:hidden lg:block">
                    <div className='flex items-center'>
                        <div className="w-20 mx-7 mt-5 mask mask-hexagon">
                            <img alt='happy client' src={client3} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Shahariar Shuvo</h2>
                            <h2 className="text-xl font-bold">Bangladesh</h2>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className='font-semibold'>Thanks Adib for your work. It was really fast and it was also perfectly done. I got it nicely finished. Thanks for the work. Appreciate it a lot!!</p>
                        <div className='flex items-center'>
                            <h1 className="text-xl font-bold">Ratings:</h1>
                            <div>
                                <img src={star} alt='Rating' className='w-6 inline ml-2'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                                <img src={star} alt='Rating' className='w-6 inline ml-1'></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;