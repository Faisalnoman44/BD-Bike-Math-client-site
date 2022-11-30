import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItem = () => {
    
    const { data: reportedItem = [] } = useQuery({
        queryKey: ['reportedItem'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bikes/reported', {
                headers: {
                    'content-type': 'application/json',
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                },
            })
            const data = await res.json();
            console.log(data);
            return data
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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItem;