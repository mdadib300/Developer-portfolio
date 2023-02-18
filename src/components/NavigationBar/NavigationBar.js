import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../assets/icons/portfolio.png';
import about from '../../assets/icons/info.png';

const NavigationBar = () => {
    return (
        <div id='navigation-bar-top'>
            <div className="navbar p-5">
                <div className="navbar-start">
                    <Link className='btn btn-ghost' to='/projects'>
                        <img src={portfolio} className='w-[30px]' alt='Portfolio'></img>
                        <span className="ml-2 hidden md:block">Portfolio</span>
                    </Link>
                </div>
                <div className="navbar-center">
                    <a href='/' className="text-2xl font-bold">DEVELOPER</a>
                </div>
                <div className="navbar-end">
                    <Link to='/about' className='btn btn-ghost'>
                        <img src={about} className='w-[30px]' alt='About me'></img>
                        <span className="ml-2 hidden md:block">About me</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;