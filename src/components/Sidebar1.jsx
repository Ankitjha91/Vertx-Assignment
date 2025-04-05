import { Link } from "react-router-dom";
import React from "react";
import plusIcon from "../assets/plus.png";

const Sidebar = () => {
  return (
    <div className="hidden md:flex w-64 bg-black text-white flex-col">
      {/* Top Section */}
      <div className="flex items-center gap-2 border-b border-[#1d1d1d]">
        <div className="p-3 w-[50px]">
          <img
            className="size-8 border-b border-solid border-[#1d1d1d]"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80"
            alt="Logo"
          />
        </div>
        <h2 className="text-xl font-bold">VertxLabs, Inc</h2>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-row">
        {/* Icons bar */}
        <div className="w-[50px] flex flex-col justify-between h-full p-2 border-r border-[#1d1d1d]">
          <img
            className="size-8 border-b border-[#1d1d1d]"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <img
            className="size-8 border-t border-[#1d1d1d]"
            src={plusIcon}
            alt=""
          />
        </div>

        {/* Sidebar links */}
        <nav className="w-[190px] h-[782px] pt-3 pl-4 border-r border-[#1d1d1d]">
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/">
            Dashboard
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/Analytics">
            Analytics
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/connect">
            Connect
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/dealroom">
            Dealroom
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/profile">
            Profile
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/settings">
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
