import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    return (
        <div className=" max-w-full bg-black text-white mx-auto py-5" >
          <div className="max-w-7xl flex flex-col md:flex-row justify-between mx-auto ">
          <button className="ml-3 ">MASUM <span className="text-red-600 font-bold text-xl ">|</span> FITNESS</button>
        
         <div className="flex  md:w-3/4   justify-between ">
         <NavLink
        to="/"
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "uppercase text-gray-600" : ""
        }
      >
        Home
      </NavLink>
            {/* <NavLink
        to="/blog"
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "uppercase text-gray-600" : ""
        }
      >
        Blogs
      </NavLink> */}


{
        user ? <button onClick={()=>logOut()} >Logout</button> :
        <>
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
      </NavLink></>



      }
          
    
         </div>
            
           

          </div>
        </div>
    );
};

export default Navbar;