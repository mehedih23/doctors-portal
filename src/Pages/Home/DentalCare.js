import React from 'react'
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero min-h-screen md:p-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                <div className='md:ml-10'>
                    <h2 className="card-title my-4 text-5xl">Exceptional Dental Care,<br /> on Your Terms</h2>
                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default DentalCare