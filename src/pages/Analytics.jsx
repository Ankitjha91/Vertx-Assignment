import OverviewChart from "../components/OverviewChart";
import DemographicsChart from "../components/DemographicsChart";
import Insights from "../components/Insights";

const Analytics = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Navbar for mobile/tablet */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1d1d1d] md:hidden">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/9128/9128736.png"
          alt="Logo"
          className="w-8 h-8"
        /> */}
        <div className="text-3xl text-white">&#8942;</div>
      </div>

      {/* Page Heading */}
      <div className="px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Overview</h1>

        {/* Overview Chart & Insights */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <OverviewChart />
          </div>
          <div className="w-full lg:w-1/3">
            <Insights />
          </div>
        </div>

        {/* Demographics Section */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Demographics</h2>
          <DemographicsChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
