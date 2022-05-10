import React from 'react'

const Service = ({ service }) => {
    return (
        <div className="card md:max-w-md bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.image} alt="Shoes" className="rounded-xl w-[115px] h-[115px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}

export default Service