import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller', {
                headers: {
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    const handleVerify = id => {
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT',
            headers: {
                athorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch()
        })
    }

    const handleDelete = (id, email) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                athorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }

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
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.isVerified !== 'verified'  && <button onClick={() => handleVerify(seller._id, seller?.email)} className='btn btn-sm btn-primary'>Verify</button>}</td>
                                <td><button onClick={() => handleDelete(seller._id)} className='btn btn-error btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;