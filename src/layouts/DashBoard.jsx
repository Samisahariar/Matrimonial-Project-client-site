import { Outlet } from "react-router-dom";
import DashNav from "../components/DashNav";

const DashBoard = () => {
    return (
        <div className="flex">
            <DashNav></DashNav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;