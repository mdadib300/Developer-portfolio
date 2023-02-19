import React from 'react';
import skills from '../../assets/icons/skillLogo.png';
import html from '../../assets/icons/skills/html.png';
import css from '../../assets/icons/skills/css-3.png';
import bootstrap from '../../assets/icons/skills/bootstrap.png';
import tailwind from '../../assets/icons/skills/tailwind.png';
import js from '../../assets/icons/skills/js.png';
import react from '../../assets/icons/skills/react.png';

const Skills = () => {
    return (
        <div className='m-3'>

            <div className='flex items-center justify-center'>
                <h1 className="text-4xl font-semibold text-center my-10 lg:my-20">Skills</h1>
                <img src={skills} alt='My skills' className='w-[40px] ml-2'></img>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
                <div className='hover:shadow-md w-40 p-5 flex items-center justify-center flex-col rounded-md mx-auto'>
                    <img src={html} alt='HTML' className='w-[80px] mb-3'></img>
                    <button className='skillBtn'>HTML</button>
                </div>
                <div className='hover:shadow-md w-40 p-5 flex items-center justify-center flex-col rounded-md mx-auto'>
                    <img src={css} alt='CSS' className='w-[80px] mb-3'></img>
                    <button className='skillBtn'>CSS</button>
                </div>
                <div className='hover:shadow-md w-40 p-5 flex items-center justify-center flex-col rounded-md mx-auto'>
                    <img src={bootstrap} alt='Bootstrap' className='w-[80px] mb-3'></img>
                    <button className='skillBtn'>Bootstrap</button>
                </div>
                <div className='hover:shadow-md w-40 p-5 flex items-center justify-center flex-col rounded-md mx-auto'>
                    <img src={tailwind} alt='Tailwind CSS' className='w-[80px] mb-3'></img>
                    <button className='skillBtn'>Tailwind</button>
                </div>
                <div className='hover:shadow-md w-40 p-5 flex items-center justify-center flex-col rounded-md mx-auto'>
                    <img src={js} alt='JavaScript' className='w-[80px] mb-3'></img>
                    <button className='skillBtn'>JavaScript</button>
                </div>
                <div className='hover:shadow-md w-40 p-5 flex items-center justify-center flex-col rounded-md mx-auto'>
                    <img src={react} alt='React.JS' className='w-[80px] mb-3'></img>
                    <button className='skillBtn'>React.js</button>
                </div>
            </div>

        </div>
    );
};

export default Skills;