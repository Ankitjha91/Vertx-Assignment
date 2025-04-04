const Navbar = () => {
  return (
    <nav className="bg-black text-white p-1 flex justify-between">
      <h1 className="text-lg font-semibold">Analytics</h1>
      <h2 className="text-lg font-semibold">Activity</h2>
      <button className="px-4 py-2 rounded">Log Out</button>
    </nav>
  );
};

export default Navbar;
