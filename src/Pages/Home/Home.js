import React from 'react'
import Appointment from './Appointment'
import Banner from './Banner'
import DentalCare from './DentalCare'
import Info from './Info'
import Services from './Services'

const Home = () => {
    return (
        <div className='md:px-12'>
            <Banner />
            <Info />
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
        </div>
    )
}

export default Home