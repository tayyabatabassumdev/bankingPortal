import { useState } from "react";
import { useBankStore } from "../store/bankStore";
import { CreditCard, Settings, FileText, Tally3, Menu, X } from "lucide-react";
import UserProfile from "./UserProfile";
import NavItem from "./NavItem";
import BalanceCard from "./BalanceCard";
const navItems = [
  { label: "My loans", icon: CreditCard, isActive: true },
  { label: "Settings", icon: Settings, isActive: false },
  { label: "Forms", icon: FileText, isActive: false },
  { label: "FAQ", icon: Tally3, isActive: false },
];
const fallbackUser = {
  name: "Guest",
  phone: "0000000000",
  balance: 1000.0,
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useBankStore((state) => state.currentUser);
  const user = currentUser || fallbackUser;
  const MobileHeader = () => (
    <div className="flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200 lg:hidden">
      <h1 className="text-xl font-bold text-gray-800">AuraBank</h1>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 focus:outline-none"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
  return (
    <>
      <MobileHeader />
      <aside
        className={`fixed top-0 left-0 h-full lg:sticky lg:h-screen w-64 bg-white p-6 flex flex-col justify-between border-r border-gray-100 transform transition-transform duration-300 ease-in-out z-50 
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div>
          <h2 className="hidden lg:block text-2xl font-bold mb-10 text-gray-800">
            AuraBank
          </h2>
          <UserProfile user={user} />
          <nav className="space-y-4">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </nav>
        </div>
        <BalanceCard balance={user.balance} />
      </aside>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
export default Sidebar;
