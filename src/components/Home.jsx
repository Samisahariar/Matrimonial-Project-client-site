import React from 'react';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import { TracingBeam } from "../components/ui/tracing-beam";

const Home = () => {

    const location = useLocation()
    console.log(location.pathname)
    return (
        <div>
            <NavBar></NavBar>

            {location.pathname == "/main/home" ? <TracingBeam className="px-6"><Outlet></Outlet></TracingBeam>
                : <Outlet></Outlet>
            }
        </div >
    );
};

export default Home;