import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <React.Fragment>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                </React.Fragment>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className='mb-16 '>
            <div className="navbar bg-primary text-white fixed top-0 z-50 flex justify-between max-w-[1440px]">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 font-semibold bg-primary">
                            {menuItem}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">BD BIKES MATH</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold ">
                        {menuItem}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={3} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navber;