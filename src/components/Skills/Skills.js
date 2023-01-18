import React from 'react';

const Skills = () => {
    return (
        <div className='m-3'>

            <h1 className="text-4xl font-semibold text-center my-10 lg:my-20 text-white">Skills 🦾</h1>

            <div className='bg-primary w-3/4 mx-auto text-secondary p-5 md:py-20 rounded-md md:flex justify-center'>
                <div className='mr-5 pr-5 md:border-r-4 border-secondary'>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>HTML</h4>
                        <progress className="progress progress-secondary w-56" value="80" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>CSS</h4>
                        <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>Bootstrap</h4>
                        <progress className="progress progress-secondary w-56" value="55" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>Tailwind CSS</h4>
                        <progress className="progress progress-secondary w-56" value="85" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>DaisyUI</h4>
                        <progress className="progress progress-secondary w-56" value="80" max="100"></progress>
                    </div>
                </div>

                <div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>JavaScript</h4>
                        <progress className="progress progress-secondary w-56" value="65" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>React</h4>
                        <progress className="progress progress-secondary w-56" value="60" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>React Bootstrap</h4>
                        <progress className="progress progress-secondary w-56" value="60" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>Firebase</h4>
                        <progress className="progress progress-secondary w-56" value="65" max="100"></progress>
                    </div>
                    <div className='mb-3'>
                        <h4 className='text-2xl'>Figma</h4>
                        <progress className="progress progress-secondary w-56" value="60" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;