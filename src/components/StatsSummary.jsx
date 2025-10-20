const StatsSummary = ({ stats }) => (
  <div className="flex justify-between mb-6">
    <div className="flex flex-col items-start pr-3 border-r border-gray-200">
      <div className="flex items-center">
        <span className="text-green-500 mr-1 text-base">↑</span>
        <p className="font-bold text-xl text-gray-800">
          ${stats.income?.toLocaleString() ?? 1000}
        </p>
      </div>
      <p className="text-gray-500 text-sm mt-0.5 ml-5">Income</p>
    </div>
    <div className="flex flex-col items-start pl-3">
      <div className="flex items-center">
        <span className="text-red-500 mr-1 text-base">↓</span>
        <p className="font-bold text-xl text-gray-800">
          ${stats.expense?.toLocaleString() ?? 0}
        </p>
      </div>
      <p className="text-gray-500 text-sm mt-0.5 ml-5">Expense</p>
    </div>
  </div>
);
export default StatsSummary;
