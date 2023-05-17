import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar  px-8 py-5 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex-1">
        <img className="h-14" src="/public/logo.ico" alt="" />
        <h2 className="text-2xl ml-2 font-sans">
          {" "}
          <span className="text-pink-200 font-bold "> digital</span>{" "}
          <span className="text-red-200">toy shop</span>{" "}
        </h2>
      </div>
      <div className="flex flex-grow justify-between items-center gap-2">
        <div className="text-white">
          <NavLink className={({isActive}) => isActive? " bg-orange-400 bg-opacity-70 p-3 rounded mr-4 text-xl" : "mr-4 text-xl"} to="/">
            Home
          </NavLink>
          <NavLink className={({isActive}) => isActive? " bg-orange-400 p-3 rounded bg-opacity-70 mr-4 text-xl" : "mr-4 text-xl"} to="/">
            All Toy{" "}
          </NavLink>
          <NavLink className={({isActive}) => isActive? " bg-orange-400 p-3 rounded bg-opacity-70 mr-4 text-xl" : "mr-4 text-xl"} to="/">
            Blogs
          </NavLink>
        </div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
            <span className="btn btn-active">Search</span>
          </label>
          {/* <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div> */}
        </div>
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
