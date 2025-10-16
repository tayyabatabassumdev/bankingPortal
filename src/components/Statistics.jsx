import React from "react";
import { useBankStore } from "../store/bankStore"; 

// --- Mock Data for the Bar Chart ---
const barChartData = [
  { value: 98, isGreen: false },
  { value: 108, isGreen: false },
  { value: 83, isGreen: false },
  { value: 123, isGreen: true },
  { value: 138, isGreen: true },
];

const Statistics = () => {
  const { stats } = useBankStore();

  const maxBarValue = Math.max(...barChartData.map(item => item.value));
  const chartMaxHeightPx = 190; 

  return (
    // Reduced overall padding: p-4 instead of p-5/p-6
    <div className="bg-white rounded-l shadow-md p-4 w-68"> 
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-gray-800">Statistics</h3>
        {/* External Link/Arrow Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2.5" 
          stroke="currentColor" 
          className="w-5 h-5 text-gray-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>

      {/* Income and Expense Section - NOW STACKED */}
      <div className="flex justify-between mb-18"> 
        {/* Income: flex-col added, removed ml-2/mr-1 from text, and pr-3 border-r */}
        <div className="flex flex-col pr-3 border-r border-gray-200">
          <div className="flex items-center">
            <span className="text-green-500 mr-1 text-base">↑</span>
            <p className="font-bold text-xl text-gray-800">${stats.income ?? 3430}</p> 
          </div>
          <p className="text-gray-500 text-sm mt-0.5 ml-5">Income</p>
        </div>

        {/* Expense: flex-col added, removed ml-2/mr-1 from text, and pl-3 */}
        <div className="flex flex-col pl-3">
          <div className="flex items-center">
            <span className="text-red-500 mr-1 text-base">↓</span>
            <p className="font-bold text-xl text-gray-800">${stats.expense ?? 2430}</p> 
          </div>
          <p className="text-gray-500 text-sm mt-0.5 ml-5">Expense</p>
        </div>
      </div>

      {/* Bar Chart Section - TIGHTER BARS */}
      {/* Removed horizontal padding (px-1) and used justify-around */}
      <div className="flex items-end justify-around h-40 mt-2"> 
        {barChartData.map((data, i) => {
          const barHeight = (data.value / maxBarValue) * chartMaxHeightPx;
          const barColorClass = data.isGreen ? 'bg-[#4b6043]' : 'bg-gray-200';

          return (
            // Adjusted bar width from w-5 to w-4
            <div key={i} className="flex flex-col items-center">
              <div 
                className={`w-6 ${barColorClass}`} 
                style={{ height: `${barHeight}px` }}
              ></div>
              {/* Reduced margin-top for dollar value */}
              <p className="text-xs text-gray-600 mt-1">${data.value}</p> 
            </div>
          );
        })}
      </div>
      
      {/* No extra padding/margin at the very bottom now */}
    </div>
  );
};

export default Statistics;