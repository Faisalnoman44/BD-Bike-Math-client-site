import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const [signUpUserEmail, setSignUpUserEmail] = useState('')
    const [token] = useToken(signUpUserEmail)
    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();

    const from = '/';

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                setSignUpError('')
                const user = result.user
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                const userDetails = {
                    name: data.name,
                    email: data.email,
                    userCategory: data.userCategory,
                }
                handleUpdateUser(userInfo, userDetails, data.email)
            })
            .catch(err => console.log(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const userDetails = {
                    name: user.displayName,
                    email: user.email,
                    userCategory: 'Buyer',
                }
                saveUserToDb(userDetails, user.email)
                console.log(user);
            })
            .catch(err => console.log(err))
    }

    const handleUpdateUser = (userInfo, userDetails, email) => {
        updateUserProfile(userInfo)
            .then((result) => {
                console.log('user Updates');
                saveUserToDb(userDetails, email)
            })
            .catch(err => console.log(err))
    }

    const saveUserToDb = (userDetails, email) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSignUpUserEmail(email)
            })

    }

    if (token) {
        toast.success('User Creates Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigate(from, { replace: true })
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
                        <select {...register('userCategory')} className="select select-bordered w-full max-w-xs">
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
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