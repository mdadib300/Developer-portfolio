import React from 'react';
import { Link } from 'react-router-dom';

const Email = () => {
    return (
        <div className='App my-32 mx-4'>
            <h2 className='text-2xl mb-5'>If you want to hire me then send an email following these details:</h2>
            <p className='text-xl'>Email Address: mdadib300@gmail.com</p>
            <p className='text-xl'>You email subject should be: 'Want to Hire You'</p>
            <div className='mt-10'>
                <a className='myBtn my-5' href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='blank'>Send Email</a>
                <Link to='/' className='myBtn ml-5'>Jump back to Homepage</Link>
            </div>
        </div>
    );
};

export default Email;