import React from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';

const ForgotPassword = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // from form-hook //
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // loadings //
    if (sending) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={sending} size={150} />
        </div>
    }

    // errors //
    let signInError;
    if (error) {
        console.log(error.message.slice(17, 36));
        signInError = <span className='text-sm text-red-600'>{error.message.split('/')[1].split(')')[0]}</span>
    }

    // from form-hook function //
    const onSubmit = data => {
        const email = data.email;
        sendPasswordResetEmail(email);
        toast.success('Please check Your email', { id: 'reset-pass' })
        reset();
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h3 className='text-3xl font-bold text-center'>Forgot your password?</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        {signInError}

                        <input type="submit" value="Reset" className='btn btn-active w-full max-w-xs mt-3' />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword