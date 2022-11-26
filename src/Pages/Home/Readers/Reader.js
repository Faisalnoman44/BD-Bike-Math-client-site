import React from 'react';

const Reader = () => {
    return (
        <div>
            <h2 className="text-primary my-10 text-center text-4xl font-semibold">Comments</h2>
            <div className="carousel w-full md:h-[400px]">
                <div id="item1" className="carousel-item w-full grid grid-cols-1 md:grid-cols-2" >
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />
                    </div>
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full grid grid-cols-1 md:grid-cols-2">
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />
                    </div>
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full grid grid-cols-1 md:grid-cols-2">
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />

                    </div>
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full grid grid-cols-1 md:grid-cols-2">
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />

                    </div>
                    <div className='p-10 flex justify-center items-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus alias ut enim non impedit cumque sint reprehenderit delectus minima soluta minus voluptatum earum ad itaque, neque nostrum magni. Placeat dolor ratione facilis tempore id minima incidunt quisquam nam molestias debitis similique, sunt fugit beatae alias nemo fa</p>
                        <img src="https://i.ibb.co/7bhw03R/pic4.jpg " className='w-12 h-12 rounded-full mt-56' alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs bg-primary border-0"> </a>
                <a href="#item2" className="btn btn-xs bg-primary border-0"> </a>
                <a href="#item3" className="btn btn-xs bg-primary border-0"> </a>
                <a href="#item4" className="btn btn-xs bg-primary border-0"> </a>
            </div>
        </div>
    );
};

export default Reader;