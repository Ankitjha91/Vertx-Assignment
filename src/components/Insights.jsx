const Insights = () => {
    return (
      <div className="w-[274px] h-[273px] border border-[#1d1d1d] rounded-lg bg-[#1d1d1d] shadow-md p-4 flex flex-col justify-between">
        {/* Heading */}
        <h3 className="text-white font-bold text-lg">Insights</h3>
  
        {/* Data Section */}
        <div className="mt-4 space-y-4">
          {/* Founders Row */}
          <div className="flex flex-col
 justify-between">
            <p className="text-white text-sm">Founders</p>
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-[32px] leading-none tracking-tight">7.4K</span>
              <span className="bg-green-700 text-white text-[12px] font-semibold px-2 py-1 rounded">+000%</span>
              <span className="bg-[#555555] text-white text-[12px] font-semibold px-2 py-1 rounded">(000)</span>
            </div>
          </div>
  
          {/* Investors Row */}
          <div className="flex flex-col
 justify-between">
            <p className="text-white text-sm">Investors</p>
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-[32px] leading-none tracking-tight">6.09K</span>
              <span className="bg-green-700 text-white text-[12px] font-semibold px-2 py-1 rounded">+000%</span>
              <span className="bg-[#555555] text-white text-[12px] font-semibold px-2 py-1 rounded">(000)</span>
            </div>
          </div>
        </div>
  
        {/* Horizontal Line */}
        <div className="w-full border-t border-[#1d1d1d] my-4"></div>
  
        {/* View Button */}
        <button className="w-full bg-white text-black font-manrope font-semibold text-[10px] py-2 rounded-md">
          View Detailed Insights
        </button>
      </div>
    );
  };
  
  export default Insights;
  