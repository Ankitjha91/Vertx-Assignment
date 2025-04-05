import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Mar 1", visitors: 400 },
  { date: "Mar 2", visitors: 800 },
  { date: "Mar 3", visitors: 1200 },
  { date: "Mar 4", visitors: 1000 },
  { date: "Mar 5", visitors: 700 },
  { date: "Mar 6", visitors: 1100 },
  { date: "Mar 7", visitors: 900 },
  { date: "Mar 8", visitors: 1300 },
  { date: "Mar 9", visitors: 600 },
  { date: "Mar 10", visitors: 1000 },
  { date: "Mar 11", visitors: 750 },
  { date: "Mar 12", visitors: 1250 },
  { date: "Mar 13", visitors: 950 },
  { date: "Mar 14", visitors: 1400 },
  { date: "Mar 15", visitors: 800 },
  { date: "Mar 16", visitors: 1100 },
  { date: "Mar 17", visitors: 900 },
  { date: "Mar 18", visitors: 1300 },
  { date: "Mar 19", visitors: 700 },
  { date: "Mar 20", visitors: 1400 },
  { date: "Mar 21", visitors: 1000 },
  { date: "Mar 22", visitors: 1150 },
  { date: "Mar 23", visitors: 950 },
  { date: "Mar 24", visitors: 1200 },
  { date: "Mar 25", visitors: 800 },
  { date: "Mar 26", visitors: 1100 },
  { date: "Mar 27", visitors: 900 },
  { date: "Mar 28", visitors: 1300 },
  { date: "Mar 29", visitors: 700 },
  { date: "Mar 30", visitors: 1400 },
];

const OverviewChart = () => {
  return (
    <div className="bg-[#111] p-6 rounded-xl shadow-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-4xl font-bold">13.49K</h2>
          <p className="text-green-400 text-sm font-semibold">+469%</p>
          <p className="text-gray-500 text-xs">(897)</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-700 text-sm px-3 py-1 rounded">Visitors</button>
          <button className="bg-gray-700 text-sm px-3 py-1 rounded">Last 30 Days</button>
          <button className="border border-gray-500 text-sm px-3 py-1 rounded">+ Add</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#aaa" tick={{ fontSize: 12 }} />
          <YAxis stroke="#aaa" tick={{ fontSize: 12 }} domain={[200, 2000]} />
          <Tooltip contentStyle={{ backgroundColor: "#222", borderColor: "#444" }} />
          <Line type="monotone" dataKey="visitors" stroke="#fff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;