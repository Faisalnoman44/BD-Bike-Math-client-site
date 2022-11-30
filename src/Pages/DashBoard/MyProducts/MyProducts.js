import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bikes/myorders/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/bikes/${id}`, {
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
            <h1 className='text-2xl my-4'>My Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Sell Status</th>
                            <th>Adverise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, i) => <tr key={product._id} className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="w-16 mask mask-squircle">
                                        <img alt='' src={product.image} />
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.status}</td>
                                <td><button className='btn btn-primary btn-sm'>Advertise</button></td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-error btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;