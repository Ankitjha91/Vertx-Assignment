import { Link } from "react-router-dom";
import { BarChart, User, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white p-6 flex flex-col">
      <h2 className="text-xl font-bold">VertxLabs, Inc</h2>
      <nav className="mt-6 space-y-4">
        <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/">
           Dashboard
        </Link>
        <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/">
          <BarChart size={20} /> Analytics
        </Link>
        <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/profile">
          <User size={20} /> Profile
        </Link>
        <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/settings">
           Connect
        </Link>
        <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/settings">
           Dealroom
        </Link>
        <Link className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded" to="/settings">
          <Settings size={20} /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
