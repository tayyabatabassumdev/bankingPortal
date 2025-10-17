// src/views/Dashboard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { useBankStore } from "../store/bankStore"; // Use the main store for all data

// Component imports
import LoanCard from "../components/LoanCard";
import DocRow from "../components/DocRow";
import Statistics from "../components/Statistics";

// Image imports
import house from "../assets/house.jpeg";
import bank from "../assets/bank.jpeg";
import car from "../assets/car.png";

// Mock Data Definitions (Used as fallback if store data is structured differently)
const mockLoans = [
    { icon: house, title: "Family house loan", amount: "-$120,000" },
    { icon: bank, title: "Eurotrip loan", amount: "-$21,489" },
    { icon: car, title: "Car loan", amount: "-$2,312" },
];

const Dashboard = () => {
    const navigate = useNavigate();
    
    // --- Dynamic State Retrieval (Simpler, safer approach) ---
    // Get the user object (for name and balance) and sign out function
    const currentUser = useBankStore(state => state.currentUser);
    const signOut = useBankStore(state => state.signOut);
    
    // Get Loans and Docs data from the store
    // NOTE: This assumes 'loans' and 'docs' in your store return array references, not new copies.
    const loans = useBankStore(state => state.loans) || mockLoans;
    const docs = useBankStore(state => state.docs) || [];

    // Dashboard dynamic data variables
    const userName = currentUser?.name || 'User';
    const totalLoanValue = '$6,202'; // Keeping static based on the image design for now

    // Map store loan data to use the imported image assets for display
    const loanCards = loans.map(loan => {
        // Simple logic to map string path to imported module
        const iconMap = {
            '/src/assets/house.jpeg': house,
            '/src/assets/bank.jpeg': bank,
            '/src/assets/car.png': car,
        };
        return {
            ...loan,
            // Use the imported image if a path match is found, otherwise use the path itself
            icon: iconMap[loan.icon] || loan.icon
        };
    });

    return (
        <main className="flex-1 p-6 lg:p-10 space-y-6">
            
            {/* --- Dynamic Header with Greeting and Navigation --- */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Welcome, {userName}!</h1>
                <div className="space-x-4">
                    <button 
                        onClick={() => navigate('/transactions')}
                        className="text-[#4b6043] border border-[#4b6043] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Transactions
                    </button>
                    <button 
                        onClick={signOut}
                        className="text-red-600 border border-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
            {/* --- End Dynamic Header --- */}
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Loans</h2>
            
            {/* LOANS SECTION */}
            <section className="bg-white rounded-2xl shadow-md p-8 pt-6">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* 1. Loan Summary Block (Left Side) */}
              <div className="flex flex-col justify-start py-4 lg:w-1/4">
                
                {/* Main Dollar Amount - Dynamic total loan amount can be placed here */}
                <h2 className="text-5xl font-extrabold text-gray-900 mb-4 mt-6">
                  {totalLoanValue}
                </h2>
                
                {/* Description Text */}
                <p className="text-gray-500 text-xs max-w-[200px] mb-6">
                  I tried to reflect that vision within dark spirit to outline the seriousness of intention that bank.
                </p>
                
                {/* View Details Button */}
                <button className="bg-[#4b6043] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#3b4f36] transition w-full max-w-[200px]">
                  View details
                </button>
              </div>

              {/* 2. Loan Cards Grid (Right Side) - Now uses mapped loanCards */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-3/4">
                {loanCards.map((loan, index) => (
                  <LoanCard 
                    key={index} 
                    icon={loan.icon} 
                    title={loan.title} 
                    amount={loan.amount} 
                  />
                ))}
              </div>
            </div>
          </section>
          
      {/* DOCS + STATISTICS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold text-lg mb-4">Docs</h3>

          {/* Header Row */}
          <div className="grid grid-cols-[1fr_140px_120px_20px] text-sm font-medium text-gray-500 border-b pb-2 mb-2">
            <span>Name</span>
            <span>Status</span>
            <span>Time</span>
            <span></span>
          </div>

          {/* Doc Rows - Now uses dynamic 'docs' array from the store */}
          {docs.map((doc, i) => (
            <DocRow key={i} {...doc} />
          ))}
        </div>

        <Statistics />
      </section>
    </main>
  );
};

export default Dashboard;