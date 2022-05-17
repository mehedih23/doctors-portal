import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AddDoctor = () => {
    // from form-hook //
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { isLoading, error, data: services } = useQuery('expertIn', () =>
        fetch('http://localhost:5000/service').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    const imageStorageKey = '075e91c1c0c9acd39e945fc5d3657b77';

    // from form-hook function //
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
            method: 'POST',
            body: formData

        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        doctorPhoto: img,
                        doctorName: data.name,
                        doctorMail: data.email,
                        doctorPhone: data.number,
                        expertIn: data.select
                    }
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Doctor Added Successfully', { id: 'doctor-added' })
                                reset();
                            }
                            else {
                                toast.error('Failed to add a doctor', { id: 'failed-add' })
                            }
                        })
                }
            })

    };
    return (
        <div>
            <h2 className="text-2xl font-bold">Add a Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.name.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Provide a valid email address'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="number"
                        {...register("number", {
                            required: {
                                value: true,
                                message: 'Phone Number is required'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.number.message}</span>}
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Expert In</span>
                    </label>
                    <select
                        class="select select-bordered"
                        {...register("select")}
                    >
                        {
                            services.map(service => <option value={service.name} key={service._id}>{service.name}</option>)
                        }
                    </select>
                    <label className="label">

                    </label>
                </div>


                <div class="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        {...register("image")}
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">

                    </label>
                </div>


                <input type="submit" value="Add Doctor" className='btn btn-active w-full max-w-xs mt-3' />
            </form>
        </div >
    )
}

export default AddDoctor