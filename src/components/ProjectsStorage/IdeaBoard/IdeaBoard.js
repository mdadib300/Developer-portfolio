import React from 'react';
import ideaBoard from '../../../assets/projects/idea-board.png';

const IdeaBoard = () => {
    return (
        <div className='w-3/4 mx-auto mb-7'>
            <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>1. Idea-Board</h2>
            <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                <img src={ideaBoard} alt='Idea board' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0 shadow-xl'></img>
                <div className='mr-0 lg:mr-10'>
                    <h2>Idea-Board, made with HTML, HTML5, CSS and CSS3. Flexbox and Grid layout are mainly used. Didn't take help of any framework. Google font is used to provide a better typography. This site is perfectly responsive for mobile phone, tablet, laptop and desktop.</h2>
                    <div className='mt-5'>
                        <div class="badge badge-outline mr-3">HTML</div>
                        <div class="badge badge-outline">CSS</div>
                    </div>
                    <div className='mt-8'>
                        <a href='https://mdadib300.github.io/idea-board/' target='blank' className='myBtn mr-5'>Live Website</a>
                        <a href='https://github.com/mdadib300/idea-board' target='blank' className='myBtn'>Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaBoard;