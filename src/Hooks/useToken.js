import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log(email)
        if (email) {
            fetch(`https://final-assignment-server-site-rho.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.accessToken) {
                        console.log(data.accessToken)
                        localStorage.setItem('access-token', data?.accessToken)

                        setToken(data.accessToken)
                    }
                })
        }
    }, [email]);

    return [token]

}

export default useToken