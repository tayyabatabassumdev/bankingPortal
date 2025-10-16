import React from 'react';

const LoanCard = ({ icon, title, amount }) => {
  // The color for the negative balance text, matching the dark green in the image.
  
  return (
    // Styling the card with light gray background, rounded corners, and subtle shadow
    <div className="bg-gray-100 rounded-sm p-5 shadow-sm flex flex-col items-start min-h-[180px] justify-between">
      
      {/* Icon and Title Container */}
      <div className="mb-4">
        {/*
          CRITICAL CHANGE: Using an <img> tag to display the imported image path.
          The 'icon' prop receives the imported path (e.g., the value of 'house' import).
        */}
        <div className="w-10 h-10 flex items-center justify-center mb-2">
          <img src={icon} alt={title} className="w-full h-full object-contain rounded-xs" />
        </div>
        
        <h4 className="text-sm font-semibold text-gray-500">{title}</h4>
      </div>

      {/* Amount and Label Container */}
      <div className="mt-auto mb-4"> {/* Pushes content to the bottom */}
        {/* Amount: Large, bold, and colored green */}
        <p className={`text-3xl font-bold mb-1`}>
          {amount}
        </p>
        <p className="text-xs text-gray-500">
          Balance owing
        </p>
      </div>
    </div>
  );
};

export default LoanCard;