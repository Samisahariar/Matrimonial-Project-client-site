import { Outlet } from "react-router-dom";
import DashNav from "../components/DashNav";

const DashBoard = () => {
    return (
        <div className="flex">
            <DashNav></DashNav>
        </div>
    );
};

export default DashBoard;