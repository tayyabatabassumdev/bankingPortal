const BarChart = ({ barChartData }) => {
  const chartMaxHeightPx = 150;
  const maxBarValue = Math.max(...barChartData.map((item) => item.value));
  const safeMax = maxBarValue || 1;
  return (
    <div className="flex items-end justify-between sm:justify-around h-44 mt-2 px-2">
      {barChartData.map((data, i) => {
        const barHeight = (data.value / safeMax) * chartMaxHeightPx;
        const barColorClass = data.isGreen ? "bg-[#4b6043]" : "bg-gray-400";
        return (
          <div key={i} className="flex flex-col items-center w-1/6">
            <div
              className={`w-full sm:w-6 ${barColorClass} rounded-xs transition-all duration-500`}
              style={{ height: `${barHeight}px` }}
            ></div>
            <p className="text-xs text-gray-600 mt-1">${data.value}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BarChart;
