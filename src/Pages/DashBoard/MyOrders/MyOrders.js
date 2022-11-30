import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`https://final-assignment-server-site-rho.vercel.app/users/${user?.email}`, {
                headers: {
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });
            const data = await res.json();
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr key={order._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{order.bikeName}</td>
                                <td>{order.meetingLocation}</td>
                                <td>{order.bikePrice}</td>
                                <td><Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-sm'>Pay Now</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;