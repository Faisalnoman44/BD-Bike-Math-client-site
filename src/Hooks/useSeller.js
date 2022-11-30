import React, { useEffect, useState } from 'react';

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://final-assignment-server-site-rho.vercel.app/users/seller/${email}`, {
                headers: {
                    athorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setisSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading];
};

export default useSeller;