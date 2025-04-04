import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { country: "India", percentage: 40 },
  { country: "USA", percentage: 25 },
  { country: "Canada", percentage: 10 },
  { country: "UAE", percentage: 7 },
];

const DemographicsChart = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-white text-lg mb-4">Demographics</h2>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <XAxis dataKey="country" stroke="#fff" />
          <Tooltip />
          <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DemographicsChart;
