import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layouts/Main";
import Enter from "../pages/Enter";
import Home from "../components/Home";
import HomePage from "../pages/HomePage";
import Biodatas from "../pages/Biodatas";
import Aboutus from "../pages/Aboutus";
import ContactUs from "../pages/ContactUs";
import DashBoard from "../layouts/DashBoard";
import DashboardHome from "../pages/DashboardHome";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Enter></Enter>
            }
        ]
    },
    {
        path: "main",
        element: <Home></Home>,
        children: [
            {
                path: "home",
                element: <HomePage></HomePage>
            },
            {
                path: "biodatas",
                element: <Biodatas></Biodatas>
            },
            {
                path: "aboutus",
                element: <Aboutus></Aboutus>
            },
            {
                path: "contactus",
                element: <ContactUs></ContactUs>
            },
            {
                path: "login",
                element: <Login></Login>
            },

            {
                path: "register",
                element: <Register></Register>
            }

        ]

    },
    {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "profileCrud",
                element: <DashboardHome></DashboardHome>
            }
        ]
    }
])
