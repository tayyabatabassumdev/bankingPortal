import React, { useState } from "react";
import { useBankStore } from "../store/bankStore";
import { CreditCard, Settings, FileText, Tally3, Menu, X } from "lucide-react";
import profile from "../assets/profile.jpg";

const navItems = [
  { label: "My loans", icon: CreditCard, isActive: true },
  { label: "Settings", icon: Settings, isActive: false },
  { label: "Forms", icon: FileText, isActive: false },
  { label: "FAQ", icon: Tally3, isActive: false },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useBankStore((state) => state.currentUser);
  const fallbackUser = {
    name: "Robert Del Naja",
    phone: "+ 1-541-754-3010",
    balance: 2302.0,
  };
  const user = currentUser || fallbackUser;

  return (
    <>
      {/* --- Mobile Header (visible only on small screens) --- */}
      <div className="flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200 lg:hidden">
        <h1 className="text-xl font-bold text-gray-800">Non-bank</h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Sidebar --- */}
      <aside
        className={`fixed top-0 left-0 h-full lg:sticky lg:h-screen w-64 bg-white p-6 flex flex-col justify-between border-r border-gray-100 transform transition-transform duration-300 ease-in-out z-50 
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Top Content (Title, Profile, Nav) */}
        <div>
          {/* Title (hidden on mobile because we have header) */}
          <h2 className="hidden lg:block text-2xl font-bold mb-10 text-gray-800">
            Non-bank
          </h2>

          {/* Profile */}
          <div className="flex items-center space-x-3 mb-10">
            <img
              src={profile}
              alt="Profile"
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.phone}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            {navItems.map(({ label, icon: Icon, isActive }) => {
              const textClasses = isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-700 font-medium";
              const iconBgClass = isActive ? "bg-[#556E53]" : "bg-gray-200";
              const iconColorClass = isActive ? "text-white" : "text-gray-600";

              return (
                <button
                  key={label}
                  className={`w-full flex items-center space-x-3 transition ${textClasses}`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-lg ${iconBgClass}`}
                  >
                    <Icon className={`w-5 h-5 ${iconColorClass}`} />
                  </div>
                  <span className="text-base">{label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Visa Card */}
        <div
          className="relative overflow-hidden text-white p-5 rounded-xl shadow-lg h-34 w-full bg-cover bg-center mt-8"
          style={{
            background: "linear-gradient(135deg, #5D3FD3 0%, #8A2BE2 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle, #fff 1px, transparent 1px) no-repeat",
              backgroundSize: "15px 15px",
              filter: "blur(0.5px)",
            }}
          ></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <p className="text-sm opacity-80 font-medium">Balance</p>
              <p className="text-sm font-bold">VISA</p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-extrabold mb-1">
                ${user.balance.toFixed(2)}
              </h3>
              <p className="text-sm font-medium opacity-90 mt-1">**** 5008</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
