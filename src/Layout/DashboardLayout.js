import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Navber from '../Pages/Shared/Navber/Navber';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navber></Navber>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            isBuyer && <li><Link to='/dashboard/myorders'>My Order</Link></li>
                        }

                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addaproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allbuyer'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allseller'>All Sellers</Link></li>
                                <li><Link to='/dashboard/reporteditem'>Reported Item</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DashboardLayout;