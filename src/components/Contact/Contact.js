import React from 'react';
import { FaLinkedinIn, FaYoutube, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='m-4 lg:m-10'>
            <h1 className="text-4xl font-semibold text-center my-5 md:my-10 lg:my-20">Contact info.</h1>
            <div>
                <h5 className='text-xl text-center mb-3'>Phone number: +880 1871 061620</h5>
                <h5 className='text-xl text-center mb-3'>Email Address: mdadib300@gmail.com</h5>
                <h5 className='text-xl text-center'>Other social links: </h5>
                <div className='flex justify-center mt-2'>
                    <div className='w-52 flex justify-around'>
                        <a href='https://www.linkedin.com/in/adib-chowdhury-73b301225/' target='blank' className='text-2xl'><FaLinkedinIn /></a>
                        <a href='https://youtu.be/sZnQv2f6Zvs' target='blank' className='text-2xl'><FaYoutube /></a>
                        <a href='https://github.com/mdadib300' target='blank' className='text-2xl'><FaGithub /></a>
                        <a href='https://www.instagram.com/_adib_chowdhury_/' target='blank' className='text-2xl'><FaInstagram /></a>
                        <a href='https://web.facebook.com/profile.php?id=100083966059702' target='blank' className='text-2xl'><FaFacebook /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;