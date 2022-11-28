import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const AddAProduct = () => {
    const [addAProduct, setAddAProduct] = useState('')


    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit()}>
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
                        {errors.name && <p className='text-error'>{errors.name.message}</p>}
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"
                            {...register("location", {
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
                            {...register("yearOfUse", {
                                required: 'Year of use is required'
                            })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-error'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select {...register('userCategory')} className="select select-bordered w-full ">
                            <option>R15</option>
                            <option>Gixxer</option>
                            <option>Apache</option>
                        </select>
                    </div>
                </div>

                <br />
                <input className='btn btn-primary w-full ' value='Sign Up' type="submit" />
                <div>
                    {addAProduct && <p className='text-error'>{addAProduct}</p>}
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;