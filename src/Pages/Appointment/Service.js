import React from 'react'

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card md:max-w-md shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2
                xl">{name}</h2>
                <p>
                    {slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='uppercase text-red-700'>Try Another Day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE</p>
                <p><small>Price : ${price}</small></p>
                <div className="card-actions justify-center mt-5">
                    <label
                        htmlFor="booked-modal"
                        disabled={slots.length === 0}
                        className="btn btn-primary"
                        onClick={() => setTreatment(service)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    )
}

export default Service