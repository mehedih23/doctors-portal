import React from 'react'

const Review = ({ review }) => {
    return (
        <div className="card md:max-w-md bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, culpa nemo vero porro architecto reiciendis impedit necessitatibus magni quos. Cupiditate?</p>

                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-6">
                            <img src={review.img} alt={review.name} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review