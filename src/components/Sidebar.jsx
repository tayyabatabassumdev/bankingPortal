import React from "react";
import { useBankStore } from "../store/bankStore";
import { Home, Settings, FileText, HelpCircle } from "lucide-react";
import profile from "../assets/profile.jpg";

const Sidebar = () => {
  const { user } = useBankStore();

  const navItems = [
    { label: "My loans", icon: Home },
    { label: "Settings", icon: Settings },
    { label: "Forms", icon: FileText },
    { label: "FAQ", icon: HelpCircle },
  ];

  return (
    <aside className="w-full lg:w-[250px] bg-white lg:h-screen p-6 flex flex-col justify-between shadow-sm border-r border-gray-100">
      <div>
        <h2 className="text-xl font-bold mb-8">Non-bank</h2>

        {/* Profile */}
        <div className="flex items-center space-x-3 mb-8">
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-medium">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.phone}</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="space-y-2">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#f2f3f4] transition"
            >
              <Icon size={18} className="text-gray-600" />
              <span className="font-medium text-gray-700">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Visa Card */}
      <div className="mt-6 bg-gradient-to-tr from-[#5e4bff] to-[#b788ff] text-white p-5 rounded-2xl shadow-md">
        <p className="text-sm opacity-80 mb-1">Balance</p>
        <h3 className="text-2xl font-semibold">${user.balance.toFixed(2)}</h3>
        <p className="text-xs opacity-70 mt-1">**** 5088</p>
        <p className="text-right mt-3 text-sm font-semibold">VISA</p>
      </div>
    </aside>
  );
};

export default Sidebar;
