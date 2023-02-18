import React from 'react';
import portfolio from '../../assets/icons/portfolio.png';
import bank from '../../assets/projects/Bank-Transaction.png';
import panda from '../../assets/projects/PandaCommerce.png';
import penguin from '../../assets/projects/Penguin-Fashion.png';
import ideaBoard from '../../assets/projects/LeaderBoard.png';
import parlour from '../../assets/projects/Jerins-parlour.png';
import influencer from '../../assets/projects/Influencer-Point.png';
import IdeaBoard from './IdeaBoard/IdeaBoard';
import car from '../../assets/projects/car-doctor.png';
import earn from '../../assets/projects/earnEdit.png';

const ProjectsStorage = () => {
    return (
        <div className='m-3'>

            <div className='flex items-center justify-center'>
            <h1 className="text-4xl font-semibold text-center my-5 md:my-10 lg:my-20">Portfolio</h1>
                <img src={portfolio} alt='Portfolio' className='w-[40px] ml-2'></img>
            </div>
            
            <IdeaBoard />

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>2. Panda Commerce</h2>
                <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                    <img src={panda} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='ml-0 lg:ml-10'>
                        <h2>Panda Commerce, an e-commerce landing page made with: HTML, CSS and Bootstrap. Some custom CSS styles are used. The site is fully responsive for mobile, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3">HTML</div>
                            <div class="badge badge-outline mr-3">CSS</div>
                            <div class="badge badge-outline">Bootstrap</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/Panda-commerce/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Panda-commerce' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>3. LeaderBoard</h2>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                    <img src={ideaBoard} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='mr-0 lg:mr-10'>
                        <h2>Made with: HTML and CSS. Main objectives of this webpage are Cards, Flexbox and Grid layout. This site isn't responsive. Only suitable for laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3">HTML</div>
                            <div class="badge badge-outline">CSS</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/Leader-Board/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Leader-Board' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>4. Penguin Fashion</h2>
                <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                    <img src={penguin} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='ml-0 lg:ml-10'>
                        <h2>Penguin Fashion, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3. No framework is used. This webpage is responsive for mobile phone, laptop and desktop. The main objectives of the webpage are Flexbox, Grid layout and Responsiveness.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3">HTML</div>
                            <div class="badge badge-outline">CSS</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/penguin-fashion/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/penguin-fashion/' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>5. United Bank of Adib - UBA</h2>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                    <img src={bank} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='mr-0 lg:mr-10'>
                        <h2>A webpage for simple bank calculation. Made with: HTML, CSS and JavaScript. This site is fully responsive for mobile, tablet, laptop and desktop. Main objective of this webpage is JavaScript DOM Manipulation.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3">HTML</div>
                            <div class="badge badge-outline mr-3">CSS</div>
                            <div class="badge badge-outline mr-3 hidden md:inline">Tailwind CSS</div>
                            <div class="badge badge-outline">JavaScript</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/Bank-Transaction/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Bank-Transaction' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>6. Influencer Point</h2>
                <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                    <img src={influencer} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='ml-0 lg:ml-10'>
                        <h2>Influencer point, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3, Tailwind CSS, DaisyUI. This webpage is fully responsive for mobile phone, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                            <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                            <div class="badge badge-outline mr-3">Tailwind CSS</div>
                            <div class="badge badge-outline">DaisyUI</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/Influencer-Point/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Influencer-Point' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>7. EarnEdit</h2>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                    <img src={earn} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='mr-0 lg:mr-10'>
                        <h2>EarnEdit, for calculating expenses and savings. Made with: HTML, CSS and JavaScript. This site isn't responsive. suitable for laptop and desktop. Main objective is JavaScript DOM Manipulation.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3">HTML</div>
                            <div class="badge badge-outline mr-3">CSS</div>
                            <div class="badge badge-outline">JavaScript</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/EarnEdit/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/EarnEdit' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>8. Jerin's Parlour</h2>
                <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                    <img src={parlour} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='ml-0 lg:ml-10'>
                        <h2>Jerin's Parlour, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3, React, Bootstrap, React-Bootstrap. React Router and Bootstrap icons are also used. This webpage is fully responsive for mobile phone, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                            <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                            <div class="badge badge-outline mr-3">React</div>
                            <div class="badge badge-outline mr-3">Bootstrap</div>
                            <div class="badge badge-outline hidden md:inline">React-Bootstrap</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://jerin-s-parlour-2023.netlify.app/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Jerin-s-parlour' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>9. Car Doctor</h2>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                    <img src={car} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='mr-0 lg:mr-10'>
                        <h2>Car Doctor, an e-commerce webpage. Made with: HTML, CSS, React, Tailwind CSS and DaisyUI. React Router and some custom css are also used. Fully responsive for mobile, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                            <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                            <div class="badge badge-outline mr-3">React</div>
                            <div class="badge badge-outline mr-3">Tailwind CSS</div>
                            <div class="badge badge-outline">DaisyUI</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://car-doctor-2023.netlify.app/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Car-Doctor' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsStorage;