const NavItem = ({ label, icon: Icon, isActive }) => {
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
};
export default NavItem;