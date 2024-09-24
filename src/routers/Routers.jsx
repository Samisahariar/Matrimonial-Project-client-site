import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import HomePage from "../pages/HomePage";
import Biodatas from "../pages/Biodatas";
import Aboutus from "../pages/Aboutus";
import ContactUs from "../pages/ContactUs";
import DashBoard from "../layouts/DashBoard";
import DashboardHome from "../pages/Dashboard/user/DashboardHome";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewBiodata from "../pages/Dashboard/user/ViewBiodata";
import MyContact from "../pages/Dashboard/user/MyContact";
import FavoriteBio from "../pages/Dashboard/user/FavoriteBio";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import ManageUser from "../pages/Dashboard/admin/ManageUser";
import ApprovedPremium from "../pages/Dashboard/admin/ApprovedPremium";
import ApprovedContact from "../pages/Dashboard/admin/ApprovedContact";
import BiodataDetails from "../pages/BiodataDetails";
import BackgroundBeams from "../pages/EntringPage/BackgroundBeams";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <BackgroundBeams></BackgroundBeams>
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
            },
            {
                path: "biodataDetails/:biodataId",
                loader: ({ params }) => params.biodataId,
                element: <BiodataDetails></BiodataDetails>
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
            },
            {
                path: "viewbiodata",
                element: <ViewBiodata></ViewBiodata>
            },
            {
                path: "contactrequest",
                element: <MyContact></MyContact>
            },
            {
                path: "favbio",
                element: <FavoriteBio></FavoriteBio>
            },
            {
                path: "adminhome",
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "manageUsers",
                element: <ManageUser></ManageUser>
            },
            {
                path: "approvedPremium",
                element: <ApprovedPremium></ApprovedPremium>
            },
            {
                path: "approvedContactRequest",
                element: <ApprovedContact></ApprovedContact>
            }
        ]
    }
])
