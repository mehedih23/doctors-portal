import React from 'react'
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service'

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            image: flouride
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            image: cavity
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            image: whitening
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center mb-12'>
                <h4 className='text-xl font-bold text-primary uppercase'>Services</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    )
}

export default Services