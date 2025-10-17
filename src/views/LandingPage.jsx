import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-5xl font-extrabold text-[#4b6043] mb-4">Simple Bank App</h1>
      <p className="text-xl text-gray-700 mb-10 text-center max-w-lg">
        Your client-side banking experience, powered by React and Local Storage.
      </p>
      <div className="flex space-x-4">
        <Link 
          to="/auth?mode=signin" 
          className="bg-[#4b6043] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#3b4f36] transition"
        >
          Sign In
        </Link>
        <Link 
          to="/auth?mode=signup" 
          className="bg-white text-[#4b6043] border-2 border-[#4b6043] px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Sign Up (Optional)
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;