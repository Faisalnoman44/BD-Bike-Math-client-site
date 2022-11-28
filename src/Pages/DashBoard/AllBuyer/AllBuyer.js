import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer');
            const data = res.json();
            return data;
        }
    })

    return (
        <div className='full'>
            <h1 className='text-2xl my-4'>All buyer</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Give Access</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button className='btn btn-error btn-sm'>Delete</button></td>
                                <td><button className='btn btn-primary btn-sm'>Admin</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;