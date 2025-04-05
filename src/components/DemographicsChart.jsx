import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Progress } from "./ui/progress";
import { Globe } from "lucide-react";
import WorldMap from "./WorldMap";

const data = [
  {
    country: "India",
    percentage: 40,
    color: "#4834D4", // rgba(72, 52, 212, 1)
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    country: "USA",
    percentage: 25,
    color: "#BD5302", // rgba(189, 83, 2, 1)
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    country: "Canada",
    percentage: 10,
    color: "#E9C16B", // rgba(233, 193, 107, 1)
    flag: "https://flagcdn.com/w320/ca.png",
  },
  {
    country: "UAE",
    percentage: 7,
    color: "#579560", // rgba(87, 149, 96, 1)
    flag: "https://flagcdn.com/w320/ae.png",
  },
];



const DemographicsChart = () => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 ">
      {/* Left Side: World Map Placeholder */}
      {/* <div className="flex-1 flex items-center justify-center">
        <Globe size={180} className="text-gray-500" />
      </div> */}
      <div className="flex-1 flex items-center justify-center">
        <WorldMap />
      </div>

      {/* Right Side: Country Stats */}
      <div className="flex-1  ">

        <div className="space-y-3 ">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={item.flag}
                alt={`${item.country} flag`}
                className="w-8 h-5 object-cover  shadow-md"
              />

              <div className="flex-1">
                <div className="text-white text-sm font-medium flex justify-between">
                  <span>{item.country}</span>
                  <span>{item.percentage}%</span>
                </div>
                <Progress value={item.percentage} color={item.color} className="h-2" />

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemographicsChart;
