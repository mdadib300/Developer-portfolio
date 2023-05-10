import React from 'react';
import Bank from './Bank/Bank';
import PandaCommerce from './PandaCommrece/PandaCommerce';
import JerinParlour from './JerinParlour/JerinParlour';
import InfluencerPoint from './InfluencerPoint/InfluencerPoint';
import IdeaBoard from './IdeaBoard/IdeaBoard';
import CarDoctor from './CarDoctor/CarDoctor';

const ProjectsStorage = () => {
    return (
        <div className='m-3'>
            <h1 className="text-4xl font-semibold text-center my-5 md:my-10 lg:my-20">Portfolio</h1>
            <IdeaBoard />
            <PandaCommerce />
            <InfluencerPoint />
            <Bank />
            <JerinParlour />
            <CarDoctor />
        </div>
    );
};

export default ProjectsStorage;