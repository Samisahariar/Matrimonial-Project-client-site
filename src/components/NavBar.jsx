import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthInformation";
import Swal from "sweetalert2";
import "../App.css"

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
                    <ul className="siteName-lists">
                        <li className="site-namenav1">P</li>
                        <li className="site-namenav2">h</li>
                        <li className="site-namenav3">e</li>
                        <li className="site-namenav4">n</li>
                        <li className="site-namenav5">i</li>
                        <li className="site-namenav6">X</li>
                    </ul>
                </div>
                <div className="nav-end">
                    <div>
                        <ul className="nav-menus">
                            <li className="nav-menu">HOME</li>
                            <li className="nav-menu">CONTACT</li>
                            <li className="nav-menu">BRANDS</li>
                            <li className="nav-menu">CARS</li>
                            <li className="nav-menu">CATEGORY</li>
                        </ul>
                    </div>
                    <div className="cart-icon">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div>
                        <button className="login-button">LOG-IN</button>
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