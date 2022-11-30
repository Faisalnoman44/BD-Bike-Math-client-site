import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user?.email}`, {
                headers: {
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;

        }
    })

    return (
        <div>
            <h1 className='text-2xl my-4'>My Orders </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bike Name</th>
                            <th>Meeting Location</th>
                            <th>Bike Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr key={order._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{order.bikeName}</td>
                                <td>{order.meetingLocation}</td>
                                <td>{order.bikePrice}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;