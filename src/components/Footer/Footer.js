import React from 'react';
import { Link } from 'react-router-dom';
import git from '../../assets/icons/github.png';
import yt from '../../assets/icons/youtube.png';
import linkedin from '../../assets/icons/in.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-white mt-5 md:mt-10 lg:mt-16">
            <div className="grid grid-flow-col gap-4">
                <a href='/#navigation-bar-top' className="link link-hover text-lg">Home</a>
                <Link to='/about' className="link link-hover text-lg">About</Link>
                <Link to='/contact' className="link link-hover text-lg">Contact</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/mdadib300' target='blank' className='text-2xl'>
                        <img src={git} alt='Github' className='w-9'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/md-adib-chowdhury-2203ba270/' target='blank' className='text-2xl'>
                        <img src={linkedin} alt='LinkedIn' className='w-9'></img>
                    </a>
                    <a href='https://www.youtube.com/channel/UCemDCQe6q0EX9BppRYApN1Q' target='blank' className='text-2xl'>
                        <img src={yt} alt='Youtube' className='w-9'></img>
                    </a>
                </div>
            </div>
            <div>
                <p className='text-lg'>Copyright © 2023 - All right reserved | Md. Adib Chowdhury</p>
            </div>
        </footer>
    );
};

export default Footer;