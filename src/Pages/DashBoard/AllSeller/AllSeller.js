import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller');
            const data = res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-2xl my-4'>All seller</h1>
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
                            sellers.map((seller, i) => <tr key={seller._id} className="hover">
                                <th>{i+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
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

export default AllSeller;