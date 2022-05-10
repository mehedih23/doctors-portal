import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
                <div className="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary p-4 sm:h-52 md:h-72 lg:h-40">
                    <figure>
                        <img src={clock} alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-accent shadow-xl p-4 sm:h-52 md:h-72 lg:h-40">
                    <figure>
                        <img src={marker} alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Visit our location</h2>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary p-4 sm:h-52 md:h-72 lg:h-40">
                    <figure>
                        <img src={phone} alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Contact us now</h2>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Info