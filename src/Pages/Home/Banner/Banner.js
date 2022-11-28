import React from 'react';
import bg from '../../../asset/photo-1449426468159-d96dbf08f19f.jfif';

const Banner = () => {
    return (
        <div className="hero h-[550px] mb-10" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">BD BIKES MATH</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;