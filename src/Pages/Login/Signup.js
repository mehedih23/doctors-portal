import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const Signup = () => {
    // from form-hook //
    const { register, formState: { errors }, handleSubmit } = useForm();
    // firebase login services //
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorCreate,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [token] = useToken(user || userGoogle)
    // firebase login services //

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();


    // users //
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token, user, userGoogle])


    // loadings //
    if (loading || updating || loadingGoogle) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading || updating || loadingGoogle} size={150} />
        </div>
    }

    // errors //
    let signInError;
    if (errorCreate || errorUpdate || errorGoogle) {
        signInError = <span className='text-sm text-red-600'>{errorCreate?.message || errorUpdate?.message || errorGoogle?.message}</span>
    }

    // from form-hook function //
    const onSubmit = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        toast.success('Please Verify your email.', { id: 'verify-email' });
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name field start */}
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
                            {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                        </label>
                        {/* name field end */}

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
                                    value: 6,
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

                        <input type="submit" value="Register" className='btn btn-active w-full max-w-xs mt-3' />
                    </form>
                    <p className='mt-4'>Already have an account? <Link to='/login' className='text-secondary font-bold'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline w-full max-w-xs mb-2'
                    >CONTINUE WITH GOOGLE</button>
                    {signInError}
                </div>
            </div>
        </div>
    )
}

export default Signup