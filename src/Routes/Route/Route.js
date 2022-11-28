import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Main from '../../Layout/Main';
import DashboardLayout from "../../Layout/DashboardLayout";
import AllBikes from "../../Pages/AllBikes/AllBikes";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import ReportedItem from "../../Pages/DashBoard/ReportedItem/ReportedItem";
import AddAProduct from "../../Pages/DashBoard/AddAProduct/AddAProduct";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyProducts from '../../Pages/DashBoard/MyProducts/MyProducts';
import MyOrders from '../../Pages/DashBoard/MyOrders/MyOrders';


const { createBrowserRouter } = require("react-router-dom");
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allbike/:brand',
                element: <AllBikes></AllBikes>,
                loader: ({params}) => fetch(`http://localhost:5000/bikes/${params.brand}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/allbuyer',
                element:<AllBuyer></AllBuyer>
            },
            {
                path:'/dashboard',
                element:<AllBuyer></AllBuyer>
            },
            {
                path:'/dashboard/allseller',
                element:<AllSeller></AllSeller>
            },
            {
                path:'/dashboard/reporteditem',
                element:<ReportedItem></ReportedItem>
            },
            {
                path:'/dashboard/addaproduct',
                element:<AddAProduct></AddAProduct>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/myorders',
                element:<MyOrders></MyOrders>
            },
        ]
    }
    
    
])

export default router