import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';



const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const imgbbHostKey = process.env.REACT_APP_imgbbkey;
    const imgbbHostKey = process.env.REACT_APP_imgbbkey;
    const navigate = useNavigate()

    const handleAddBike = data => {
        const image = data.photo[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const bikeDetails = {
                        sellerName: user.displayName,
                        email: user.email,
                        name: data.bikeName,
                        image: imgData.data.url,
                        orginalPrice: data.orginalPrice,
                        resalePrice: data.resalePrice,
                        address: data.address,
                        phoneNumber: data.phoneNumber,
                        condition: data.condition,
                        year_of_use: data.year_of_use,
                        brand: data.brand,
                        description: data.description,
                        status: 'unsold',
                        time: new Date()
                    }
                    console.log(data.bikeName);
                    fetch('https://final-assignment-server-site-rho.vercel.app/bikes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            athorization: `bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(bikeDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            navigate('/dashboard/myproducts')
                        })
                }
            })


    }

    return (
        <div>
            <h1 className='text-2xl my-4'>Add A Product</h1>
            <form onSubmit={handleSubmit(handleAddBike)} className='p-5 md:p-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">BikeName</span>
                        </label>
                        <input type="text"
                            {...register("bikeName", {
                                required: 'Bike Name is required'
                            })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-error'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input type="number"
                            {...register("orginalPrice", {
                                required: 'Original Price is required'
                            })} className="input input-bordered w-full" />
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text"
                            {...register("address", {
                                required: "Location is required",

                            })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Resale price</span>
                        </label>
                        <input type="number"
                            {...register("resalePrice", {
                                required: "Resale price is required",

                            })} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Year of use</span>
                        </label>
                        <input type="text"
                            {...register("year_of_use", {
                                required: 'Year of use is required'
                            })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select {...register('brand')} className="select select-bordered w-full ">
                            <option value='Yamaha'>Yamaha</option>
                            <option value='Gixxer'>Gixxer</option>
                            <option value='TVS'>TVS</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text"
                            {...register("phoneNumber", {
                                required: "Location is required",

                            })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select {...register('condition')} className="select select-bordered w-full ">
                            <option value='Excellent'>Excellent</option>
                            <option value='Good'>Good</option>
                            <option value='Fair'>Fair</option>
                        </select>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file"
                            {...register("photo", {
                                required: 'Photo is required'
                            })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("description", {
                            required: 'Year of use is required'
                        })} className="textarea textarea-bordered" placeholder="Bio">

                        </textarea>
                    </div>
                </div>

                <br />
                <input className='btn btn-primary w-full ' value='Add Bike' type="submit" />
                <div>
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;