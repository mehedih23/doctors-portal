import React from 'react'
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <section className='my-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-primary font-bold uppercase text-xl'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 md:w-48' src={quote} alt="quote" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    )
}

export default Testimonials