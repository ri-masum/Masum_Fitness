import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className=" max-w-full bg-black text-white mx-auto py-5">
      <div className="max-w-7xl flex flex-col md:flex-row justify-between mx-auto ">
        <button className="ml-3 ">
          MASUM <span className="text-red-600 font-bold text-xl ">|</span>{" "}
          FITNESS
        </button>

        <div className="flex  md:w-3/4   justify-between ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "uppercase text-yellow-400"
                : ""
            }
          >
            Home
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "uppercase text-yellow-400"
                    : ""
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/photos"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "uppercase text-yellow-400"
                    : ""
                }
              >
                Gallery
              </NavLink>

              <div className="flex gap-3 items-center">
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 border-2 border-yellow-300 rounded-full"
                />
                <p className="text-yellow-400">{user.displayName}</p>

                <button
                  onClick={() => logOut()}
                  className="hover:cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "uppercase text-yellow-400"
                    : ""
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "uppercase text-yellow-400"
                    : ""
                }
              >
                SignUp
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
