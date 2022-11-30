import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllBuyer = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer', {
                headers: {
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    const handleDelete = id => {
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
                toast.success('Deleted Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                refetch()
            })
    }

    // const handleMakeAdmin = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             athorization: `bearer ${localStorage.getItem('access-token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.matchedCount > 0) {
    //                 refetch()
    //             }
    //             if (data.message === "forbidden access") {
    //             }
    //         })

    // }

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handleDelete(buyer._id)} className='btn btn-error btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;