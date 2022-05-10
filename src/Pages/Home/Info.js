import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 my-8 text-white'>
            <div>
                <div class="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary p-4 h-40">
                    <figure>
                        <img src={clock} alt="Album" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
            </div>

            <div>
                <div class="card lg:card-side bg-accent shadow-xl p-4 h-40">
                    <figure>
                        <img src={marker} alt="Album" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Visit our location</h2>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
            </div>

            <div>
                <div class="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary p-4 h-40">
                    <figure>
                        <img src={phone} alt="Album" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Contact us now</h2>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Info