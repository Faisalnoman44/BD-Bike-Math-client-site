import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OneBike from './OneBike';

const AllBikes = () => {
    // const [bikes, setBikes] = useState([])
    const bikes = useLoaderData()
    console.log(bikes)


    // const {data : bikes = [], isLoading} = useQuery({
    //     queryKey:['bikes'],
    //     queryFn: async () =>{
    //      const res = await fetch('http://localhost:5000/bikes');
    //      const data = await res.json();
    //      return data;
    //     }
    // })

    // useEffect(() =>{
    //     fetch('bike.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setBikes(data)
    //     })
    // })
    return (
        <div className='mt-10'>
            {
                bikes.map(bike => <OneBike key={bike._id} bike={bike}></OneBike>)
            }
        </div>
    );
};

export default AllBikes;