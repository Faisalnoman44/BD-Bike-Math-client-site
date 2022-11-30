import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItem = () => {

    const { data: reportedItem = []} = useQuery({
        queryKey: ['reportedItem'],
        queryFn: async () => {
            const res = await fetch('https://final-assignment-server-site-rho.vercel.app/bikes/reported', {
                headers: {
                    'content-type': 'application/json',
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                },
            })
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-2xl my-4'>Reported Item {reportedItem.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItem;