import React from 'react';
import LeftPara from '../../components/contact_us/leftPara';
import Footer from '../../components/shared/footer';
import Box from '../../components/contact_us/box'
import Navbar from '../../components/shared/Navbar'
import Contacts from '../../components/contact_us/contacts'
import FrequentQs from '../../components/contact_us/frequentQs'

const contact_us = () => {
    return (
        <div>
            <Navbar/>
            <LeftPara/>
            <FrequentQs/>
            <Box/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default contact_us;