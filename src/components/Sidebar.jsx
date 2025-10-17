import React from "react";
import { useBankStore } from "../store/bankStore";
import { CreditCard, Settings, FileText, Tally3 } from "lucide-react"; 
// Assuming profile is the path to your image
import profile from "../assets/profile.jpg"; 

// --- Configuration Data ---
const navItems = [
  { label: "My loans", icon: CreditCard, isActive: true }, 
  { label: "Settings", icon: Settings, isActive: false },
  { label: "Forms", icon: FileText, isActive: false },
  { label: "FAQ", icon: Tally3, isActive: false }, 
];
// -------------------------

const Sidebar = () => {
  const { user = { name: "Robert Del Naja", phone: "+ 1-541-754-3010", balance: 2302.00 } } = useBankStore(); 

  return (
    // CRITICAL CHANGES FOR STICKY/FULL HEIGHT:
    // 1. lg:sticky and lg:top-0 ensures it stays visible when the main content scrolls.
    // 2. lg:h-screen forces it to take 100% of the viewport height on large screens.
    // 3. justify-between ensures content pushes to top and bottom edges.
    <aside className="w-full lg:w-[260px] bg-white p-6 flex flex-col justify-between border-r border-gray-100 lg:sticky lg:top-0 lg:h-screen">
      
      {/* Top Content (Title, Profile, Nav) */}
      <div>
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-10 text-gray-800">Non-bank</h2>

        {/* Profile */}
        <div className="flex items-center space-x-3 mb-10 ">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-12 h-12 rounded-full border border-gray-300 "
          />
          <div>
            <h3 className="font-semibold text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.phone}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          {navItems.map(({ label, icon: Icon, isActive }) => {
            const textClasses = isActive ? "text-gray-900 font-semibold" : "text-gray-700 font-medium";
            const iconBgClass = isActive ? 'bg-[#556E53]' : 'bg-gray-200';
            const iconColorClass = isActive ? 'text-white' : 'text-gray-600';

            return (
              <button
                key={label}
                className={`w-full flex items-center space-x-3 transition ${textClasses}`}
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${iconBgClass}`}>
                    <Icon className={`w-5 h-5 ${iconColorClass}`} />
                </div>
                <span className="text-base">{label}</span> 
              </button>
            );
          })}
        </nav>
      </div>

      {/* Visa Card - Always visible at the bottom of the viewport-height sidebar */}
      <div 
        className="relative overflow-hidden text-white p-5 rounded-xl shadow-lg h-34 w-full bg-cover bg-center"
        style={{
          // Added mt-8 for spacing above the card from the bottom of the nav
          background: 'linear-gradient(135deg, #5D3FD3 0%, #8A2BE2 100%)',
          marginTop: '2rem', // Equivalent to mt-8
        }}
      >
        {/* Pattern (CSS trick) */}
        <div className="absolute inset-0 opacity-20"
             style={{
               background: 'radial-gradient(circle, #fff 1px, transparent 1px) no-repeat',
               backgroundSize: '15px 15px',
               filter: 'blur(0.5px)',
             }}>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
                <p className="text-sm opacity-80 font-medium">Balance</p>
                <p className="text-sm font-bold">VISA</p>
            </div>
            
            <div className="flex flex-col">
                <h3 className="text-3xl font-extrabold mb-1">${user.balance.toFixed(2)}</h3>
                <p className="text-sm font-medium opacity-90 mt-1">**** 5008</p>
            </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;