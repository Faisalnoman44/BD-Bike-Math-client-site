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
                path: '/allbikes',
                element: <AllBikes></AllBikes>,
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
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard/allbuyer',
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
        ]
    }
    
    
])

export default router