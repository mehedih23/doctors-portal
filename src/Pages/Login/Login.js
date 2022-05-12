import React from 'react'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Login</h2>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        {/* email field start */}
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
                        {/* email field end */}


                        {/* password field start */}
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                pattern: {
                                    value: /^(?=.*[\W])[\w\W]{6,20}$/,
                                    message: 'One special character required'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Must be 6 characters longer'
                                }
                                ,
                                maxLength: {
                                    value: 20,
                                    message: 'Must be 20 characters smaller'
                                }
                            })}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {/* password error */}
                            {errors.password?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                            {/* pattern error */}
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                            {/* minlength error */}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                            {/* maxlength error */}
                            {errors.password?.type === 'maxLength' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                        </label>
                        {/* password field end */}

                        {/* forgot password start */}
                        <p className='text-sm'>Forgot Password ?</p>
                        {/* forgot password end */}
                        <input type="submit" value="Login" className='btn btn-active w-full max-w-xs mt-3' />

                        <p className='my-4'>New to Doctors Portal? <span className='text-secondary'>Create an account</span></p>
                        <div className="divider mb-4">OR</div>
                        <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login