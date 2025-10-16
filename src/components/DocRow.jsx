import React from "react";
import { File } from "lucide-react"; // Only need File icon, as the arrow is different

// --- Status Color and Badge Logic ---
const getStatusClasses = (status) => {
  let text, bg;
  switch (status) {
    case "Verified":
      // Using colors closer to the pale green in the image
      text = "text-[#4b6043]"; // Darker green text
      bg = "bg-[#e5f5e5]";    // Light green background
      break;
    case "Declined":
      // Using colors closer to the pale red/orange in the image
      text = "text-red-700";  // Darker red text
      bg = "bg-red-100";     // Light red/orange background
      break;
    case "Waiting":
      // Using colors closer to the pale yellow/orange in the image
      text = "text-yellow-700"; // Darker yellow text
      bg = "bg-yellow-100";    // Light yellow background
      break;
    default:
      text = "text-gray-600";
      bg = "bg-gray-100";
  }
  return { text, bg };
};

// Custom Arrow Icon to match the image (a simple chevron)
const ChevronRight = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-4 h-4 text-gray-400"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const DocRow = ({ name, status, time }) => {
  const { text, bg } = getStatusClasses(status);

  return (
    // Adjusted padding (py-4) and grid template for better spacing alignment with the image
    <div className="grid grid-cols-[3fr_2fr_2fr_0.1fr] items-center py-4 border-b border-gray-100 last:border-none text-sm hover:bg-gray-50 transition duration-150 cursor-pointer">
      
      {/* 1. Name Column */}
      <div className="flex items-center space-x-4 text-gray-700 font-medium">
        {/* File icon with slightly darker gray */}
        <File size={16} className="text-gray-500" />
        <span>{name}</span>
      </div>

      {/* 2. Status Column (The Badge) */}
      <div className="flex justify-start">
        <span 
          className={`px-3 py-1 font-semibold rounded-md text-xs ${text} ${bg}`}
        >
          {status}
        </span>
      </div>

      {/* 3. Time Column */}
      <span className="text-gray-500">{time}</span>
      
      {/* 4. Arrow Column */}
      <div className="flex justify-end pr-1">
        <ChevronRight />
      </div>
    </div>
  );
};

export default DocRow;