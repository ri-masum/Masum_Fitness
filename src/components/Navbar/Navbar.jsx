import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className=" max-w-full bg-black text-white mx-auto py-5">
      <div className="max-w-7xl flex flex-col md:flex-row justify-between mx-auto  ">
        <button className="ml-3 ">
          MASUM <span className="text-red-600 font-bold text-xl ">|</span>{" "}
          FITNESS
        </button>

        <div className="flex  md:w-3/4  mt-5  md:mt-0 justify-between ">
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
                {user.photoURL ? (
                  <img src={user.photoURL} className="w-6 md:w-10 rounded-full" />
                ) : (
                  <img
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696843360~exp=1696843960~hmac=0004b2d3254e070798148e640c5dd5a807dfcd93967cb6e0919429c25564e71c"
                    className="w-10 rounded-full"
                  />
                )}
                {
                user.displayName ? (
                  <p className="text-yellow-400 text-sm md:text-lg">{user.displayName}</p>
                ) : (
                  <p className="text-yellow-400">userName</p>
                )}

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
