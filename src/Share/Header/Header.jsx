import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../PriveteRout/PriveteContext/PriveteContext";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { user, logOUt } = useContext(AuthContext);
  const photo = user?.photoURL;
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="navbar relative  px-8 py-5 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex-1">
        <img className="h-14" src="/public/logo.ico" alt="" />
        <h2 className="text-2xl ml-2 font-sans">
          {" "}
          <span className="text-pink-200 font-bold "> digital</span>{" "}
          <span className="text-red-200">toy shop</span>{" "}
        </h2>
      </div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>
          {open ? (
            <FaTimes className="w-7 h-7" />
          ) : (
            <FaBars className="w-7 h-7" />
          )}
        </span>
      </div>
      <div className={`flex flex-col bg-gray-400 md:bg-inherit p-4 md:flex-row md:static absolute ${open ? 'top-16 right-0': '-top-80 right-0'} duration-700  md:flex-grow justify-between md:items-center md:gap-2`}>
        <div className="text-white md:block flex flex-col">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-black bg-opacity-70 p-3 rounded mr-4 text-xl"
                : "mr-4 text-xl"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/categorys"
            className={({ isActive }) =>
              isActive
                ? " bg-black p-3 rounded bg-opacity-70 mr-4 text-xl"
                : "mr-4 text-xl"
            }
          >
            All Toy
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/addtoy"
                className={({ isActive }) =>
                  isActive
                    ? " bg-black p-3 rounded bg-opacity-70 mr-4 text-xl"
                    : "mr-4 text-xl"
                }
              >
                Add Toys
              </NavLink>
              <NavLink
                to="/myToys"
                className={({ isActive }) =>
                  isActive
                    ? " bg-black p-3 rounded bg-opacity-70 mr-4 text-xl"
                    : "mr-4 text-xl"
                }
              >
                My Toys
              </NavLink>
            </>
          )}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-black p-3 rounded bg-opacity-70 mr-4 text-xl"
                : "mr-4 text-xl"
            }
            to="/blog"
          >
            Blogs
          </NavLink>
        </div>
        <div>
          {!user ? (
            <div>
              <Link to="/login" className="btn ml-3">
                Login
              </Link>
              <Link to="/register" className="btn ml-3">
                Register
              </Link>
            </div>
          ) : (
            <div className="md:flex gap-4">
              <button onClick={logOUt} className="btn ml-3">
                Log out
              </button>
              <div
                title={
                  user?.displayName ? user.displayName : "not user name set"
                }
              >
                {!user.photoURL ? (
                  <FaUser className="w-10 h-10" />
                ) : (
                  <img className=" h-10 w-10 " src={photo} alt="user photo" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
