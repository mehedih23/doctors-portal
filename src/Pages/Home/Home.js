import React from 'react'
import Appointment from './Appointment'
import Banner from './Banner'
import DentalCare from './DentalCare'
import Info from './Info'
import Testimonials from './Testimonials'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
    return (
        <div className='md:px-12'>
            <Banner />
            <Info />
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    )
}

export default Home