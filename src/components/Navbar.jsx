import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Dynamic title based on current route
  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Dashboard";
      case "/analytics":
        return "Analytics";
      case "/profile":
        return "Profile";
      case "/settings":
        return "Settings";
      case "/connect":
        return "Connect";
      case "/dealroom":
        return "Dealroom";
      default:
        return "Analytics";
    }
  };

  return (
    <div className="bg-black text-white border-b border-[#1d1d1d] px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
      {/* Left: Page Title */}
      <h1 className="text-lg font-semibold">{getPageTitle(location.pathname)}</h1>

      {/* Right: Activity + Log Out */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 w-full sm:w-auto">
        <h2 className="text-base font-medium">Activity</h2>
        <button className="px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition w-full sm:w-auto">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
