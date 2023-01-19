import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div id='navigation-bar-top'>
            <div className="navbar bg-primary text-secondary">
                <div className="navbar-start">
                    <Link className='btn btn-ghost' to='/projects'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        <span className="ml-2 hidden md:block">Portfolio</span>
                    </Link>
                </div>
                <div className="navbar-center">
                    <a href='/' className="text-2xl font-bold">DEVELOPER</a>
                </div>
                <div className="navbar-end">
                    <Link to='/about' className='btn btn-ghost'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="ml-2 hidden md:block">About me</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;