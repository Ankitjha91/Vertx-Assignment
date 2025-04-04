import OverviewChart from "../components/OverviewChart";
import DemographicsChart from "../components/DemographicsChart";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <OverviewChart />
      <DemographicsChart />
    </div>
  );
};

export default Dashboard;
