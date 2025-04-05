import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "./components/Sidebar1";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
