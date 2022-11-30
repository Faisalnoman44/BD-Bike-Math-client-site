import React, { useEffect, useState } from 'react';

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setisBuyerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://final-assignment-server-site-rho.vercel.app/users/buyer/${email}`, {
                headers: {
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer)
                    setisBuyerLoading(false)
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading];
};

export default useBuyer;