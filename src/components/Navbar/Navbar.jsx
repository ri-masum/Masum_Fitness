import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" max-w-full bg-black text-white mx-auto py-5" >
          <div className="max-w-7xl flex justify-between mx-auto">
          <button className="ml-3">MASUM <span className="text-red-600 font-bold text-xl">|</span> FITNESS</button>
            <NavLink
        to="/"
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "uppercase text-gray-600" : ""
        }
      >
        Home
      </NavLink>
            <NavLink
        to="/blog"
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "uppercase text-gray-600" : ""
        }
      >
        Blogs
      </NavLink>
            <NavLink
        to="/login"
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "uppercase text-gray-600" : ""
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "uppercase text-gray-600" : ""
        }
      >
        SignUp
      </NavLink>
            

          </div>
        </div>
    );
};

export default Navbar;