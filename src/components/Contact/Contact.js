import React from 'react';
import contact from '../../assets/icons/contact.png';
import facebook from '../../assets/icons/fb.png';
import insta from '../../assets/icons/insta.png';
import git from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/in.png';
import youtube from '../../assets/icons/youtube.png';

const Contact = () => {
    return (
        <div className='m-4 lg:m-10'>
            <div className='flex items-center justify-center'>
                <h1 className="text-4xl font-semibold text-center my-5 md:my-10 lg:my-20">Contact info.</h1>
                <img src={contact} alt='Contact information' className='w-[40px] ml-2'></img>
            </div>
            <div>
                <h5 className='text-xl text-center mb-3'>Phone number: +880 1871 061620</h5>
                <h5 className='text-xl text-center mb-3'>Email Address: mdadib300@gmail.com</h5>
                <h5 className='text-xl text-center'>Other links: </h5>
                <div className='flex items-center justify-center mt-5'>
                    <a href='https://www.linkedin.com/in/adib-chowdhury-73b301225/' target='blank' className='text-2xl'>
                        <img src={linkedin} alt='LinkedIn' className='w-9 mr-5'></img>
                    </a>
                    <a href='https://youtu.be/sZnQv2f6Zvs' target='blank' className='text-2xl'>
                        <img src={youtube} alt='Youtube' className='w-9 mr-5'></img>
                    </a>
                    <a href='https://github.com/mdadib300' target='blank' className='text-2xl'>
                        <img src={git} alt='Git Hub' className='w-9 mr-5'></img>
                    </a>
                    <a href='https://www.instagram.com/_adib_chowdhury_/' target='blank' className='text-2xl'>
                        <img src={insta} alt='Instagram' className='w-9 mr-5'></img>
                    </a>
                    <a href='https://web.facebook.com/profile.php?id=100083966059702' target='blank' className='text-2xl'>
                        <img src={facebook} alt='Facebook' className='w-9'></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;