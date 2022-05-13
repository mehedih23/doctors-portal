import React from 'react'
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='p-12'
        >
            <div className='text-center'>
                <h4 className='text-xl font-bold text-primary uppercase mb-3'>Contact Us</h4>
                <h2 className='text-4xl mb-6 text-white'>Stay connected with us</h2>
            </div>

            <form action="" className='flex flex-col justify-center items-center'>
                <input type="text" placeholder="Email Address" className="mb-4 input w-full max-w-sm" />
                <input type="text" placeholder="Subject" className="mb-4 input w-full max-w-sm" />
                <textarea className="mb-4 textarea w-full max-w-sm" placeholder="Your message" rows="5" ></textarea>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Send</button>
            </form>
        </section>
    )
}

export default Contact