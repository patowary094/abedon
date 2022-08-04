import React from 'react';
import LeftPara from '../../components/About/leftPara';
import RightPara from "../../components/About/rightPara"
import WhatWeDo from '../../components/About/whatWeDo';
import WeConnected from '../../components/About/weConnected';
import Footer from '../../components/shared/footer';
import Navbar from '../../components/shared/Navbar'
import OurTeam from '../../components/About/ourTeam';
const About = () => {
    return (
        <div>
            <Navbar/>
            <LeftPara/>
            <RightPara/>
            <WhatWeDo/>
            <WeConnected/>
            <OurTeam/>
            <Footer/>
        </div>
    );
};

export default About;