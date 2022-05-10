import React from 'react'

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card md:max-w-md shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>
                    {slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='uppercase text-red-700'>Try Another Day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE</p>
                <div class="card-actions justify-center mt-5">
                    <button disabled={slots.length === 0} class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Service