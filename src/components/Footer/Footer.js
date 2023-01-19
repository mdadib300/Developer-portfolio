import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-secondary mt-5 md:mt-10 lg:mt-16">
            <div className="grid grid-flow-col gap-4">
                <a href='/#navigation-bar-top' className="link link-hover font-semibold">Home</a>
                <Link to='/about' className="link link-hover font-semibold">About me</Link>
                <Link to='/contact' className="link link-hover font-semibold">Contact</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/mdadib300' target='blank' className='text-2xl'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/adib-chowdhury-73b301225/' target='blank' className='text-2xl'><FaLinkedinIn /></a>
                    <a href='https://www.youtube.com/channel/UCemDCQe6q0EX9BppRYApN1Q' target='blank' className='text-2xl'><FaYoutube /></a>
                </div>
            </div>
            <div>
                <p className='font-semibold'>Copyright © 2023 - All right reserved | Md. Adib Chowdhury</p>
            </div>
        </footer>
    );
};

export default Footer;