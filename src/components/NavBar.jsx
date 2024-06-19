import { NavLink } from "react-router-dom";

const NavBar = () => {


    const navMenus = <>

        <NavLink to="home"
            className={({ isActive }) =>
                isActive ? "p-4 text-red-500 border-b-2 border-red-500" : "p-4"
            }

        >Home</NavLink>


        <NavLink to="biodatas"
            className={({ isActive }) =>
                isActive ? "p-4" : "p-4"
            }

        >Biodatas</NavLink>


        <NavLink to="aboutus"
            className={({ isActive }) =>
                isActive ? "p-4" : "p-4"
            }

        >About Us</NavLink>

        <NavLink to="/dashboard/profileCrud"
            className={({ isActive }) =>
                isActive ? "p-4" : "p-4"
            }
        >Dashboard
        </NavLink>
    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-2">
                        {navMenus}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-2 menu menu-horizontal px-1">
                    {navMenus}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;