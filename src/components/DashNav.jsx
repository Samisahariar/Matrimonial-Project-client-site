import { NavLink } from 'react-router-dom';
import useAdmins from '../hooks/useAdmins';

const DashNav = () => {

    const [isAdmin, isAdminLoading] = useAdmins();

    return (
        <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu p-4">
                {
                    isAdmin ? <>
                        <li>
                            <NavLink to="/dashboard/adminhome">

                                Admin Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageUsers">

                                Manage Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/approvedPremium">

                                Approved Premium</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/approvedContactRequest">

                                Approved Contact Request</NavLink>
                        </li>

                    </>
                        :
                        <>
                            <li>
                                <NavLink to="/dashboard/profileCrud">

                                    Edit Biodata</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/viewbiodata">
                                    View Biodata
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/contactrequest">
                                    My Contact Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/favbio">
                                    Favorite Biodata
                                </NavLink>
                            </li>
                        </>
                }

                <li>
                    <NavLink to="/dashboard/users">

                        Log-Out</NavLink>
                </li>


                {/* shared nav links */}
                <div className="divider"></div>
                <li>
                    <NavLink to="/main/home">

                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/order/salad">

                        Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/order/contact">
                        Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default DashNav;