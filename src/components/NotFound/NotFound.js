import React from 'react';
import notFound from '../../assets/icons/notFound.png';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <img src={notFound} alt='Page not found | 404' className='w-60'></img>
            <h2 className='text-center text-3xl my-10'>404: Page Not Found ☹</h2>
        </div>
    );
};

export default NotFound;