import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()



    const handleLogin = data => {
        console.log(data)
        logIn(data.email, data.password)
            .then(result => {
                setLoginError('')
                const user = result.user;
                console.log(user)
                navigate('/')
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
        <div className='flex justify-center items-center h-[600px] mx-auto p-5 '>
            <div className='w-96 border p-7'>
                <p className='text-xl text-center font-semibold mb-5'>Login</p>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be atleast 6 character or longer" }
                            })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <br />
                    <input className='btn btn-primary w-full ' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-3 text-sm'>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;