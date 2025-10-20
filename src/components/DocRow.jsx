import { File } from "lucide-react";
const getStatusClasses = (status) => {
  let text, bg;
  switch (status) {
    case "Verified":
      text = "text-[#4b6043]";
      bg = "bg-[#e5f5e5]";
      break;
    case "Declined":
      text = "text-red-700";
      bg = "bg-red-100";
      break;
    case "Waiting":
      text = "text-yellow-700";
      bg = "bg-yellow-100";
      break;
  }
  return { text, bg };
};
const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-gray-400"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
const DocRow = ({ name, status, time }) => {
  const { text, bg } = getStatusClasses(status);
  return (
    <div className="grid grid-cols-[3fr_2fr_2fr_0.1fr] items-center py-4 border-b border-gray-100 last:border-none text-sm hover:bg-gray-50 transition duration-150 cursor-pointer">
      <div className="flex items-center space-x-4 text-gray-700 font-medium">
        <File size={16} className="text-gray-500" />
        <span>{name}</span>
      </div>
      <div className="flex justify-start">
        <span
          className={`px-3 py-1 font-semibold rounded-md text-xs ${text} ${bg}`}
        >
          {status}
        </span>
      </div>
      <span className="text-gray-500">{time}</span>
      <div className="flex justify-end pr-1">
        <ChevronRight />
      </div>
    </div>
  );
};
export default DocRow;