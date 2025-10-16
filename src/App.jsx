import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f7f7f5] text-gray-800">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
