import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                setSignUpError('')
                const user = result.user
                console.log(user);
            })
            .catch(err => console.log(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='flex justify-center items-center h-[600px] mx-auto mt-24 p-5 '>
            <div className='w-96 border p-7'>
                <p className='text-xl text-center font-semibold mb-5'>Sign Up</p>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: 'Name is required'
                            })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-error'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email is required",

                            })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-error'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password required",
                                minLength: { value: 6, message: 'Password must be 6 character long' },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must be strong'
                                }
                            })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select {...register('user-category')} className="select select-bordered w-full max-w-xs">
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file"
                            {...register("photo", {
                                required: 'Photo is required'
                            })} className="input input-bordered w-full" />
                        {errors.photo && <p className='text-error'>{errors.photo.message}</p>}
                    </div>
                    <br />
                    <input className='btn btn-primary w-full ' value='Sign Up' type="submit" />
                    <div>
                        {signUpError && <p className='text-error'>{signUpError}</p>}
                    </div>
                </form>
                <p className='mt-3 text-sm'>Already have an account? <Link className='text-primary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;