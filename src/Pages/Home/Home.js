import React from 'react'
import Banner from './Banner'
import Info from './Info'
import Services from './Services'

const Home = () => {
    return (
        <div className='md:px-12'>
            <Banner />
            <Info />
            <Services></Services>
        </div>
    )
}

export default Home