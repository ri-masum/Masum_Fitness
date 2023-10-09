import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div className="bg-gray-800 min-h-screen text-white overflow-hidden	">
            <Navbar></Navbar>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;