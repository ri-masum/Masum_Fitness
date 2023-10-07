import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center  h-screen ">
        <div className=" mt-40">
        <h1 className="text-red-600 font-bold text-5xl">OPPS!</h1>
        <Link to="/" className="uppercase btn btn-warning" > back</Link>
        </div>
    </div>
    );
};

export default Error;