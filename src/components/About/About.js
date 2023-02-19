import React from 'react';
import about from '../../assets/icons/info.png';

const About = () => {
    return (
        <div className='m-4 lg:m-10'>
            <div className='flex items-center justify-center'>
                <h1 className="text-4xl font-semibold text-center my-5 md:my-10 lg:my-16">About me & my skills</h1>
                <img src={about} alt='About me' className='w-[40px] ml-2'></img>
            </div>
            <p className='text-xl'>
                Hello there, I am Md. Adib Chowdhury, a Front-End Web Developer. I am from Dhaka, Bangladesh. I have completed my Secondary education. Now, I am mastering Full-Stack Web Development, getting Higher Secondary education and Freelancing. I am always hard-working, honest and punctual in my work.<br />
                I started learning HTML, CSS and its Framework (Bootstrap and Tailwind). Then, I made some webpages which are responsive, static and don't interact.
                After that, I mastered the core concepts of JavaScript and ES6. Additionally, I learned about API and mastered Debugging. Combining these skills, I solved 30+ problems in JavaScript, made few interactive webpages and debugged other's crashed websites.
                After mastering React, React Router DOM, I made some SPA (Single Page Application). To implement Authentication system and make Private Routes in websites, I explored and mastered Firebase and Context API.
                Gathering all of the skills, I made websites which are interactive, interesting and realistic. Further, I am also skilled in Microsoft word, Power Point and Excel.<br />
                Thank you.
            </p>
        </div>
    );
};

export default About;