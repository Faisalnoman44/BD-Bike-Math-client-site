import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const AddAProduct = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddBike = data => {
        console.log(data);
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
                            {...register("name", {
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
                        {errors.name && <p className='text-error'>{errors.name.message}</p>}
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
                        {errors.email && <p className='text-error'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Resale price</span>
                        </label>
                        <input type="number"
                            {...register("resalePrice", {
                                required: "Resale price is required",

                            })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-error'>{errors.email.message}</p>}
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
                        {errors.name && <p className='text-error'>{errors.name.message}</p>}
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
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file"
                            {...register("image", {
                                required: 'Photo is required'
                            })} className="input input-bordered w-full" />
                        {errors.photo && <p className='text-error'>{errors.photo.message}</p>}
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