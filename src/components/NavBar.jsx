import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthInformation";
import Swal from "sweetalert2";
import "../App.css";
import { CgProfile } from "react-icons/cg";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const NavBar = () => {
    const { user, logout } = useContext(AuthContext);

    const handlethelogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(res => {
                        Swal.fire({
                            title: "LOGGED OUT SUCCESSFULLY ",
                            text: "The User is successfully logged out !",
                            icon: "success"
                        });
                    })
            }
        });

    }



    const navMenus = <>

        <NavLink to="home"
            className={({ isActive }) =>
                isActive ? "active" : " inactive"
            }

        >Home</NavLink>


        <NavLink to="biodatas"
            className={({ isActive }) =>
                isActive ? "active" : "inactive"
            }

        >Biodatas</NavLink>


        <NavLink to="aboutus"
            className={({ isActive }) =>
                isActive ? "active" : "inactive"
            }

        >About Us</NavLink>

        <NavLink to="/dashboard/profileCrud"
            className={({ isActive }) =>
                isActive ? "active" : "inactive"
            }
        >Dashboard
        </NavLink>
    </>



    return (
        <nav className="nav-bar">
            <div className="innerdiv-nav">
                <div className="site-nameSection">
                    <ul className="siteName-lists playfair-font">
                        <li className="site-namenav1">M</li>
                        <li className="site-namenav2">U</li>
                        <li className="site-namenav3">S</li>
                        <li className="site-namenav4">L</li>
                        <li className="site-namenav5">I</li>
                        <li className="site-namenav6">M</li>
                        <li className="site-namenav7">A</li>
                    </ul>
                </div>
                <div className="nav-end">
                    <div>
                        <ul className="nav-menus">
                            {navMenus}
                        </ul>
                    </div>
                    <div className="cart-icon text-6xl rounded-full">
                        <CgProfile />
                    </div>
                    <div>
                        {
                            user ? <button className="cart-icon rounded-2xl px-3" onClick={handlethelogout}>LOG-OUT</button> : <Link to="login"><button className="cart-icon rounded-2xl px-3">LOG-IN</button></Link>
                        }
                        
                    </div>
                </div>
                <label className="hamburger-menu">
                    <input type="checkbox" />
                </label>
                <aside className="navSideBar">
                    <nav>
                        <ul className="japanese-section">
                            <li className="japanese-navSection">フ</li>
                            <li className="japanese-navSection">ェ</li>
                            <li className="japanese-navSection">ニ</li>
                            <li className="japanese-navSection">ッ</li>
                            <li className="japanese-navSection">ク</li>
                            <li className="japanese-navSection">ス</li>
                        </ul>
                        <div className="dropdown-nav">

                        </div>

                    </nav>
                </aside>
            </div>
        </nav>
    );
};

export default NavBar;