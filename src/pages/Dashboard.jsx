import React from "react";
import { useBankStore } from "../store/bankStore";
import LoanCard from "../components/LoanCard";
import DocRow from "../components/DocRow";
import Statistics from "../components/Statistics";
import house from "../assets/house.jpeg";
import bank from "../assets/bank.jpeg";
import car from "../assets/car.png";
// Mock Loan Card Data (to match the image values)

const Dashboard = () => {
const mockLoans = [
    { icon: house, title: "Family house loan", amount: "-$120,000" },
    { icon: bank, title: "Eurotrip loan", amount: "-$21,489" },
    { icon: car, title: "Car loan", amount: "-$2,312" },
];
  const { loans = mockLoans, docs = [] } = useBankStore();

  return (
    <main className="flex-1 p-6 lg:p-10 space-y-6">
      {/* LOANS SECTION */}
     
      <section className="bg-white rounded-l shadow-md p-8">
         <h1 className="text-xl font-semibold text-gray-500 mb-10">Loans</h1> {/* Added Loans Title */}
        {/* Main Flex Container: This arranges the 'Summary Block' and the 'Loan Cards' side-by-side */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. Loan Summary Block (Left Side) */}
          <div className="flex flex-col justify-start py-4 lg:w-1/4">
            
            {/* Main Dollar Amount - Large and Bold */}
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 mt-6">
              $6,202
            </h2>
            
            {/* Description Text */}
            <p className="text-gray-500 text-xs max-w-[200px] mb-6">
              I tried to reflect that vision within dark spirit to outline the seriousness of intention that bank.
            </p>
            
            {/* View Details Button */}
            <button className="bg-[#4b6043] text-white px-5 py-2 rounded-sm shadow-md hover:bg-[#3b4f36] transition w-full max-w-[200px]">
              View details
            </button>
          </div>

          {/* 2. Loan Cards Grid (Right Side) */}
          {/* Responsive Grid: Stacks vertically on small screens, wraps on md, fixed 3-column on lg */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-3/4">
            {loans.map((loan, index) => (
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
        <div className="bg-white rounded-l shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-4">Docs</h3>

          {/* Header Row */}
          <div className="grid grid-cols-[1fr_140px_120px_20px] text-sm font-medium text-gray-500 border-b pb-2 mb-2">
            <span>Name</span>
            <span>Status</span>
            <span>Time</span>
            <span></span>
          </div>

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
